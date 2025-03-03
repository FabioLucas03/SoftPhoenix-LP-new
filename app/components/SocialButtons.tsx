import { FaWhatsapp, FaLinkedin, FaYoutube } from 'react-icons/fa';

export default function SocialButtons() {
  return (
    <div className="social-icons">
      <a 
        href="https://wa.me/seu-numero" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="social-icon"
      >
        <FaWhatsapp size={24} />
      </a>
      <a 
        href="https://www.linkedin.com/company/softphoenix" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="social-icon"
      >
        <FaLinkedin size={24} />
      </a>
      <a 
        href="https://youtube.com/@softphoenix" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="social-icon"
      >
        <FaYoutube size={24} />
      </a>
    </div>
  );
} 