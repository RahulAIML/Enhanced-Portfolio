import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

const AboutSection = styled.section`
  padding: 100px 5%;
  background: ${theme.colors.background};
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  color: ${theme.colors.text};
  margin-bottom: 3rem;
  text-align: center;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: ${theme.colors.primary};
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
  margin-top: 2rem;
  
  @media (max-width: ${theme.breakpoints.lg}) {
    flex-direction: column;
    text-align: center;
  }
`;

const ImageWrapper = styled(motion.div)`
  flex: 1;
  max-width: 400px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 20px;
    left: 20px;
    width: 100%;
    height: 100%;
    border: 2px solid ${theme.colors.primary};
    border-radius: 5px;
    z-index: 0;
    transition: all 0.3s ease;
  }
  
  &:hover::before {
    top: 15px;
    left: 15px;
  }
  
  img {
    width: 100%;
    height: auto;
    border-radius: 5px;
    position: relative;
    z-index: 1;
    filter: grayscale(20%) contrast(1.1);
    transition: all 0.3s ease;
  }
  
  &:hover img {
    filter: grayscale(0%) contrast(1);
  }
`;

const TextContent = styled(motion.div)`
  flex: 1;
  
  p {
    color: ${theme.colors.textSecondary};
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 1.5rem;
  }
`;

const SkillsList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 2rem;
  
  @media (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const SkillItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  
  span {
    color: ${theme.colors.primary};
    font-size: 0.9rem;
  }
  
  &::before {
    content: '▹';
    color: ${theme.colors.primary};
    font-size: 1.2rem;
  }
`;

const About = () => {
  const skills = [
    // AI/ML & Data
    'Python',
    'TensorFlow',
    'scikit-learn',
    'Hugging Face Transformers',
    'LangChain',
    'Pandas',
    'NumPy',
    'Seaborn',
    'Matplotlib',
    'OpenCV',
    
    // Backend & APIs
    'Django REST Framework',
    'Flask',
    'REST APIs',
    'Docker',
    
    // Databases & Tools
    'MySQL',
    'SQLite',
    'Git',
    'GitHub',
    'VS Code',
    'Postman',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <AboutSection id="about">
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </SectionTitle>
        
        <Content>
          <ImageWrapper
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={`${process.env.PUBLIC_URL}/images/portfolio-image.jpg?v=1`}
              onError={(e) => {
                // Fallback to relative path if PUBLIC_URL base path has issues
                e.currentTarget.onerror = null;
                e.currentTarget.src = 'images/portfolio-image.jpg?v=1';
              }}
              alt="Portfolio"
            />
          </ImageWrapper>
          
          <TextContent
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p variants={itemVariants}>
              Data Science enthusiast skilled in AI/ML, Python, and NLP—focused on building reliable, testable models and shipping real product features. Experienced with dataset creation, LLM fine‑tuning, classical ML, and deployment.
            </motion.p>
            
            <motion.p variants={itemVariants}>
              Recently worked as an AI Engineer Intern where I fine‑tuned Gemma for document information extraction, built REST APIs with Django, containerized services with Docker, and collaborated with frontend and backend teams to integrate AI into production.
            </motion.p>
            
            <motion.p variants={itemVariants}>
              I enjoy turning raw data into insights and building practical AI tools—ranging from RAG chatbots to code‑assistants and sentiment analysis systems.
            </motion.p>
            
            <motion.p variants={itemVariants}>
              Here are some of the technologies I work with:
            </motion.p>
            
            <SkillsList>
              {skills.map((skill, index) => (
                <SkillItem
                  key={index}
                  variants={itemVariants}
                  custom={index}
                >
                  <span>{skill}</span>
                </SkillItem>
              ))}
            </SkillsList>
          </TextContent>
        </Content>
      </Container>
    </AboutSection>
  );
};

export default About;
