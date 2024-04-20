import { useState } from "react"
import { Dialog } from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import { NavLink } from "react-router-dom"
import { navLinks } from "../constants"

const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 py-6">
      <div className="flex max-w-5xl mx-auto justify-between items-center">
        <NavLink
          to="/"
          isActive={() => false}
          onClick={() => {
            window.scrollTo(0, 0)
          }}
          className="text-2xl font-bold"
        >
          Portfolio
        </NavLink>
        <ul className="hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li key={link.id} className="inline-block">
              <NavLink
                to={`/${link.id}`}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {link.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
