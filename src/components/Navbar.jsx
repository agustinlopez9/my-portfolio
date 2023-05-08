import { useState, useEffect } from "react"
import Link from "next/link"

const Navbar = ({ children }) => {
  const [time, setTime] = useState()

  useEffect(() => {
    const options = { weekday: 'short', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    setInterval(function() {
      const currentDate = new Date()
      setTime(currentDate.toLocaleDateString(undefined, options).replaceAll(',', ''))
    }, 500); // Update every half second
  })

  return (
    <main className="flex h-screen text-white cursor-default">
      <div className="flex justify-between items-center w-full h-8 px-2 text-center bg-ubuntu-9">
        <p className="p-1">Activities</p>
        <p className="p-1">
          {
            time ? time : <span className="block bg-ubuntu-6 h-3 w-48 rounded-full animate-pulse"/>
          }
        </p>
        <div className="flex gap-2 text-white">
          <img src="wifi.png" width="16px" alt="wifi" />
          <img src="volume.svg" width="16px" alt="volume" />
          <img src="shutdown.svg" width="16px" alt="shutdown" />
        </div>
      </div>
      <navbar className="absolute bg-black/30 w-[60px] left-0 bottom-0 top-8">
        <ul className="mt-2">
          <li className="p-1">
            <Link href="/">
              <img className="my-1" src="/home.svg" alt="home" />
            </Link>
          </li>
          <li className="p-1">
            <Link href="/projects">
              <img className="my-1" src="/projects.svg" alt="projects" />
            </Link>
          </li>
          <li className="p-1">
            <Link href="/terminal">
              <img className="my-1" src="/terminal.svg" alt="terminal" />
            </Link>
          </li>
        </ul>
      </navbar>
      <div className="flex justify-center items-center absolute top-8 left-[60px] right-0 bottom-0 overflow-hidden">{children}</div>
    </main>
  )
}

export default Navbar
