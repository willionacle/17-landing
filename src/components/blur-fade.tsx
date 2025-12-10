import { motion, useAnimation } from "framer-motion";
import type { Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import type { ReactNode } from "react";

interface BlurFadeProps {
  children: ReactNode;
  delay?: number;
}

export default function BlurFade({ children, delay = 0 }: BlurFadeProps) {
  const controls = useAnimation();

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const variants: Variants = {
    hidden: { opacity: 0, filter: "blur(10px)", y: 20 },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: { duration: 0.7, delay },
    },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
