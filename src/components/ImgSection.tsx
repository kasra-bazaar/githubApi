import Logo from "../assets/github.png";
import { motion } from "framer-motion";
export default function ImgSection() {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.6,
        type: "spring",
        stiffness: 100,
        damping: 10,
      }}
      className=" mt-10"
    >
      <img src={Logo} alt="githubLogo" className=" w-80 " />
    </motion.section>
  );
}
