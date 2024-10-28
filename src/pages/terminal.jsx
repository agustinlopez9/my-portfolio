import { useState, useEffect, useRef } from "react"
import useFullscreen from "@/hooks/useFullscreen"
import Link from "next/link"
import Draggable from "react-draggable"

const commands = {
  help: "Sorry, this is a work in progress, commands will be available in the future!",
  hello: "Hello, how are you?",
  whoareyou: "My name is Agustin, I'm a web developer and I designed this website!",
}

export default function Terminal() {
  const [dragging, setDragging] = useState(false)
  const [terminal, setTerminal] = useState([])
  const windowRef = useRef(null)
  const inputRef = useRef(null)
  const { fullScreen, setFullScreen } = useFullscreen({ windowRef })

  const handleSubmit = (e) => {
    e.preventDefault()
    const newContent = [...terminal]
    const inputValue = inputRef.current.value
    const command = commands[inputValue]
    inputRef.current.value = ""

    if (inputValue == "clear") {
      const terminal = []
      setTerminal(terminal)
      return
    }

    if (command) {
      newContent.push(inputValue, command)
    } else {
      newContent.push(inputValue, `${inputValue} is not a valid command`)
    }
    setTerminal(newContent)
  }

  return (
    <Draggable bounds="parent" onStart={() => setDragging(true)} onStop={() => setDragging(false)} disabled={fullScreen}>
      <div
        className={`window-container ${fullScreen ? "w-full h-full" : ""} bg-ubuntu-4 rounded-t-lg ${dragging ? "" : "transition-all"}`}
        id="terminal-window"
        ref={windowRef}
      >
        <div className="relative p-2 bg-ubuntu-8 border-b border-black rounded-t-md">
          <h2 className="block mx-auto text-center font-medium">Terminal</h2>
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
        <div className="absolute overflow-scroll inset-x-0 bottom-0 top-10">
          <ul className="p-3">
            <li>Type 'help' to get the list of commands available</li>
            {/* COMMANDS HISTORY */}
            {terminal.map((item, index) => (
              <li key={index}>
                <UserTerminalText />
                {" " + item}
              </li>
            ))}
            {/* INPUT */}
            <li className="flex">
              <UserTerminalText />
              <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                  <input className="bg-transparent border-none outline-none px-1" ref={inputRef}></input>
                </div>
              </form>
            </li>
          </ul>
        </div>
      </div>
    </Draggable>
  )
}

function UserTerminalText() {
  return (
    <>
      <span className="text-green-500 font-medium">user@linux-system</span>:<span className="text-blue-500">~</span>$
    </>
  )
}
