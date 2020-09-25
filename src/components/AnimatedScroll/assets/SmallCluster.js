import { motion } from "framer-motion"
import React from "react"

export const SmallCluster = props => {
  return (
    <motion.g {...props}>
      <circle cx="604.926" cy="247.09" r="8.70779" fill="#5DBF7F" />
      <circle cx="508.052" cy="264.506" r="8.70779" fill="#5DBF7F" />
      <circle cx="360.563" cy="371.448" r="8.70779" fill="#8DD6B6" />
      <circle cx="277.295" cy="338.522" r="8.70779" fill="#8DD6B6" />
      <circle cx="466.145" cy="290.901" r="8.70779" fill="#4E59B1" />
      <circle
        cx="491.636"
        cy="148.917"
        r="10.2078"
        fill="#8DD6B6"
        stroke="white"
        strokeWidth="3"
      />
      <circle
        cx="400.837"
        cy="99.8741"
        r="10.2078"
        fill="#8DD6B6"
        stroke="white"
        strokeWidth="3"
      />
      <circle cx="424.783" cy="233.484" r="8.70779" fill="#A4DCE5" />
      <circle cx="457.437" cy="233.484" r="8.70779" fill="#A4DCE5" />
      <circle cx="508.052" cy="299.609" r="8.70779" fill="#4E59B1" />
    </motion.g>
  )
}
