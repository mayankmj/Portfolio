import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import tailwind from '../assets/tailwind.png'
import reactImage from '../assets/react.png'
import nextjs from '../assets/nextjs.png'
const Experience = () => {
    const techs = [
        {
            id:1,
            image:html,
            title: 'HTML',
            style:'shadow-orange-500',
        },
        {
            id:2,
            image:css,
            title: 'CSS',
            style:'shadow-blue-500',
        },
        {
            id:3,
            image:javascript,
            title: 'JAVASCRIPT',
            style:'shadow-yellow-500',
        },
        {
            id:4,
            image:reactImage,
            title: 'React',
            style:'shadow-blue-600',
        },
        {
            id:5,
            image:tailwind,
            title: 'Tailwind',
            style:'shadow-sky-400',
        },
        {
            id:6,
            image:nextjs,
            title: 'Next js',
            style:'shadow-white',
        },
    ]
  return (
    <div name="experience" className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
       <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
           <div>
               <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
               <p className='py-6'>These are the technologies i worked with</p>
           </div>

           <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
             { techs.map((tech) =>(
                <div key={tech.id} className='shadow-md hover:scale-105 duration-500'>
                 <img src={tech.image} alt='html-image' className={`w-20 mx-auto ${tech.style}`}/>
                 <p className='mt-4'>{tech.title}</p>
              </div>
             ))}
           </div>
       </div>
    </div>
  )
}

export default Experience