import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;
  background: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(10px);
  z-index: 1000;
  transition: all 0.3s ease-in-out;
`;

const Logo = styled.a`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${theme.colors.primary};
  text-decoration: none;
  cursor: pointer;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;
  
  @media (max-width: ${theme.breakpoints.md}) {
    position: fixed;
    top: 80px;
    left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    width: 70%;
    height: calc(100vh - 80px);
    background: ${theme.colors.backgroundLight};
    flex-direction: column;
    align-items: center;
    padding: 2rem 0;
    transition: all 0.5s ease-in-out;
  }
`;

const NavLink = styled.li`
  a {
    color: ${theme.colors.text};
    font-weight: 500;
    font-size: 1.1rem;
    position: relative;
    transition: all 0.3s ease;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0;
      height: 2px;
      background: ${theme.colors.primary};
      transition: width 0.3s ease;
    }
    
    &:hover::after {
      width: 100%;
    }
    
    &.active {
      color: ${theme.colors.primary};
      &::after {
        width: 100%;
      }
    }
  }
`;

const MobileMenuButton = styled.div`
  display: none;
  font-size: 1.5rem;
  color: ${theme.colors.text};
  cursor: pointer;
  z-index: 1001;
  
  @media (max-width: ${theme.breakpoints.md}) {
    display: block;
  }
`;

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <Nav style={{
      background: isScrolled ? 'rgba(15, 23, 42, 0.95)' : 'rgba(15, 23, 42, 0.8)',
      boxShadow: isScrolled ? '0 4px 20px rgba(0, 0, 0, 0.1)' : 'none',
    }}>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Logo href="#">Portfolio</Logo>
      </motion.div>

      <MobileMenuButton onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </MobileMenuButton>

      <NavLinks isOpen={isOpen}>
        {['home', 'about', 'skills', 'projects', 'contact'].map((item, index) => (
          <motion.li
            key={item}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => scrollToSection(item)}
          >
            <NavLink>
              <a href={`#${item}`} className={window.location.hash === `#${item}` ? 'active' : ''}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </NavLink>
          </motion.li>
        ))}
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
