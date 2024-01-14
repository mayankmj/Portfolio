import React from 'react'
import {FaGithub , FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const SocialLinks = () => {

    const Links = [
        {
            id:1,
            child:(
                  <>
                    Linkedin <FaLinkedin size={30} />
                  </>
            ),
            goto: 'https://www.linkedin.com/in/mayank-johari-52aa05202/',
            style: 'rounded-tr-md',
        },
        {
            id:2,
            child:(
                  <>
                    github <FaGithub size={30} />
                  </>
            ),
            goto: 'https://github.com',
            // style: 'rounded-tr-md',
        },
        {
            id:3,
            child:(
                  <>
                    Mail<HiOutlineMail size={30} />
                  </>
            ),
            goto: 'mailto:mayankjohari877@gmail.com',
            // style: 'rounded-tr-md',
        },
        {
            id:4,
            child:(
                  <>
                    Resume <BsFillPersonLinesFill size={30} />
                  </>
            ),
            goto: 'https://drive.google.com/file/d/1fpxcdUhl6RoTwlF2m6A30Zq0KEtKCVg5/view?usp=sharing',
            style: 'rounded-br-md',
            downlaod:true,
        },
    ]
  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>
        {Links.map((link) =>
          <li className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 + ${link?.style}`} key={link.id}>
            <a href={link.goto} className='flex justify-between items-center w-full text-white'
             download={link?.downlaod}
             target='_blank'
             rel='noreferrer'
            >
                {link.child}
            </a>
          </li>
        )}
        </ul>
    </div>
  )
}

export default SocialLinks