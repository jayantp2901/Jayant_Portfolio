import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <>
    <h1 className="text-white font-bold text-[48px] mb-2">My Tech Stack</h1>
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
          <h4>&nbsp;&nbsp;&nbsp;{technology.name}</h4>
        </div>
      ))}
    </div>
    </>
  );
};

export default SectionWrapper(Tech, "skills");
