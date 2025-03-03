import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <Link href="/" className="navbar-item">
            <img 
              src="/logosoft.png"
              alt="SoftPhoenix Logo" 
              className="logo-image"
              width="32"
              height="32"
            />
            <span className="company-name">SoftPhoenix</span>
          </Link>
        </div>
      </div>
    </nav>
  );
} 