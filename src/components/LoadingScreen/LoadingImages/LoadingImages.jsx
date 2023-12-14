/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import styles from './LoadingImages.module.css'
import { motion } from 'framer-motion'

const variant = {
  initial: {
    translateY: '110svh',
  },
  animate: {
    translateY: '0',
  },
}
const alternateVariant = {
  initial: {
    translateY: '-110svh',
  },
  animate: {
    translateY: '0',
  },
}

const zoomVariants = {
  initial: {
    borderRadius: '10px',
    width: '100%',
    height: '100%',
  },
  animate: {
    borderRadius: '0px',
    width: '100vw',
    height: '100svh',
  },
}
const LoadingImages = ({ index, src, direction, style, alt, zoom = false }) => {
  const [zoomState, setZoomState] = useState(false)
  useEffect(() => {
    let timer
    if (zoom) {
      timer = setTimeout(() => {
        console.log('Zoom Start')
        setZoomState(true)
      }, 1000)
    }
    return () => {
      clearTimeout(timer)
    }
  }, [zoom])
  return (
    <>
      {!zoom && (
        <motion.div
          variants={direction === 'down' ? variant : alternateVariant}
          initial='initial'
          animate='animate'
          style={{ ...style }}
          transition={{ duration: 0.5, delay: index * 0.25 }}
          className={styles.imgContainer}
        >
          <img className={styles.image} src={src} alt={alt} />
        </motion.div>
      )}
      {zoom && (
        <motion.div
          variants={direction === 'down' ? variant : alternateVariant}
          initial='initial'
          animate='animate'
          style={{ ...style }}
          transition={{ duration: 0.5, delay: index * 0.25 }}
          className={styles.imgContainer}
        >
          <motion.div
            variants={zoomVariants}
            initial='initial'
            animate={zoomState ? 'animate' : ''}
            className={styles.zoomState}
          >
            <img className={styles.image} src={src} alt={alt} />
          </motion.div>
        </motion.div>
      )}
    </>
  )
}

export default LoadingImages
