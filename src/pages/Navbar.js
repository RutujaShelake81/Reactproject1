import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaYoutube } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";


export default function Navbar() {
  return (
    <div className='flex justify-between px-14 h-14 items-center bg-[#212121] opacity-95 sticky'>
        <div className='flex gap-8 items-center text-2xl text-white'>
            <div>
            <GiHamburgerMenu />
            </div>
            <div className='flex gap-2 items-center justify-center'>
            <FaYoutube className='text-3xl text-red-500' />
           <span className='text-2xl font-bold'>Youtube</span>
            </div>
            <div>
                <form>
                    <div>
                        <div className="flex gap-5 items-center pr-5">
                            <input type='text' placeholder='Search' className="w-96 bg-zinc-900 focus:outline-none border-none pl-2" />
                            <CiSearch  className='flex items-center'/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
         
    </div>
  )
}
