// Canvas.tsx
import React from "react";
import { motion } from "framer-motion";
//import mapBackground from '@public/images/map_background.jpeg';

function Canvas() {
  return (
    <motion.div
      animate={{
        x: 0,
        backgroundColor: "#000",
        boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)",
        position: "fixed",
        transitionEnd: {
          display: "none",
        },
      }}
    ><img src="C:/Users/sins0/Desktop/Practice/ai_character/public/img/back.jpg" alt="back" /></motion.div>
  );
}

export default Canvas;
