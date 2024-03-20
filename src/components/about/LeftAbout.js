import React from 'react'

const LeftAbout = () => {
  return (
    <div className="w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-3">
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        I'm a Fornt End Web Developer with expertise in ReactJS. I have a keen eye for detail and strive for exceptional results. 
        I'm well-versed in MongoDB, Express.js, React.js, Node.js, RESTful APIs, authentication, and database design. I'm highly motivated and committed to delivering projects on time and budget. 
        I'm always looking for ways to enhance efficiency and productivity. I'm confident that I can be an asset to any organization as a Full Stack Web Developer.
        </p>
        <span className="text-blue-600 text-base font-bodyFont leading-6 tracking-wide">Here are a Few Highlights:</span>
        <ul  className="marker:text-sky-400 list-disc pl-5 space-y-1 text-slate-500 list-outside ...">
         <li>Skilled in FrontEnd web development with an emphasis on interactive front-end design.</li>
         <li>Proficient in using JWT authentication and implementing protected routes for data security.</li>
         <li>Experienced in managing databases and ensuring effective state management using React Redux.</li>
        </ul>
      </div>
      </div>
  )
}

export default LeftAbout