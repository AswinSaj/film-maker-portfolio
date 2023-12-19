import { useEffect, useState } from "react";
import styles from "./LoadingScreen.module.css";
import { AnimatePresence, motion } from "framer-motion";
const LoadingScreen = () => {
  const [show, setShow] = useState(false);
  const [start, setStart] = useState(true);
  const [canScroll, setCanScroll] = useState(false);
  useEffect(() => {
    if (canScroll) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  }, [canScroll]);
  const contVariant = {
    initial: { x: "-100vw" },
    animate: { x: 0, transition: { duration: 1 } },
    exit: { x: "200vw", transition: { duration: 1 } },
  };
  const animate = {
    initial: { y: "100%" },
    open: { y: "0%", transition: { duration: 0.5 } },
    exit: { y: "-100%", transition: { duration: 0.5, delay: 1 } },
  };
  return (
    <>
      <AnimatePresence
        initial={false}
        onExitComplete={() => setCanScroll(true)}
      >
        {start && (
          <motion.div
            onAnimationComplete={() => setShow(true)}
            variants={contVariant}
            initial="initial"
            animate="animate"
            exit="exit"
            className={styles.effectBackground}
          >
            <div className={styles.text}>
              <div className={styles.lineMask}>
                <AnimatePresence>
                  {show ? (
                    <motion.p
                      onAnimationComplete={() => {
                        setShow(false);
                        setTimeout(() => setStart(false), 1500);
                      }}
                      variants={animate}
                      initial="initial"
                      animate="open"
                      exit="exit"
                    >
                      Sarath Menon Studios
                    </motion.p>
                  ) : null}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default LoadingScreen;
