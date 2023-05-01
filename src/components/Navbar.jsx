import { useState, useEffect } from "react"
import Link from "next/link"
import moment from "moment"

const Navbar = ({ children }) => {
  const [time, setTime] = useState(moment().format('MMMM Do HH:mm a'))

  useEffect(() => {
    setInterval(function() {
      const currenTime = moment().format('MMMM Do HH:mm a')
      setTime(currenTime)
    }, 1000); // Update every second
  })

  return (
    <main className="flex h-screen text-white">
      <div className="flex justify-between w-full h-8 px-2 text-center bg-ubuntu-9">
        <p className="p-1">Activities</p>
        <p className="p-1">{time}</p>
        <p className="p-1">agustinlopez9</p>
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
      <div className="flex justify-center items-center absolute top-8 left-[60px] right-0 bottom-0">{children}</div>
    </main>
  )
}

export default Navbar
