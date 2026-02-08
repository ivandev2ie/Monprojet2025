"use client"

import Link from "next/link"
import React from "react"

function Nava() {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">2IE</a>
      </div>

      <div className="flex-none gap-2">
        <Link href="/home" className="btn btn-ghost">Home</Link>
        <Link href="/Apropos" className="btn btn-ghost">À propos</Link>
        <Link href="/Contacts" className="btn btn-ghost">Contact</Link>
        <Link href="/Subscription" className="btn btn-ghost">Inscription</Link>
        <Link href="/Connexion" className="btn btn-ghost">Connexion</Link>

        {/* Panier */}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                
              </svg>
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </div>

         
        </div>

        {/* Avatar */}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="User avatar"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEEfKR6Bc6hx-K1ziYqeqktW39JbKH2oiPlg&s"
              />
            </div>
          </div>

          <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Nava
