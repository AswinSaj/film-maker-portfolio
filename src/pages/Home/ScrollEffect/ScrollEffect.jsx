// import React, { useRef, useEffect, useState } from "react";
// import Column from "./Column";
// import styles from "./ScrollEffect.module.css";
// import { useTransform, useScroll } from "framer-motion";

// import s1 from "../../assets/Images/woman.jpg";
// import s2 from "../../assets/Images/lady.jpg";
// import s3 from "../../assets/Images/woman.jpg";
// import s4 from "../../assets/Images/rose.jpg";
// import s5 from "../../assets/Images/woods.jpg";
// import s6 from "../../assets/Images/architecture.jpg";
// import s7 from "../../assets/Images/woman looking.jpg";
// import s8 from "../../assets/Images/lady3.jpg";
// import s9 from "../../assets/Images/woods2.jpg";
// import s10 from "../../assets/Images/man_looking.jpg";

// const images = [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10];

// const ScrollEffect = () => {
//   const container = useRef(null);
//   const [screenHeight, setScreenHeight] = useState(window.innerHeight);

//   useEffect(() => {
//     const handleResize = () => {
//       setScreenHeight(window.innerHeight);
//     };

//     // Attach the event listener for window resize
//     window.addEventListener("resize", handleResize);

//     // Clean up the event listener on component unmount
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   const { scrollYProgress } = useScroll({
//     target: container,
//     offset: ["start end", "end start"],
//   });

//   const y1 = useTransform(scrollYProgress, [0, 1], [0, screenHeight * 1]);
//   const y2 = useTransform(scrollYProgress, [0, 1], [0, screenHeight * 1.7]);
//   const y3 = useTransform(scrollYProgress, [0, 1], [0, screenHeight * 1.25]);
//   const y4 = useTransform(scrollYProgress, [0, 1], [0, screenHeight * 1.5]);

//   return (
//     <>
//       <div className={styles.main}>
//         <div className={styles.spacer}></div>
//         <div ref={container} className={styles.gallery}>
//           <Column
//             images={[images[0], images[1], images[0], images[6]]}
//             y={y1}
//           />
//           <Column images={[images[3], images[4], images[5]]} y={y2} />
//           <Column
//             images={[images[8], images[8], images[1], images[8]]}
//             y={y3}
//           />
//           <Column
//             images={[images[8], images[9], images[3], images[5]]}
//             y={y4}
//           />
//         </div>
//         <div className={styles.spacer}></div>
//       </div>
//     </>
//   );
// };

// export default ScrollEffect;
/* ScrollEffect.jsx */
import React, { useRef, useEffect, useState } from "react";
import Column from "./Column";
import styles from "./ScrollEffect.module.css";
import { useTransform, useScroll } from "framer-motion";

import s1 from "../../../assets/Images/Potrait/woman.jpg";
import s2 from "../../../assets/Images/Potrait/lady.jpg";
import s3 from "../../../assets/Images/Potrait/woman.jpg";
import s4 from "../../../assets/Images/Potrait/rose.jpg";
import s5 from "../../../assets/Images/Potrait/woods.jpg";
import s6 from "../../../assets/Images/Potrait/architecture.jpg";
import s7 from "../../../assets/Images/Potrait/woman looking.jpg";
import s8 from "../../../assets/Images/Potrait/lady3.jpg";
import s9 from "../../../assets/Images/Potrait/woods2.jpg";
import s10 from "../../../assets/Images/Potrait/man_looking.jpg";

const images = [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10];

const ScrollEffect = () => {
  const container = useRef(null);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setScreenHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, screenHeight * 1]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, screenHeight * 1.7]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, screenHeight * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, screenHeight * 1.5]);

  return (
    <>
      <div className={styles.main}>
        <div className={styles.spacer}></div>
        <div ref={container} className={styles.gallery}>
          <Column
            images={[images[0], images[1], images[0], images[6], images[4]]}
            y={y1}
          />
          <Column
            images={[images[3], images[4], images[5], images[9]]}
            y={y2}
          />
          <Column
            images={[images[8], images[8], images[1], images[8], , images[4]]}
            y={y3}
          />
          <Column
            images={[images[8], images[9], images[3], images[5]]}
            y={y4}
          />
        </div>
        <div className={styles.spacer}></div>
      </div>
    </>
  );
};

export default ScrollEffect;
