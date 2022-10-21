import { motion } from "framer-motion";
import Typescript from "/typescript.svg";
import React from "/react.svg";
import Tailwind from "/tailwind.svg";
import Next from "/nextjs.svg";

const Skills = () => {
  return (
    <ul className="flex justify-center items-center gap-5">
      <li>
        <SkillIcon src={Typescript} alt="Typescript Icon." delay={0.25} />
      </li>
      <li>
        <SkillIcon src={React} alt="React Icon." delay={0.5} />
      </li>
      <li>
        <SkillIcon src={Tailwind} alt="Tailwind Icon." delay={0.75} />
      </li>
      <li>
        <SkillIcon src={Next} alt="Next Icon." delay={1} />
      </li>
    </ul>
  );
};

export default Skills;

type Props = {
  delay: number;
  src: string;
  alt: string;
};
const SkillIcon = (props: Props) => {
  return (
    <motion.img
      animate={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.25, delay: props.delay }}
      className="bg-secondary rounded-lg"
      src={props.src}
      alt={props.alt}
    />
  );
};
