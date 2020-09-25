import { motion } from "framer-motion"
import React from "react"
import { Tooltip } from "./components/Tooltip"
import { Background } from "./components/Background"
import { LargeCluster } from "./components/LargeCluster"
import { SchoolLabel } from "./components/SchoolLabel"
import { SelectedSchool } from "./components/SelectedSchool"
import { SmallCluster } from "./components/SmallCluster"
import clsx from "clsx"

/**
 * Contains the background animation for the homepage and cycles
 * through animation states based on the provided `step`
 */
const ExplorerAnimation = ({ step, className, ...props }) => {
  // states for the staggered large cluster animation
  const cluster = {
    hidden: { opacity: 0, scale: 1 },
    show: {
      opacity: 1,
      scale: 0.85,
      transition: {
        duration: 1.2,
        staggerChildren: 0.015,
      },
    },
  }
  return (
    <div className={clsx("expani", className)} {...props}>
      <svg className="expani__map" viewBox="0 0 760 475">
        <Background
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: step < 1 ? 0 : 1,
            scale: step === 4 ? 0.7 : 0.8,
          }}
          transition={{ duration: step === 4 ? 1.2 : 0.6 }}
          style={{ originX: "56%", originY: "58%" }}
        />
        <SelectedSchool
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: step < 1 || step > 4 ? 0 : 1,
            scale: step === 4 ? 0.7 : 0.8,
          }}
          transition={{ duration: step === 4 ? 1.2 : 0.6 }}
          style={{ transformOrigin: "400px 250px" }}
        />
        <SchoolLabel
          initial={{ opacity: 0, scale: 0.8, translateX: 5, translateY: 10 }}
          animate={{
            opacity: step < 3 && step > 0 ? 0.8 : 0,
          }}
          transition={{ duration: 0.6 }}
          style={{ transformOrigin: "400px 250px" }}
        />
        <SmallCluster
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: step < 3 ? 0 : 1,
            scale: step === 4 ? 0.7 : 0.8,
          }}
          transition={{ duration: step === 4 ? 1.2 : 0.6 }}
          style={{ transformOrigin: "400px 250px" }}
        />
        <LargeCluster
          initial={{ opacity: 0 }}
          variants={cluster}
          animate={step === 4 ? "show" : "hidden"}
          style={{ transformOrigin: "400px 250px" }}
        />
      </svg>
      <motion.svg
        className="expani__tooltip"
        initial={{ opacity: 0 }}
        animate={{
          opacity: step === 2 ? 1 : 0,
        }}
        transition={{ duration: 0.6 }}
        width="252"
        height="353"
        viewBox="0 0 252 353"
      >
        <Tooltip />
      </motion.svg>
    </div>
  )
}

export default ExplorerAnimation
