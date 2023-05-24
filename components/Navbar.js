import Link from 'next/link';
import styles from '../styles/navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarList}>
        <li className={styles.navbarItem}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.navbarItem}>
          <Link href="/about">About</Link>
        </li>
        <li className={styles.navbarItem}>
          <Link href="/contact">Contact</Link>
        </li>
        <li className={styles.navbarItem}>
          <Link href="/cloudupload">Upload</Link>
        </li>
        <li className={styles.navbarItem}>
          <Link href="/blogform">Create</Link>
        </li>
        <li className={styles.navbarItem}>
          <Link href="/blogs">Blogs</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
