import { motion } from "framer-motion";

const BigAvatar = () => {
  return (
    <motion.img
      src="bitmoji-full.webp"
      alt="Large Bitmoji Avatar."
      className="hidden lg:block w-1/3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    />
  );
};

export default BigAvatar;
