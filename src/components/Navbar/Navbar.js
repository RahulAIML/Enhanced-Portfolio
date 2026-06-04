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
  transition: background 0.3s ease, box-shadow 0.3s ease;
`;

const Logo = styled.a`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${theme.colors.primary};
  text-decoration: none;
  cursor: pointer;
  letter-spacing: -1px;
  flex-shrink: 0;
`;

/* NavLinks is always present in the DOM but hidden off-screen on mobile */
const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;
  align-items: center;

  @media (max-width: ${theme.breakpoints.lg}) {
    position: fixed;
    top: 80px;
    left: 0;
    width: 75%;
    max-width: 320px;
    height: calc(100vh - 80px);
    background: ${theme.colors.backgroundLight};
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 3rem 0;
    gap: 2.5rem;
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    transform: ${({ $isOpen }) => ($isOpen ? 'translateX(0)' : 'translateX(-110%)')};
    box-shadow: 4px 0 20px rgba(0, 0, 0, 0.4);
    z-index: 999;
  }
`;

const Overlay = styled.div`
  display: none;

  @media (max-width: ${theme.breakpoints.lg}) {
    display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
    position: fixed;
    inset: 80px 0 0 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 998;
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
    white-space: nowrap;

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

  @media (max-width: ${theme.breakpoints.lg}) {
    a {
      font-size: 1.2rem;
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
  padding: 0.4rem;
  line-height: 1;

  @media (max-width: ${theme.breakpoints.lg}) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const NAV_SECTIONS = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    const observers = NAV_SECTIONS.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.3 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((obs) => obs?.disconnect());
  }, []);

  const scrollToSection = (id) => {
    setIsOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  return (
    <>
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
          aria-expanded={isOpen}
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
              transition={{ duration: 0.4, delay: index * 0.07 }}
              onClick={() => scrollToSection(item)}
            >
              <a href={`#${item}`}>
                {item === 'experience' ? 'Experience' : item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </NavItem>
          ))}
        </NavLinks>
      </Nav>

      {/* Tap outside overlay to close */}
      <Overlay $isOpen={isOpen} onClick={() => setIsOpen(false)} />
    </>
  );
};

export default Navbar;
