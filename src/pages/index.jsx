import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Draggable from "react-draggable"

export default function Home() {
  const [fullScreen, setFullScreen] = useState(false)
  const [dragging, setDragging] = useState(false)
  const [position, setPosition] = useState("")
  const windowRef = useRef(null)

  useEffect(() => {
    if (fullScreen && windowRef.current) {
      setPosition(windowRef.current.style.transform)
      windowRef.current.style.transform = "translate(0, 0)"
    } else {
      windowRef.current.style.transform = position
    }
  }, [fullScreen])

  return (
    <Draggable bounds="parent" onStart={() => setDragging(true)} onStop={() => setDragging(false)} disabled={fullScreen}>
      <div className={`window-container ${fullScreen ? "w-full h-full" : ""} bg-ubuntu-6 rounded-t-lg ${dragging ? "" : "transition-all"}`} ref={windowRef}>
        <div className="flex p-2 justify-end bg-ubuntu-8 border-b border-black rounded-t-md">
          <h2 className="mx-auto font-medium">Home</h2>
          <div className="flex gap-1">
            <img
              src="/maximize.svg"
              width="24px"
              alt="maximize"
              className="cursor-pointer bg-ubuntu-6 p-0.5 rounded-full"
              onClick={() => setFullScreen(!fullScreen)}
            />
            <Link href={"/"}>
              <img src="/close.svg" width="24px" alt="close" className="cursor-pointer bg-ubuntu-6 p-0.5 rounded-full" />
            </Link>
          </div>
        </div>
        <div>
          <p className="home-title">
            Nombre: <span className="text-ubuntu-5">Agustin Lopez</span>
          </p>
          <br />
          <p className="home-title">
            Desarrollador: <span className="text-ubuntu-5">Full Stack</span>
          </p>
          <p className="home-title">
            Front-end: <span className="text-ubuntu-5">React, Tailwind CSS</span>
          </p>
          <p className="home-title">
            Back-end: <span className="text-ubuntu-5">Node.js, PostgreSQL</span>
          </p>
          <p className="home-title">
            Services: <span className="text-ubuntu-5">AWS, Amplify, Firebase</span>
          </p>
        </div>
      </div>
    </Draggable>
  )
}
