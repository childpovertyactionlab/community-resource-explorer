import React, { useState, useEffect, useRef } from "react"
import { useInView } from "react-intersection-observer"
import clsx from "clsx"
import ScrollFeatureSVG from "./assets/ScrollFeatureSVG"

const ExplorerSteps = ({ ...props }) => {
  // setup intersection observers
  const [animationRef, inViewAnimation] = useInView()
  const step1 = useInView({ rootMargin: "-49% 0px" })
  const step2 = useInView({ rootMargin: "-49% 0px" })
  const step3 = useInView({ rootMargin: "-49% 0px" })
  const step4 = useInView({ rootMargin: "-49% 0px" })

  // add classes to step
  const steps = [step1, step2, step3, step4].map((step, i) => {
    const stepClass = "animation__step--" + (i + 1)
    step.classes = clsx({
      animation__step: true,
      [stepClass]: true,
      "animation__step--active": step.inView,
    })
    return step
  })

  // get the lowest step in view
  const activeIndex = steps.findIndex(step => step.inView)

  return (
    <div
      ref={animationRef}
      className={clsx("animation", { "animation--active": inViewAnimation })}
    >
      <div className="animation__fixed">
        <svg
          viewBox="0 0 760 475"
          style={{ height: "100%", position: "absolute", top: 0, right: 0 }}
        >
          <ScrollFeatureSVG index={activeIndex} />
        </svg>
      </div>
      <div ref={step1.ref} className={step1.classes}>
        <div className="animation__step-content">
          <p>
            <span>In the Explorer</span>
            <span>
              Each community is represented by a two-mile radius around a
              school.
            </span>
          </p>
        </div>
      </div>
      <div ref={step2.ref} className={step2.classes}>
        <div className="animation__step-content">
          <p>
            The Explorer visualizes data for each school community across
            several categories.
          </p>
        </div>
      </div>
      <div ref={step3.ref} className={step3.classes}>
        <div className="animation__step-content">
          <p>
            The color scale illustrates how well school communities are
            resourced.
          </p>
          <img id="colorscale" src="/images/scale.svg" />
        </div>
      </div>
      <div ref={step4.ref} className={step4.classes}>
        <div className="animation__step-content">
          <p>
            <span>Learn more about your community's assets and needs</span>
            <a href="/explorer">
              Go to the explorer{" "}
              <img
                className="rt-arrow-orange"
                src="/images/rt-arrow-orange.svg"
              />
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ExplorerSteps
