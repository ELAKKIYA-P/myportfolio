import React from "react";
import Title from '../layouts/Title.js';
import LeftAbout from './LeftAbout.js';
import RightAbout from './RightAbout.js'


function About (){
    return (
      <>
      <section 
      id="about me"
      className="w-full pt-10 border-b-black"
      >
        <div className="flex justify-center items-center text-center">
        <Title
          title="Unique Value Proposition"
          des="About Me"
        />
      </div>    
      </section>
        <section
      className="w-full  pb-20 flex lgl:flex-row items-center border-b-[1px] font-titleFont border-b-black"
    > 
        <RightAbout></RightAbout>
        <LeftAbout></LeftAbout>
    </section>
    </>
    )
}

export default About
