import Link from "next/link"

export default function Home() {
  return (
    <div className="relative top-[140px] left-[150px] w-[700px] h-[500px] text-white rounded-md shadow-xl">
      <div className="flex p-2 justify-end bg-ubuntu-7 border-b border-black">
        <h2 className="mx-auto font-medium">Terminal</h2>
        <Link href={"/"}>
          <span className="mx-1 cursor-pointer bg-ubuntu-8 p-1 rounded-full">X</span>
        </Link>
      </div>
      <ul className="bg-ubuntu-4 p-3 h-full">
        <li>
          To run a command as administrator user: "root", user "sudo command".
        </li>
        <li>See "man sudo_root" for details</li>
        <li>
          <span className="text-green-500">agustin@agustin-system</span> sudo
          apt install brave
        </li>
      </ul>
    </div>
  )
}
