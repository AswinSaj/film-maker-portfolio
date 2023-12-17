import { NavLink, Link } from 'react-router-dom'
import styles from './Navbar.module.css'
const Navbar = () => {
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
      </div>
    </>
  )
}

export default Navbar
