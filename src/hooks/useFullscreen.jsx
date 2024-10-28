import { useState, useEffect } from "react"

export default function useFullscreen({windowRef}) {
  const [fullScreen, setFullScreen] = useState(null)
  const [position, setPosition] = useState(false)

  useEffect(() => {
    if (fullScreen && windowRef.current) {
      setPosition(windowRef.current.style.transform)
      windowRef.current.style.transform = "translate(0, 0)"
    } else if (fullScreen === false && fullScreen !== null) {
      windowRef.current.style.transform = position
    }
  }, [fullScreen])

  return {
    fullScreen,
    setFullScreen
  }
}