import Link from "next/link";
import userData from "../../data.js";
import { motion } from "framer-motion";

let easing = [0.6, -0.05, 0.01, 0.99];

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

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

const Porfolio = (props) => {
  const product = userData.experience.find((item) => item.title === props.id);

  console.log(product);

  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
      <div className="h-screen">
        <div className="h-screen flex items-center justify-between">
          <motion.div
            className="w-1/2 h-full bg-zinc-900 flex items-center justify-center cursor-move"
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
          >
            <motion.img
              key={product.title}
              src={product.src}
              animate={{ x: 0, opacity: 1 }}
              initial={{ x: 200, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.2 }}
            />
          </motion.div>
          <div className="w-1/2 ">
            <motion.div
              variants={stagger}
              className="w-[500px] relative flex flex-col items-left justify-center mx-auto my-[100px]"
            >
              <Link href="/">
                <motion.div variants={fadeInUp}>
                  <a className="cursor-pointer text-left no-underline ml-2 text-cyan-700">
                    Back to languages
                  </a>
                </motion.div>
              </Link>
              <motion.h1
                variants={fadeInUp}
                className="text-zinc-900 text-5xl my-8"
              >
                {product.title}
              </motion.h1>
              <motion.p variants={fadeInUp} className="leading-7 mb-4">
                {product.desc}
              </motion.p>

              <span className="text-zinc-900  mb-4 text-3xl">
                {product.year}
              </span>

              <motion.div
                variants={fadeInUp}
                className="flex items-center cursor-pointer rounded-lg h-12 py-0 "
              >
                <button className="bg-cyan-700 px-3 py-auto rounded-lg h-12">
                  See More
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Porfolio;

Porfolio.getInitialProps = async function (context) {
  const { id } = context.query;
  return { id };
};
