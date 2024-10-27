import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Link href="/" className="logo">
          {/* Inserisci qui il tuo logo */}
          <img src="/logo.png" alt="Logo" />
        </Link>
        <div className="navbar-links">
          <Link href="/projects" className="nav-link">Projects</Link>
          <Link href="/contacts" className="nav-link">Contacts</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
