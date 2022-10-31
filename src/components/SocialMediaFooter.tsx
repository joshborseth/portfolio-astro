import Email from "/email.svg";
import Twitter from "/twitter.svg";
import Github from "/github.svg";
import LinkedIn from "/linkedin.svg";
import { motion } from "framer-motion";

const SocialMediaFooter = () => {
  return (
    <footer className="fixed bottom-0 left-1/2 z-50 h-20 w-full -translate-x-1/2 transform rounded-2xl bg-accent lg:w-1/2">
      <ul className="flex h-full items-center justify-around">
        <li>
          <SocialLink
            href="https://www.linkedin.com/in/joshua-borseth-427650226/"
            src={LinkedIn}
            alt="LinkedIn Icon"
          />
        </li>
        <li>
          <SocialLink href="https://twitter.com/JoshBorseth" src={Twitter} alt="Twitter Icon" />
        </li>
        <li>
          <SocialLink href="https://github.com/joshborseth" src={Github} alt="Github Icon" />
        </li>
        <li>
          <SocialLink href="mailto:joshuaborseth@gmail.com" src={Email} alt="Email Icon" />
        </li>
      </ul>
    </footer>
  );
};

export default SocialMediaFooter;

type Props = {
  src: string;
  alt: string;
  href: string;
};
const SocialLink = (props: Props) => {
  return (
    <a href={props.href}>
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
