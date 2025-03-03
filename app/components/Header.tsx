import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link href="/" className="navbar-item">
          <img 
            src="/logo.png" 
            alt="SoftPhoenix Logo" 
            width="32" 
            height="32"
          />
          <span className="company-name ml-2">SoftPhoenix</span>
        </Link>
      </div>
      {/* ... resto do header ... */}
    </nav>
  );
} 