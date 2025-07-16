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
    // Frontend
    'ReactJS',
    'JavaScript',
    'HTML5',
    'CSS3',
    'Bootstrap',
    'Tailwind CSS',
    'Responsive Design',
    'Axios',
    'React Router',
    'Hooks',
    'Context API',
    
    // Tools & Platforms
    'VS Code',
    'Chrome DevTools',
    'Postman',
    
    // Version Control
    'Git',
    'GitHub',
    
    // Backend
    'Node.js',
    'Django',
    'REST APIs',
    
    // Soft Skills
    'Collaboration',
    'Communication',
    'Problem-solving',
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
            <img src="/images/portfolio-image.jpg" alt="Portfolio" />
          </ImageWrapper>
          
          <TextContent
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p variants={itemVariants}>
              Passionate and self-driven Frontend Developer with hands-on experience building responsive and dynamic web applications using ReactJS, JavaScript, and HTML/CSS. Proficient in creating reusable components, integrating APIs, and designing responsive UI/UX.
            </motion.p>
            
            <motion.p variants={itemVariants}>
              Completed multiple personal projects including a Recipe Finder, Portfolio Website, and SmartPay Dashboard. Strong foundation in computer science fundamentals, version control (Git/GitHub), and collaborative teamwork through real-world internship experience.
            </motion.p>
            
            <motion.p variants={itemVariants}>
              Additionally, I have a solid understanding of Artificial Intelligence (AI) concepts, including Generative AI, Machine Learning (ML), and Large Language Models (LLMs), and I actively explore how these can enhance modern web applications.
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
