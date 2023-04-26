import Link from "next/link"
import Draggable from "react-draggable"

export default function Terminal() {
  return (
    <Draggable bounds='parent'>
      <div className="window-container bg-ubuntu-6">
        <div className="flex p-2 justify-end bg-ubuntu-8 border-b border-black rounded-t-lg">
          <h2 className="mx-auto font-medium">Home</h2>
          <Link href={"/"}>
              <img src="/close.svg" width="24px" alt="close" className="cursor-pointer bg-ubuntu-6 p-0.5 rounded-full"/>
          </Link>
        </div>
      </div>
    </Draggable>
  )
}
