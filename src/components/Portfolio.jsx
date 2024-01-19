import React from "react";
import NyaySetu from '../assets/portfolio/nyaySetu-chat-img.png'
// import gDoc from '../assets/portfolio/gDoc-clone-pics.png'
import OneStop from '../assets/portfolio/Onestop-pic.png'
import CodeEditor from '../assets/portfolio/codeEditor-pics.png'
import FilePilot from '../assets/portfolio/filepilot pics.png'
import CryptoWiz from '../assets/portfolio/cryptoWiz_pic.png'
import Todo from '../assets/portfolio/todo-app-image.png'

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: NyaySetu,
      details:'AI-based Web application designed and developed to provide crucial support to marginalized communities facing literacy and lingustic challenges within the Indian legal system.',
      header:'NyaySetu Assisstant',
      demo:'',
      code:'https://github.com/orgs/NyayaSetu-SIH',
    },
    {
      id: 2,
      src: OneStop,
      details:'A real-time web application developed to provide users with a platform for posting events in a categorized manner and engaging with other users through the comment section.',
      header:'OneStop',
      demo:'https://onestopsol.netlify.app',
      code:'https://github.com/mayankmj/onestop',
    },
    {
      id: 3,
      src: CryptoWiz,
      details:'An online portal for crypto-lovers to dive into the in-depth details of various cryptocurrencies, their markets, daily exchange values, and day-to-day crypto news.',
      header:'CryptoWiz',
      demo:'https://cryptowizard.netlify.app/',
      code:'https://github.com/mayankmj/CryptoWiz'
    },
    {
      id: 4,
      src: CodeEditor,
      details:'An online dynamic interface providing real-time execution of HTML, CSS, and JavaScript code. It is also capable of detecting tags. ',
      header:'CodeEditor',
      demo:'https://code-edtiorr.netlify.app/',
      code:'https://github.com/mayankmj/code-editor'
    },
    {
      id: 5,
      src: FilePilot,
      details:'A web application developed with the aim of providing fast and simple file sharing instantly through the generation of shareable links.',
      header:'FilePilot',
      demo:'https://filepilot.netlify.app/',
      code:'https://github.com/mayankmj/FilePilot',
    },
    {
      id: 6,
      src: Todo,
      details:'Dynamic Todo-app ,crafted to simplifying task management with essential features like add, delete, and edit, sorted by newest first. ',
      header:'To-do app',
      demo:'https://todos1-application.vercel.app/',
      code:'https://github.com/mayankmj/todo'
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6 text-lg">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,details,header,demo,code }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg hover:scale-105 transition-transform duration-300"
            >
              <div className="overflow-hidden text-center">
                 <img src={src} alt="" className="rounded-md duration-200 max-w-full h-40" />
              </div>
              <div>
                 <div className="px-2 py-2 text-lg font-semibold">{header}</div>
              <div className="px-2 py-2 text-base">
                 {details}
              </div>
              </div>
              <div className="flex flex-row">
                <a
                 href={demo}
                 target="_blank"
                 rel="noreferrer"
                className="w-1/2 px-4 py-2 m-4  duration-200 transform hover:scale-105 hover:bg-blue-500 hover:text-white focus:outline-none focus:ring focus:border-blue-300 border border-blue-500 rounded-md shadow-md">
                  <p className="flex justify-center">Demo</p>
                </a>
                <a
                 href={code}
                 target='_blank'
                 rel="noreferrer"
                className="w-1/2 px-4 py-2 m-4 duration-200 transform hover:scale-105 hover:bg-blue-500 hover:text-white focus:outline-none focus:ring focus:border-blue-300 border border-blue-500 rounded-md shadow-md">
                  <p className="flex justify-center"> Code </p>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
