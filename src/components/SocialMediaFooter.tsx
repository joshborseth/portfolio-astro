import Email from "/email.svg";
import Twitter from "/twitter.svg";
import Github from "/github.svg";
import LinkedIn from "/linkedin.svg";
import { motion } from "framer-motion";

const SocialMediaFooter = () => {
  return (
    <footer className="fixed z-50 bottom-0 h-24 w-full lg:w-1/2 transform -translate-x-1/2 left-1/2 bg-accent rounded-2xl">
      <ul className="flex justify-around items-center h-full">
        <li>
          <SocialLink src={LinkedIn} alt="LinkedIn Icon" />
        </li>
        <li>
          <SocialLink src={Twitter} alt="Twitter Icon" />
        </li>
        <li>
          <SocialLink src={Github} alt="Github Icon" />
        </li>
        <li>
          <SocialLink src={Email} alt="Email Icon" />
        </li>
      </ul>
    </footer>
  );
};

export default SocialMediaFooter;

type Props = {
  src: string;
  alt: string;
};
const SocialLink = (props: Props) => {
  return (
    <a href="#">
      <motion.img
        src={props.src}
        alt={props.alt}
        whileHover={{
          scale: 1.3,
          y: -10,
          transition: { duration: 0.1 },
        }}
        whileTap={{ scale: 0.9 }}
        className="shadow-2xl"
      />
    </a>
  );
};
