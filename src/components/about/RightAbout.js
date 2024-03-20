import React from 'react'
import { bannerImg } from "../../assets/index";

const RightAbout = () => {
  return (
    <div className="w-1/2 flex justify-center items-center relative">
      <img
        className="w-[300px] h-[350px] z-10"
        src={bannerImg}
        alt="bannerImg"
      />
      <div className="absolute bottom-0 w-[340px] h-[370px] bg-gradient-to-r from-[#3f4758] to-[#3f464f] shadow-shadowOne flex justify-center items-center"></div>
    </div>
  )
}

export default RightAbout