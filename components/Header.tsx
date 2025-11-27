"use client";

import Image from "next/image";
import "./Header.css";

type HeaderSection = "home" | "about" | "contact";

type HeaderProps = {
  onNavigate: (section: HeaderSection) => void;
};

export default function Header({ onNavigate }: HeaderProps) {
  return (
    <header className="header">
      
      <div className="header-top">
        <div className="header-logo-wrap">
          <Image
            src="/bbulogo.png"
            alt="Bakı Biznes Universiteti"
            width={80}
            height={80}
            className="header-logo-img"
            priority
          />

          <div className="header-title-block">
            <span className="header-subtitle">Bakı Biznes Universiteti</span>
            <span className="header-title">Yaddaş Kitabçası</span>
          </div>
        </div>
      </div>

      {/* Naviqasiya */}
      <nav className="header-nav">
        <button
          className="nav-link nav-button"
          onClick={() => onNavigate("home")}
        >
          Homepage
        </button>

        <button
          className="nav-link nav-button"
          onClick={() => onNavigate("about")}
        >
          Haqqında
        </button>

        <button
          className="nav-link nav-button"
          onClick={() => onNavigate("contact")}
        >
          Əlaqə
        </button>
      </nav>
    </header>
  );
}
