import React from "react";
import { motion } from "framer-motion";

const AnimatedAvatar = () => {
  return (
    <motion.div
      animate={{
        scale: [1, 1.2, 1],
        rotate: [0, 10, -10, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="w-12 h-12 rounded-full"
    >
      <img
        className="w-12 h-12 relative shrink-0 z-20 rounded-full ring-2 ring-white inline-block"
        src="https://i.ibb.co.com/RvFgZC8/aman.png"
        alt="avatar"
      />
    </motion.div>
  );
};

export default AnimatedAvatar;
