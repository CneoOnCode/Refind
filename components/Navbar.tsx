import React from 'react'

export default function Navbar() {
  return (
    <nav className=" static flex items-center justify-between py-4">
      <p className="text-grey-800 text-2xl font-bold">Refind</p>
      <div className="flex">
        <a
          href="/api/logout"
          className="rounded bg-blue-500 py-2 px-4 text-white hover:bg-blue-600"
        >
          Logout
        </a>
        <a
          href="/api/login"
          className="rounded bg-blue-500 py-2 px-4 text-white hover:bg-blue-600"
        >
          Login
        </a>
      </div>
    </nav>
  )
}
