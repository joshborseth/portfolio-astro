import Typescript from "/typescript.svg";
import Javascript from "/javascript.svg";
import Wordpress from "/wordpress.svg";
import Thumb from "/thumb.svg";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
const Tech = () => {
  return (
    <div className="w-screen flex flex-col lg:flex-row justify-between items-center text-4xl font-black">
      <TechItem
        techIcon={Typescript}
        techIconStyles="bg-secondary"
        techAltText="Typescript Icon."
        thumbStyles="bg-good"
        rotate={0}
      />
      <TechItem
        techIcon={Javascript}
        techAltText="Javascript Icon."
        thumbStyles="bg-warning"
        rotate={90}
      />
      <TechItem
        techIcon={Wordpress}
        techAltText="Wordpress Icon."
        thumbStyles="bg-bad"
        techIconStyles="scale-150"
        rotate={180}
      />
    </div>
  );
};
type TechItemProps = {
  techIcon: string;
  techAltText: string;
  thumbStyles: string;
  techIconStyles?: string;
  rotate: number;
};
const TechItem = (props: TechItemProps) => {
  const divRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(divRef);
  return (
    <motion.div
      ref={divRef}
      animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.5 }}
      transition={{ duration: 0.5 }}
      className="flex justify-center items-center lg:m-20 m-2 gap-5"
    >
      <img
        className={`${props.techIconStyles} rounded-lg`}
        src={props.techIcon}
        alt={props.techAltText}
      />
      <span>===</span>
      <motion.img
        className={`p-2 rounded-full ${props.thumbStyles}`}
        src={Thumb}
        alt="Thumb Icon."
        animate={{ rotate: isInView ? props.rotate : 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
      />
    </motion.div>
  );
};
export default Tech;
