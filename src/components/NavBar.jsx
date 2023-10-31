import React, { useState } from 'react'
import {FaBars} from 'react-icons/fa'

const NavBar = () => {
    const[nav,setNav] = useState(false)

    const Links= [
        {
            id: 1,
            value:'Home',
        },
         {
            id: 2,
            value:'About',
        },
         {
            id: 3,
            value:'Portfolio',
        },
         {
            id: 4,
            value:'Experience',
        },
         {
            id: 5,
            value:'Contact',
        },
    ]
  return (
    <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed'>
          <div>
              <h1 className='text-5xl font-signature ml-2'>Mayank</h1>
          </div>
          <ul className='hidden md:flex'>
          {Links.map((link) => 
            <li className='px-4 cursor-pointer font-medium text-gray-500 hover:scale-105 duration-100 fontbold' key={link.id}>{link.value}</li>
          )}
          </ul>
          <div className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden' onClick={() => setNav(!nav)}>
              {nav ? 
                <FaBars size={30}/> : <FaBars size={30} />
              }
          </div>
          {nav && <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
             {Links.map((link) => 
            <li className='px-4 cursor-pointer capitalize py-6 text-4xl' key={link.id}>{link.value}</li>
             )}
          </ul>
          }
    </div>
  )
}

export default NavBar