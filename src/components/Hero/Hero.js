import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 100px 5% 60px;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, ${theme.colors.background} 0%, #1e293b 100%);
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  z-index: 2;

  span {
    color: ${theme.colors.textSecondary};
    font-size: 0.75rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  .chevron {
    width: 22px;
    height: 22px;
    border-right: 2px solid ${theme.colors.primary};
    border-bottom: 2px solid ${theme.colors.primary};
    transform: rotate(45deg);
    animation: bounce 1.6s ease-in-out infinite;
  }

  @keyframes bounce {
    0%, 100% { transform: rotate(45deg) translateY(0); opacity: 1; }
    50%       { transform: rotate(45deg) translateY(7px); opacity: 0.5; }
  }

  @media (max-width: ${theme.breakpoints.md}) {
    display: none;
  }
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  position: relative;
  z-index: 1;
`;

const Greeting = styled(motion.span)`
  color: ${theme.colors.primary};
  font-size: 1.1rem;
  font-weight: 500;
  display: block;
`;

const Name = styled(motion.h1)`
  font-size: 3.8rem;
  font-weight: 800;
  color: ${theme.colors.text};
  margin: 0;
  line-height: 1.1;

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: 2.8rem;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: 2.2rem;
  }
`;

const Title = styled(motion.h2)`
  font-size: 1.8rem;
  font-weight: 600;
  color: ${theme.colors.textSecondary};
  margin: 0;

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: 1.4rem;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: 1.2rem;
  }
`;

const TagLine = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 0;
  font-size: 0.9rem;
  color: ${theme.colors.primary};
  font-family: 'Fira Code', monospace;
  opacity: 0.85;

  span {
    white-space: nowrap;
  }

  .sep {
    color: ${theme.colors.textSecondary};
    margin: 0 0.4rem;
    opacity: 0.5;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: 0.8rem;
  }
`;

const Description = styled(motion.p)`
  max-width: 620px;
  font-size: 1.05rem;
  line-height: 1.7;
  color: ${theme.colors.textSecondary};

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: 0.95rem;
  }
`;

const Button = styled(motion.a)`
  display: inline-block;
  background: ${theme.colors.primary};
  color: white;
  padding: 0.75rem 1.8rem;
  border-radius: 5px;
  font-weight: 500;
  font-size: 1rem;
  transition: all 0.3s ease;
  cursor: pointer;
  text-decoration: none;
  width: fit-content;

  &:hover {
    background: ${theme.colors.primaryLight};
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 0.5rem;
`;

const SocialLink = styled(motion.a)`
  color: ${theme.colors.text};
  font-size: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    color: ${theme.colors.primary};
    transform: translateY(-3px);
  }
`;

const TAG_ITEMS = [
  'LLM Systems',
  'Intelligent Document Processing',
  'RAG & Workflow Automation',
  'Backend AI',
];

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.18, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 10 },
    },
  };

  return (
    <HeroSection id="home">
      <ScrollIndicator
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        aria-label="Scroll down"
      >
        <span>Scroll</span>
        <div className="chevron" />
      </ScrollIndicator>

      <HeroContent>
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <Greeting variants={itemVariants}>Hi, I'm</Greeting>
          <Name variants={itemVariants}>Buddhadeb Bhattacharya</Name>
          <Title variants={itemVariants}>AI & Automation Engineer</Title>

          <TagLine variants={itemVariants}>
            {TAG_ITEMS.map((item, i) => (
              <React.Fragment key={item}>
                <span>{item}</span>
                {i < TAG_ITEMS.length - 1 && <span className="sep">|</span>}
              </React.Fragment>
            ))}
          </TagLine>

          <Description variants={itemVariants}>
            I build AI-powered automation systems that solve real operational problems. My work combines
            Generative AI, NLP, and backend engineering to design production-ready intelligent systems
            that move beyond experimentation into real deployment.
          </Description>

          <Button
            variants={itemVariants}
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </Button>

          <SocialLinks>
            {[
              { platform: 'github', url: 'https://github.com/RahulAIML' },
              { platform: 'linkedin', url: 'https://www.linkedin.com/in/buddhadeb-bhattacharya-005768299/' },
            ].map((social, index) => (
              <SocialLink
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                custom={index}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.5 + index * 0.1 }}
                aria-label={social.platform}
              >
                <i className={`fab fa-${social.platform}`}></i>
              </SocialLink>
            ))}
          </SocialLinks>
        </motion.div>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
