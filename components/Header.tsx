"use client";

import "./Header.css";
import Link from "next/link";

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">Universitet Kitabı</div>
      <nav className="header-nav">
        <Link href="/">Homepage</Link>
        <Link href="/about">Haqqında</Link>
        <Link href="/contact">Əlaqə</Link>
      </nav>
    </header>
  );
};

export default Header;
