import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaHeart } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: ${theme.colors.background};
  padding: 3rem 5%;
  text-align: center;
  position: relative;
  overflow: hidden;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const Logo = styled.a`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${theme.colors.primary};
  text-decoration: none;
  margin-bottom: 1rem;
  display: inline-block;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin: 1.5rem 0;
`;

const SocialLink = styled.a`
  color: ${theme.colors.textSecondary};
  font-size: 1.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    color: ${theme.colors.primary};
    transform: translateY(-3px);
  }
`;

const NavLinks = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  list-style: none;
  margin: 1.5rem 0;
  
  @media (max-width: ${theme.breakpoints.sm}) {
    gap: 1.5rem;
  }
`;

const NavLink = styled.li`
  a {
    color: ${theme.colors.textSecondary};
    font-weight: 500;
    transition: all 0.3s ease;
    
    &:hover {
      color: ${theme.colors.primary};
    }
  }
`;

const Copyright = styled.p`
  color: ${theme.colors.textSecondary};
  font-size: 0.9rem;
  margin-top: 1.5rem;
  
  a {
    color: ${theme.colors.primary};
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s ease;
    
    &:hover {
      text-decoration: underline;
    }
  }
  
  .heart {
    color: #ef4444;
    display: inline-block;
    margin: 0 0.3rem;
    animation: pulse 1.5s infinite;
  }
  
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.2); }
    100% { transform: scale(1); }
  }
`;

const BackToTop = styled(motion.a)`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  background: ${theme.colors.primary};
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  cursor: pointer;
  box-shadow: 0 5px 15px rgba(37, 99, 235, 0.3);
  z-index: 100;
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s ease;
  
  &.visible {
    opacity: 1;
    pointer-events: auto;
  }
  
  &:hover {
    background: ${theme.colors.primaryLight};
    transform: translateY(-3px);
  }
  
  @media (max-width: ${theme.breakpoints.sm}) {
    width: 40px;
    height: 40px;
    font-size: 1rem;
    bottom: 20px;
    right: 20px;
  }
`;

const Footer = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/RahulAIML', label: 'GitHub' },
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/buddhadeb-bhattacharya-005768299/', label: 'LinkedIn' },
    { icon: <FaTwitter />, url: 'https://twitter.com/yourusername', label: 'Twitter' },
    { icon: <FaInstagram />, url: 'https://www.instagram.com/rahul.bhattacharya.355?igsh=MW4xOXExbXIxNHY5aA==', label: 'Instagram' },
  ];

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <>
      <FooterContainer>
        <FooterContent>
          <Logo href="#">Portfolio</Logo>
          
          <SocialLinks>
            {socialLinks.map((link, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <SocialLink 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={link.label}
                >
                  {link.icon}
                </SocialLink>
              </motion.div>
            ))}
          </SocialLinks>
          
          <NavLinks>
            {navLinks.map((link, index) => (
              <NavLink key={index}>
                <a 
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.id);
                  }}
                >
                  {link.name}
                </a>
              </NavLink>
            ))}
          </NavLinks>
          
          <Copyright>
            &copy; {new Date().getFullYear()} Made with <span className="heart"><FaHeart /></span> by{' '}
            <a href="https://github.com/RahulAIML" target="_blank" rel="noopener noreferrer">Buddhadeb Bhattacharya</a>
          </Copyright>
        </FooterContent>
      </FooterContainer>
      
      <BackToTop 
        className={isVisible ? 'visible' : ''}
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Back to top"
      >
        ↑
      </BackToTop>
    </>
  );
};

export default Footer;
