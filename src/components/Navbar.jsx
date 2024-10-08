import {close , logo , menu } from "../assets"
import { useState } from "react";
import { navLinks } from './../constants/index';

const Navbar = () => {
  const [toggle,settoggle] = useState(false);
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
       <img src={logo} alt="logo" className="w-[124px] h-[32px]" />

       <ul className="list-none sm:flex hidden justify-end items-center flex-1">
         {
          navLinks.map((nav,index)=> (
            <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length-1 ? 'mr-0' : 'mr-10'}`}>
               <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))
         }
       </ul>

       <div className="sm:hidden flex flex-1 justify-end items-center">
          <img src={toggle ? close : menu} alt="icons" className="h-[28px] w-[28px] object-contain "
           onClick={()=>settoggle((prev)=> !prev)}
          />
          <div className={`${toggle ? 'block' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2
          min-w-[140px] rounded-xl sidebar`}>
            <ul className="list-none flex flex-col justify-end items-center flex-1">
         {
          navLinks.map((nav,index)=> (
            <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length-1 ? 'mb-0' : 'mb-4'}`}>
               <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))
         }
       </ul>
          </div>
       </div>
    </nav>
  )
}

export default Navbar
