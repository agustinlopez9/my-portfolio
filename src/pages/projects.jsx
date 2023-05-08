import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Draggable from "react-draggable"

export default function Projects() {
  const [fullScreen, setFullScreen] = useState(false)
  const [dragging, setDragging] = useState(false)
  const [position, setPosition] = useState("")
  const [folder, setFolder] = useState("frontend")
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
        <div className="relative p-2 bg-ubuntu-8 border-b border-black rounded-t-md">
          <h2 className="block mx-auto text-center font-medium">Files</h2>
          <div className="absolute inset-0 flex items-center gap-1 justify-end p-2 mr-auto">
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
        <div className="flex absolute bottom-0 top-10 inset-x-0">
          <ul className="w-36 h-full border-t border-r border-black pt-2">
            <li className={`folder-item ${folder === 'frontend' ? 'bg-neutral-700' : 'hover:bg-ubuntu-6'}`} onClick={() => setFolder('frontend')}>Front-end</li>
            <li className={`folder-item ${folder === 'backend' ? 'bg-neutral-700' : 'hover:bg-ubuntu-6'}`} onClick={() => setFolder('backend')}>Back-end</li>
            <li className={`folder-item ${folder === 'others' ? 'bg-neutral-700' : 'hover:bg-ubuntu-6'}`} onClick={() => setFolder('others')}>Others</li>
          </ul>
          <ul className={`absolute left-36 right-0 border-t overflow-scroll max-h-full border-black ${folder === 'frontend' ? 'block' : 'hidden'}`}>
            <li className="flex items-center p-3 border-b border-ubuntu-6 w-full h-28">
              <img src="/MovieSearch.png" alt="project-1" className="h-full" />
              <h3 className="mx-4">Movie database search</h3>
            </li>
            <li className="flex items-center p-3 border-b border-ubuntu-6 w-full h-28">
              <img src="/TipCalculatorApp.png" alt="project-2" className="h-full" />
              <h3 className="mx-4">Tip Calculator App</h3>
            </li>
            <li className="flex items-center p-3 border-b border-ubuntu-6 w-full h-28">
              <img src="/MovieSearch.png" alt="project-1" className="h-full" />
              <h3 className="mx-4">Movie database search</h3>
            </li>
            <li className="flex items-center p-3 border-b border-ubuntu-6 w-full h-28">
              <img src="/TipCalculatorApp.png" alt="project-2" className="h-full" />
              <h3 className="mx-4">Tip Calculator App</h3>
            </li>
            <li className="flex items-center p-3 border-b border-ubuntu-6 w-full h-28">
              <img src="/MovieSearch.png" alt="project-1" className="h-full" />
              <h3 className="mx-4">Movie database search</h3>
            </li>
            <li className="flex items-center p-3 border-b border-ubuntu-6 w-full h-28">
              <img src="/TipCalculatorApp.png" alt="project-2" className="h-full" />
              <h3 className="mx-4">Tip Calculator App</h3>
            </li>
          </ul>
          <ul className={`absolute left-36 right-0 inset-y-0 ${folder === 'backend' ? 'block' : 'hidden'}`}>
            <li className="flex items-center justify-center h-full">Folder is empty</li>
          </ul>
          <ul className={`absolute left-36 right-0 inset-y-0 ${folder === 'others' ? 'block' : 'hidden'}`}>
            <li className="flex items-center justify-center h-full">Folder is empty</li>
          </ul>
        </div>
      </div>
    </Draggable>
  )
}
