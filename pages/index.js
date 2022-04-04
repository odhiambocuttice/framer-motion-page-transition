import styles from "../styles/Home.module.css";

import Link from "next/link";
import userData from "../data.js";
import { motion } from "framer-motion";

// Our custom easing
let easing = [0.6, -0.05, 0.01, 0.99];

// animate: defines animation
// initial: defines initial state of animation or stating point.
// exit: defines animation when component exits

// Custom variant
const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Index = () => (
  <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
    <div className="w-screen my-auto mx-0 h-screen flex justify-center items-center bg-zinc-900">
      <motion.div
        variants={stagger}
        className="flex justify-between items-center w-full py-0 px-20"
      >
        {userData.experience.map((langauge) => (
          <Link
            key={langauge.title}
            href="/languages/[id]"
            as={`/languages/${langauge.title}`}
          >
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative box-border rounded-lg cursor-pointer bg-white  w-[425px] h-[425px] m-[24px]"
            >
              <span className="text-xl text-zinc-900 text-center w-full mb-7 block">
                Language
              </span>
              <motion.img
                initial={{ x: 60, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                key={langauge.image}
                src={langauge.src}
                width={250}
                className="flex my-0 mx-auto"
              />
              <div className="absolute w-[350px] flex items-center justify-between left-0 right-0 my-0 mx-auto bottom-6">
                <h4 className="text-zinc-900 text-lg">{langauge.company}</h4>
                <span className="block">{langauge.year}</span>
              </div>
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </div>
  </motion.div>
);

export default Index;
