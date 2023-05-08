import "@/styles/globals.css"
import Navbar from "../components/Navbar"
import { AnimatePresence, motion } from "framer-motion"
import { useRouter } from "next/router"

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
              top: 20,
            },
            animateState: {
              opacity: 1,
              top: 0,
            },
            exitState: {
              opacity: 0,
              top: -20,
            },
          }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Navbar>
  )
}
