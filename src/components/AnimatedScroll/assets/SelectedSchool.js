import { motion } from "framer-motion"
import React from "react"

export const SelectedSchool = ({ children, ...props }) => {
  return (
    <motion.g {...props}>
      <circle
        cx="424.585"
        cy="276.585"
        r="132.585"
        fill="#465EB3"
        fillOpacity="0.1"
      />
      <circle cx="424.783" cy="277.023" r="8.70779" fill="#86A0D2" />
      {children}
    </motion.g>
  )
}
