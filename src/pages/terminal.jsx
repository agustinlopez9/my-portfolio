import Link from "next/link"
import Draggable from "react-draggable"

export default function Terminal() {
  return (
    <Draggable bounds='parent'>
      <div className="window-container bg-ubuntu-4 rounded-t-lg">
        <div className="flex p-2 justify-end bg-ubuntu-8 border-b border-black rounded-t-md">
          <h2 className="mx-auto font-medium">Terminal</h2>
          <div className="flex gap-1">
            <img src="/maximize.svg" width="24px" alt="maximize" className="cursor-pointer bg-ubuntu-6 p-0.5 rounded-full"/>
          <Link href={"/"}>
            <img src="/close.svg" width="24px" alt="close" className="cursor-pointer bg-ubuntu-6 p-0.5 rounded-full"/>
          </Link>
          </div>
        </div>
        <ul className="p-3">
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
    </Draggable>
  )
}
