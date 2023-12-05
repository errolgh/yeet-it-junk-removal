import React, { useState } from 'react'
import Owl from '../images/svg/owl.js'
import { Link } from 'gatsby'
import { FaPhone } from 'react-icons/fa6'

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="relative flex justify-center">
      <nav className="bg-yellow-600 text-slate-400 md:text-black w-full flex items-center justify-between font-bold md:px-5 lg:justify-center lg:gap-x-80 xl:gap-x-96">
        <Link to="/">
          <div className="flex">
            {/*  Logo  */}
            <div className="flex w-20 p-4 pt-6 relative z-50">
              <Owl theme="light" />
            </div>
            <div className="flex flex-col text-center justify-center z-10 text-slate-200">
              <span className="text-xl tracking-widest text-black font-bold">
                YEET IT!
              </span>
              <span className="text-xs tracking-widest uppercase text-black font-bold">
                Junk&nbsp;Removal
              </span>
            </div>
          </div>
        </Link>
        <ul
          className={`${open ? 'animate-right fade' : ''}
         duration-700 animate-li 
        absolute z-30 top-0 left-full w-3/5
        pr-12 pt-24 text-right h-screen bg-black lg:bg-transparent
        flex flex-col space-y-6 font-alata md:p-4 md:h-10 md:bg-transparent md:w-min
        md:visible md:flex-row md:space-x-8 md:space-y-0 md:static md:mb-6 md:pt-10 md:items-center`}
        >
          <li className="hover:text-teal-400">
            <Link to="/" activeClassName="active">
              Home
            </Link>
          </li>
          <li className='flex place-content-end -mr-3 bg-black rounded-xl h-10 pr-3'>
            <a
              href="tel:4438390909"
              className="flex relative w-48 ml-10 pt-1"
            >
              <div className='text-right'>
                <FaPhone className="absolute text-yellow-600 top-3 left-3" />
                <span className=" text-white ml-9 font-bold">(443)839&nbsp;-&nbsp;0909</span>
              </div>
            </a>
          </li>
        </ul>

        {/*  Hamburger Button  */}
        <div className="md:hidden p-2 pr-6">
          <button
            onClick={() => setOpen(!open)}
            id="menu-btn"
            type="button"
            className={`${
              open ? 'open' : ''
            } z-40 block hamburger md:hidden focus:outline-none focus:ring-blue-50`}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
      </nav>
    </header>
  )
}
