import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Draggable from "react-draggable"

export default function Projects() {
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
      <div
        className={`window-container ${fullScreen ? "w-full h-full" : ""} bg-ubuntu-7 rounded-t-lg ${dragging ? "" : "transition-all"}`}
        ref={windowRef}
      >
        <div className="flex flex-col p-2 justify-end bg-ubuntu-8 border-b border-black rounded-t-lg">
          <div className="flex flex-row gap-1">
            <h2 className="mx-auto font-medium text-center">Home</h2>
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
        <div className="absolute bottom-0 top-10 inset-x-0 flex">
          <ul className="h-full border-t border-r border-black pt-2">
            <li className="p-3 ml-1 w-28">Front-end</li>
            <li className="p-3 ml-1 w-28">Back-end</li>
            <li className="p-3 ml-1 w-28">Others</li>
          </ul>
          <ul className="border-t border-black w-full ">
            <li className="p-3 border-b border-ubuntu-6 w-full">
              This is the file #1
            </li>
            <li className="p-3 border-b border-ubuntu-6 w-full">
              This is the file #2
            </li>
            <li className="p-3 border-b border-ubuntu-6 w-full">
              This is the file #3
            </li>
            <li className="p-3 border-b border-ubuntu-6 w-full">
              This is the file #4
            </li>
          </ul>
        </div>
      </div>
    </Draggable>
  )
}
