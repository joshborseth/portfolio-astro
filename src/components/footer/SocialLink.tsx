import { motion } from "framer-motion";

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
        className="shadow-2xl"
      />
    </a>
  );
};

export default SocialLink;
