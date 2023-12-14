import LoadingImages from './LoadingImages/LoadingImages'
import styles from './LoadingScreen.module.css'
import { images } from './loadImages'
import { motion } from 'framer-motion'

const variantOne = {
  initial: {
    y: '100svh',
  },
  animate: {
    y: '-33svh',
    transition: {
      duration: 1.2,
    },
  },
}
const variantTwo = {
  initial: {
    y: '-133svh',
  },
  animate: {
    y: '0svh',
    transition: {
      duration: 1.2,
    },
  },
}
const LoadingScreen = () => {
  return (
    <>
      <div className={styles.container}>
        <motion.div
          variants={variantOne}
          initial='initial'
          animate='animate'
          className={styles.child}
        >
          <LoadingImages
            index={0}
            src={images.Architecture}
            direction={'down'}
            style={{ order: 0 }}
            alt={'Architecture Photo in London'}
          />
          <LoadingImages
            index={1}
            src={images.Camel}
            direction={'down'}
            style={{ order: 1 }}
            alt={'Camel in Rajasthan'}
          />
          <LoadingImages
            index={2}
            src={images.Doorway}
            direction={'down'}
            style={{ order: 2 }}
            alt={'Doorway in historical building'}
          />
          <LoadingImages
            index={3}
            src={images.Set}
            direction={'down'}
            style={{ order: 3 }}
            alt={'Movie Set'}
          />
        </motion.div>
        <motion.div
          variants={variantTwo}
          initial='initial'
          animate='animate'
          className={styles.child}
        >
          <LoadingImages
            index={0}
            src={images.Lady}
            direction={'up'}
            style={{ order: 3 }}
            alt={'Rajasthani Woman'}
          />
          <LoadingImages
            index={1}
            src={images.Model}
            direction={'up'}
            style={{ order: 2 }}
            alt={'Model PhotoShoot'}
          />
          <LoadingImages
            index={2}
            src={images.Model2}
            direction={'up'}
            style={{ order: 1 }}
            alt={'Model PhotoShoot 2'}
          />
          <LoadingImages
            index={3}
            src={images.Set2}
            direction={'up'}
            style={{ order: 0 }}
            alt={'Movie Set 2'}
          />
        </motion.div>
        <motion.div
          variants={variantOne}
          initial='initial'
          animate='animate'
          className={styles.child}
        >
          <LoadingImages
            index={0}
            src={images.MovieTheater}
            direction={'down'}
            style={{ order: 0 }}
            alt={'Movie Theater'}
          />
          <LoadingImages
            index={1}
            src={images.OldMan}
            direction={'down'}
            style={{ order: 1 }}
            alt={'Old Man portrait'}
          />
          <LoadingImages
            index={2}
            src={images.Set}
            direction={'down'}
            style={{ order: 2 }}
            alt={'Movie Set'}
            zoom={true}
          />
          <LoadingImages
            index={3}
            src={images.TwoOldMen}
            direction={'down'}
            style={{ order: 3 }}
            alt={'Two Old Men'}
          />
        </motion.div>
        <motion.div
          variants={variantTwo}
          initial='initial'
          animate='animate'
          className={styles.child}
        >
          <LoadingImages
            index={0}
            src={images.Lady}
            direction={'up'}
            style={{ order: 3 }}
            alt={'Rajasthani Woman'}
          />
          <LoadingImages
            index={1}
            src={images.Model}
            direction={'up'}
            style={{ order: 2 }}
            alt={'Model PhotoShoot'}
          />
          <LoadingImages
            index={2}
            src={images.Model2}
            direction={'up'}
            style={{ order: 1 }}
            alt={'Model PhotoShoot 2'}
          />
          <LoadingImages
            index={3}
            src={images.Set2}
            direction={'up'}
            style={{ order: 0 }}
            alt={'Movie Set 2'}
          />
        </motion.div>
        <motion.div
          variants={variantOne}
          initial='initial'
          animate='animate'
          className={styles.child}
        >
          <LoadingImages
            index={0}
            src={images.MovieTheater}
            direction={'down'}
            style={{ order: 0 }}
            alt={'Movie Theater'}
          />
          <LoadingImages
            index={1}
            src={images.OldMan}
            direction={'down'}
            style={{ order: 1 }}
            alt={'Old Man portrait'}
          />
          <LoadingImages
            index={2}
            src={images.Set}
            direction={'down'}
            style={{ order: 2 }}
            alt={'Movie Set'}
          />
          <LoadingImages
            index={3}
            src={images.TwoOldMen}
            direction={'down'}
            style={{ order: 3 }}
            alt={'Two Old Men'}
          />
        </motion.div>
      </div>
    </>
  )
}

export default LoadingScreen
