import Trpc from "/trpc.svg";
import Astro from "/astro.svg";
import ReactNative from "/react-native.svg";
import Thumb from "/thumb.svg";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
const Tech = () => {
  return (
    <div className="w-screen flex flex-col lg:flex-row justify-between items-center text-4xl font-black">
      <TechItem techIcon={Trpc} techAltText="tRPC Icon." title="tRPC" thumbStyles="bg-good" />
      <TechItem
        techIcon={Astro}
        techIconStyles="bg-secondary p-2"
        techAltText="Astro Icon."
        thumbStyles="bg-good"
        title="Astro"
      />
      <TechItem
        techIcon={ReactNative}
        title="React Native"
        techAltText="React Native Icon."
        thumbStyles="bg-good"
      />
    </div>
  );
};
type TechItemProps = {
  techIcon: string;
  techAltText: string;
  thumbStyles: string;
  techIconStyles?: string;
  title: string;
};
const TechItem = (props: TechItemProps) => {
  const divRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(divRef);
  return (
    <article className="m-5 lg:m-14">
      <h3 className="font-bold">{props.title}</h3>
      <motion.div
        ref={divRef}
        animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.5 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center items-center gap-5 m-5 lg:m-10"
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
          animate={{ rotate: isInView ? 360 : 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        />
      </motion.div>
    </article>
  );
};
export default Tech;
