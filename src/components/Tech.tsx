import Trpc from "/trpc.svg";
import Astro from "/astro.svg";
import ReactNative from "/react-native.svg";
import Thumb from "/thumb.svg";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
const Tech = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center text-2xl w-[90vw] font-black">
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
    <article className="p-5 lg:p-10">
      <h3 className="font-bold">{props.title}</h3>
      <motion.div
        ref={divRef}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center items-center gap-5 p-5 lg:p-10"
      >
        <img
          className={`${props.techIconStyles} rounded-lg`}
          src={props.techIcon}
          alt={props.techAltText}
        />
      </motion.div>
    </article>
  );
};
export default Tech;
