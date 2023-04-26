import Link from "next/link"

const Navbar = ({ children }) => {
  return (
    <main className="flex h-screen text-white">
      <div className="absolute flex justify-between w-screen h-8 px-2 text-center bg-ubuntu-9">
        <p className="p-1">Activities</p>
        <p className="p-1">lun 24 de abr 18:42</p>
        <p className="p-1">agustinlopez9</p>
      </div>
      <navbar className="absolute bg-black/20 w-[60px] left-0 bottom-0 top-8">
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
