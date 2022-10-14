import { motion } from "framer-motion";
type Props = {
  delay: number;
  src: string;
  alt: string;
};
const SkillIcon = (props: Props) => {
  return (
    <motion.img
      animate={{ opacity: 1, rotate: 360 }}
      initial={{ opacity: 0, rotate: 180 }}
      transition={{ duration: 0.25, delay: props.delay }}
      className="bg-secondary rounded-lg"
      src={props.src}
      alt={props.alt}
    />
  );
};

export default SkillIcon;
