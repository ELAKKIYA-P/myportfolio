import React from 'react'
import Title from "../layouts/Title";
import Card from "./Card";
import { skillsData } from "../../data/data"

const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full py-10 border-b-[1px] border-b-black"
    >
      <Title title="Passionate Web Developer with a flair for creating stunning, user-friendly websites" des="Skills" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        {skillsData.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </section>
  )
}

export default Skills