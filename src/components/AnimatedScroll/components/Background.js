import { motion } from "framer-motion"
import React from "react"

export const Background = props => {
  return (
    <motion.g {...props}>
      <image href="/images/home-map-bg.jpg" x="-270" y="-155" width="1232" />
    </motion.g>
  )
}
