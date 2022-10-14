import SkillIcon from "./SkillIcon";
import Typescript from "/typescript.svg";
import React from "/react.svg";
import Tailwind from "/tailwind.svg";
import Next from "/nextjs.svg";

const Skills = () => {
  return (
    <ul className="flex justify-center items-center gap-10">
      <li>
        <SkillIcon src={Typescript} alt="Typescript Icon." duration={0.5} />
      </li>
      <li>
        <SkillIcon src={React} alt="React Icon." duration={1} />
      </li>
      <li>
        <SkillIcon duration={1.5} alt="Tailwind Icon." src={Tailwind} />
      </li>
      <li>
        <SkillIcon duration={2} alt="Next Icon." src={Next} />
      </li>
    </ul>
  );
};

export default Skills;
