import { useState } from "react"
import { Dialog } from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import { NavLink } from "react-router-dom"
import { navLinks } from "../constants"
import PropTypes from "prop-types"

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <nav className="fixed w-full top-0 py-6" aria-label="Global">
        <div className="flex max-w-5xl mx-auto justify-between items-center xs:px-6">
          {/* Branding */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              (isActive ? "active " : "") +
              "text-2xl font-bold text-white-300 hover:text-white"
            }
            onClick={() => {
              window.scrollTo(0, 0)
            }}
          >
            <span className="sr-only">
              Simon Bertram | Web Developer Portfolio
            </span>
            Portfolio
          </NavLink>

          {/* Navigation */}
          <ul className="hidden md:flex gap-10">
            {navLinks.map((link) => (
              <li key={link.id} className="block">
                <NavItem to={link.id} title={link.title}>
                  {link.title}
                </NavItem>
              </li>
            ))}
          </ul>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md text-white-300 hover:text-white"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-8 w-8" aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50">
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-primary px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              {/* Branding */}
              <NavLink
                to="/"
                className={({ isActive }) =>
                  (isActive ? "active " : "") +
                  "text-2xl font-bold text-white-300 hover:text-white"
                }
                onClick={() => {
                  window.scrollTo(0, 0)
                }}
              >
                <span className="sr-only">
                  Simon Bertram Web Developer Portfolio
                </span>
                Portfolio
              </NavLink>

              {/* Mobile menu button */}
              <div className="flex md:hidden">
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-md text-white-300 hover:text-gray-500"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-8 w-8" aria-hidden="true" />
                </button>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-8">
                    {navLinks.map((link) => (
                      <li key={link.id} className="block">
                        <NavItem
                          to={`/${link.id}`}
                          title={link.title}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block rounded-lg px-3 py-4 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        ></NavItem>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  )
}

export default Navbar

const NavItem = ({ to, title }) => {
  const activeClass = "text-blue-300 border-b-2 border-blue-500 px-3 py-2"
  const inactiveClass =
    "text-white-200 hover:text-blue-300 hover:border-b-2 hover:border-blue-500 px-3 py-2"

  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? activeClass : inactiveClass)}
    >
      {title}
    </NavLink>
  )
}

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}
