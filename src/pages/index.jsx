import Link from "next/link"

export default function Home() {
  return (
    <div className="relative top-[140px] left-[150px] w-[700px] h-[500px] bg-ubuntu-6 text-white rounded-md shadow-xl">
      <div className="flex p-2 justify-end bg-ubuntu-7 border-b border-black">
        <h2 className="mx-auto font-medium">Home</h2>
        <Link href={"/"}>
          <span className="mx-1 cursor-pointer bg-ubuntu-8 p-1 rounded-full">X</span>
        </Link>
      </div>
      <div className="block h-full">
        <p className="flex justify-between m-4 px-3 py-2 rounded-md border border-black bg-ubuntu-7">
          Nombre: <span className="text-ubuntu-5">Agustin Lopez</span>
        </p>
        <br />
        <p className="flex justify-between m-4 px-3 py-2 rounded-md border border-black bg-ubuntu-7">
          Desarrollador: <span className="text-ubuntu-5">Full Stack</span>
        </p>
        <p className="flex justify-between m-4 px-3 py-2 rounded-md border border-black bg-ubuntu-7">
          Front-end: <span className="text-ubuntu-5">React, Tailwind CSS</span>
        </p>
        <p className="flex justify-between m-4 px-3 py-2 rounded-md border border-black bg-ubuntu-7">
          Back-end: <span className="text-ubuntu-5">Node.js, PostgreSQL</span>
        </p>
        <p className="flex justify-between m-4 px-3 py-2 rounded-md border border-black bg-ubuntu-7">
          Services: <span className="text-ubuntu-5">AWS, Amplify, Firebase</span>
        </p>
      </div>
    </div>
  )
}
