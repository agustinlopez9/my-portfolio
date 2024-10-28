import { useState } from "react"
import { useRouter } from "next/router"
import { AnimatePresence, motion } from "framer-motion"
import Navbar from "../components/Navbar"
import "@/styles/globals.css"

export default function App({ Component, pageProps }) {
  const router = useRouter()
  return (
    <Navbar>
      <AnimatePresence mode="wait">
        <motion.div
          className="relative flex justify-center items-center w-full h-full"
          key={router.route}
          initial="initialState"
          animate="animateState"
          exit="exitState"
          transition={{
            duration: 0.1,
          }}
          variants={{
            initialState: {
              opacity: 0,
              transform: "translate(-50%, -35%) scale(25%)"
            },
            animateState: {
              opacity: 1,
              transform: `translate(0,0) scale(100%)`,
            },
            exitState: {
              opacity: 0,
              transform: "translate(-50%, -35%) scale(25%)"
            },
          }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Navbar>
  )
}
