import { NavLink, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Navbar.module.css'
import { useEffect, useState } from 'react'

const navVariants = {
  hidden: {
    y: '-100%',
  },
  show: {
    y: 0,
  },
}
const Navbar = () => {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [open])
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <Link to={'/'} className={styles.logoLink}>
            Sarath Menon
          </Link>
        </div>
        <ul className={styles.navLinks}>
          <li>
            <NavLink className={styles.navLink} to={'/photo'}>
              Photo
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.navLink} to={'/film'}>
              Film
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.navLink} to={'/connect'}>
              Connect
            </NavLink>
          </li>
        </ul>
        <div className={styles.collapseNav} onClick={() => setOpen(!open)}>
          {!open ? (
            <i
              className={`fa-solid fa-bars ${styles.hamburger}`}
              style={{ color: '#d8c8af' }}
            ></i>
          ) : (
            <i
              className={`fa-solid fa-xmark ${styles.hamburger} ${styles.close}`}
              style={{ color: '#d8c8af' }}
            ></i>
          )}
          <AnimatePresence>
            {open ? (
              <motion.div
                variants={navVariants}
                initial='hidden'
                animate='show'
                exit='hidden'
                transition={{ duration: 0.5 }}
                className={styles.navMenu}
              >
                <div className={styles.navMenuLinks}>
                  <NavLink className={styles.navMenuLink} to={'/photo'}>
                    Photo
                  </NavLink>
                  <NavLink className={styles.navMenuLink} to={'/film'}>
                    Film
                  </NavLink>
                  <NavLink className={styles.navMenuLink} to={'/connect'}>
                    Connect
                  </NavLink>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </>
  )
}

export default Navbar
