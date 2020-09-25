import React, { useRef } from "react"
import { useInView } from "react-intersection-observer"
import clsx from "clsx"
import ExplorerAnimation from "./ExplorerAnimation"

/**
 * Contains all of the sections for the homepage scroll animation along with a fixed animation in the background
 */
const ExplorerSteps = ({ className, ...props }) => {
  // setup intersection observers
  const [animationRef, inViewAnimation] = useInView()
  const step1 = useInView({ rootMargin: "-49% 0px" })
  const step2 = useInView({ rootMargin: "-49% 0px" })
  const step3 = useInView({ rootMargin: "-49% 0px" })
  const step4 = useInView({ rootMargin: "-49% 0px" })
  // ref to track active step
  const activeRef = useRef(0)
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

  // check if any steps are in view
  const currentIndex = steps.findIndex(step => step.inView)
  // set active index to the current step in view, or the last viewed index
  const activeIndex = currentIndex > -1 ? currentIndex : activeRef.current
  // update the ref to the active step index
  activeRef.current = currentIndex > -1 ? currentIndex : activeRef.current
  return (
    <div
      ref={animationRef}
      className={clsx("animation", className, {
        "animation--active": inViewAnimation,
      })}
      {...props}
    >
      <ExplorerAnimation className="animation__fixed" step={activeIndex + 1} />
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
          <img id="colorscale" alt="color scale indicating which colors correspond to each quintile" src="/images/scale.svg" />
        </div>
      </div>
      <div ref={step4.ref} className={step4.classes}>
        <div className="animation__step-content">
          <p>
            <span>Learn more about your community's assets and needs</span>
            <a href="/explorer">
              Go to the Explorer{" "}
              <img
                className="rt-arrow-orange"
                src="/images/rt-arrow-orange.svg"
                alt=""
              />
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ExplorerSteps
