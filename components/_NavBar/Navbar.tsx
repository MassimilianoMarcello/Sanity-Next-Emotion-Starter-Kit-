import React from 'react';
import Link from 'next/link';


import styles from '../../app/main.module.scss';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles["navbar-content"]}>
        <Link href="/" className={styles.logo}>
          {/* Inserisci qui il tuo logo */}
          <img src="/logo-massdev.webp" alt="Logo" />
        </Link>
        <div className={styles["navbar-links"]}>
          <Link href="/projects" className={styles["nav-link"]}>
            Projects
          </Link>
          <Link href="/contacts" className={styles["nav-link"]}>
            Contacts
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
