import Link from "next/link"
import Draggable from "react-draggable"

export default function Home() {
  return (
    <Draggable bounds='parent'>
      <div className="window-container bg-ubuntu-6 rounded-t-lg">
        <div className="flex p-2 justify-end bg-ubuntu-8 border-b border-black rounded-t-md">
          <h2 className="mx-auto font-medium">Home</h2>
          <Link href={"/"}>
              <img src="/close.svg" width="24px" alt="close" className="cursor-pointer bg-ubuntu-6 p-0.5 rounded-full"/>
          </Link>
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
            Front-end:{" "}
            <span className="text-ubuntu-5">React, Tailwind CSS</span>
          </p>
          <p className="home-title">
            Back-end: <span className="text-ubuntu-5">Node.js, PostgreSQL</span>
          </p>
          <p className="home-title">
            Services:{" "}
            <span className="text-ubuntu-5">AWS, Amplify, Firebase</span>
          </p>
        </div>
      </div>
    </Draggable>
  )
}
