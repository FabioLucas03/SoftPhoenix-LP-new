import { FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';

export default function SocialIcons() {
  return (
    <div className="social-icons">
      <a 
        href="https://instagram.com/seuinstagram" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="social-icon"
      >
        <FaInstagram size={20} />
      </a>
      <a 
        href="https://youtube.com/seucanal" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="social-icon"
      >
        <FaYoutube size={20} />
      </a>
      <a 
        href="https://linkedin.com/in/seulinkedin" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="social-icon"
      >
        <FaLinkedin size={20} />
      </a>
    </div>
  );
} 