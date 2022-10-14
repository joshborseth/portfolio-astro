import { motion } from "framer-motion";
type Props = {
  duration: number;
  src: string;
  alt: string;
};
const SkillIcon = (props: Props) => {
  return (
    <motion.img
      animate={{ opacity: 1, rotate: 360 }}
      initial={{ opacity: 0, rotate: 180 }}
      transition={{ duration: props.duration }}
      className="bg-secondary rounded-lg"
      src={props.src}
      alt={props.alt}
    />
  );
};

export default SkillIcon;
