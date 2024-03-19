import { motion } from "framer-motion";

const AnimatedSection = ({ children, className }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 300 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, type: "spring" }}
      viewport={{ once: true }}
      className={`${className ? className : "padding"}`}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;
