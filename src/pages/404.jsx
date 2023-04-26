import Link from "next/link"
import { Component } from "react"

export default class extends Component {
  render() {
    return (
      <div className="flex justify-center items-center h-full">
        <div className="flex flex-col w-[300px] text-center bg-ubuntu-6 rounded-t-lg">
          <span className="p-2 bg-ubuntu-8 border-b border-ubuntu-9 rounded-t-lg text-center">
            Error
          </span>
          <div className="flex items-center gap-4 justify-center p-8">
            <img src="/error.svg" alt="error" className="w-12" />
            <span className="font-bold">404 - Page Not Found.</span>
          </div>
          <Link href="/">
            <span className="block m-2 bg-ubuntu-8 p-2 rounded-md border border-ubuntu-9">Go Back</span>
          </Link>
        </div>
      </div>
    )
  }
}
