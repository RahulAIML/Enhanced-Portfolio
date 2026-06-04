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
  letter-spacing: -1px;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;

  @media (max-width: ${theme.breakpoints.md}) {
    position: fixed;
    top: 80px;
    left: ${({ $isOpen }) => ($isOpen ? '0' : '-100%')};
    width: 70%;
    height: calc(100vh - 80px);
    background: ${theme.colors.backgroundLight};
    flex-direction: column;
    align-items: center;
    padding: 2rem 0;
    transition: all 0.5s ease-in-out;
  }
`;

const NavItem = styled(motion.li)`
  a {
    color: ${({ $active }) => ($active ? theme.colors.primary : theme.colors.text)};
    font-weight: 500;
    font-size: 1.1rem;
    position: relative;
    transition: color 0.3s ease;
    text-decoration: none;

    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: ${({ $active }) => ($active ? '100%' : '0')};
      height: 2px;
      background: ${theme.colors.primary};
      transition: width 0.3s ease;
    }

    &:hover {
      color: ${theme.colors.primary};
      &::after { width: 100%; }
    }
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  font-size: 1.5rem;
  color: ${theme.colors.text};
  cursor: pointer;
  z-index: 1001;
  background: none;
  border: none;
  padding: 0.3rem;

  @media (max-width: ${theme.breakpoints.md}) {
    display: block;
  }
`;

const NAV_SECTIONS = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observers = NAV_SECTIONS.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.35 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((obs) => obs?.disconnect());
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const handleOutside = (e) => {
      if (!e.target.closest('nav')) setIsOpen(false);
    };
    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, [isOpen]);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <Nav style={{
      background: isScrolled ? 'rgba(15, 23, 42, 0.97)' : 'rgba(15, 23, 42, 0.8)',
      boxShadow: isScrolled ? '0 4px 20px rgba(0, 0, 0, 0.15)' : 'none',
    }}>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Logo href="#">BB</Logo>
      </motion.div>

      <MobileMenuButton
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </MobileMenuButton>

      <NavLinks $isOpen={isOpen}>
        {NAV_SECTIONS.map((item, index) => (
          <NavItem
            key={item}
            $active={activeSection === item}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            onClick={() => scrollToSection(item)}
          >
            <a href={`#${item}`}>
              {item === 'experience' ? 'Experience' : item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          </NavItem>
        ))}
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
