import React from "react";
import styles from "./ScrollEffect.Module.css";
import { motion } from "framer-motion";
const Column = ({ images, y = 0 }) => {
  return (
    <motion.div style={{ y }} className={styles.column}>
      {images.map((image, index) => (
        <div className={styles.imgContainer}>
          <img
            className={styles.images}
            key={index}
            src={image}
            alt={`Image ${index}`}
          />
        </div>
      ))}
    </motion.div>
  );
};

export default Column;
