import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { FaCode, FaServer, FaDatabase, FaLaptopCode, FaTools, FaGithub, FaDocker } from 'react-icons/fa';
import { DiPython, DiJava, DiJavascript, DiHtml5, DiCss3, DiVisualstudio} from 'react-icons/di';
import { SiDjango, SiFlask, SiStreamlit, SiGit, SiPostman, SiJupyter, SiPandas, SiNumpy, SiTensorflow, SiPytorch } from 'react-icons/si';
import { AiOutlineConsoleSql } from 'react-icons/ai';

const SkillsSection = styled.section`
  padding: 100px 5%;
  background: ${theme.colors.backgroundLight};
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  color: ${theme.colors.text};
  margin-bottom: 3rem;
  text-align: center;
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);
  
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

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
  
  @media (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const SkillCategory = styled(motion.div)`
  background: ${theme.colors.background};
  border-radius: 10px;
  padding: 2rem;
  box-shadow: ${theme.shadows.lg};
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  }
  
  h3 {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    color: ${theme.colors.primary};
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    
    svg {
      font-size: 1.8rem;
    }
  }
`;

const SkillsList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SkillItem = styled(motion.li)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  
  &:last-child {
    border-bottom: none;
  }
  
  .icon {
    font-size: 1.8rem;
    color: ${theme.colors.primary};
    min-width: 30px;
    display: flex;
    justify-content: center;
  }
  
  .skill-info {
    h4 {
      color: ${theme.colors.text};
      font-size: 1.1rem;
      margin-bottom: 0.3rem;
    }
    
    .skill-level {
      height: 5px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 5px;
      overflow: hidden;
      margin-top: 0.5rem;
      
      .level {
        height: 100%;
        background: ${theme.colors.primary};
        border-radius: 5px;
      }
    }
  }
`;

const skillsData = [
  {
    title: 'Programming Languages',
    icon: <FaCode />,
    skills: [
      { name: 'Python', level: 85, icon: <DiPython /> },
      { name: 'Java', level: 80, icon: <DiJava /> },
      { name: 'JavaScript', level: 75, icon: <DiJavascript /> },
    ],
  },
  {
    title: 'Database & Query Language',
    icon: <FaDatabase />,
    skills: [
      { name: 'MySQL', level: 80, icon: <AiOutlineConsoleSql /> },
      { name: 'SQLite', level: 75, icon: <AiOutlineConsoleSql /> },
    ],
  },
  {
    title: 'Frameworks',
    icon: <FaLaptopCode />,
    skills: [
      { name: 'Django', level: 82, icon: <SiDjango /> },
      { name: 'Streamlit', level: 78, icon: <SiStreamlit /> },
      { name: 'Flask', level: 75, icon: <SiFlask /> },
    ],
  },
  {
    title: 'Web Technologies',
    icon: <FaCode />,
    skills: [
      { name: 'HTML5', level: 85, icon: <DiHtml5 /> },
      { name: 'CSS3', level: 80, icon: <DiCss3 /> },
    ],
  },
  {
    title: 'Tools & IDEs',
    icon: <FaTools />,
    skills: [
      { name: 'Git', level: 85, icon: <SiGit /> },
      { name: 'GitHub', level: 85, icon: <FaGithub /> },
      { name: 'VS Code', level: 90, icon: <DiVisualstudio /> },
      { name: 'Docker', level: 70, icon: <FaDocker /> },
      { name: 'Postman', level: 80, icon: <SiPostman /> },
      { name: 'Jupyter Notebook', level: 85, icon: <SiJupyter /> },
    ],
  },
  {
    title: 'Data Science & ML',
    icon: <FaLaptopCode />,
    skills: [
      { name: 'NumPy', level: 85, icon: <SiNumpy /> },
      { name: 'Pandas', level: 90, icon: <SiPandas /> },
      { name: 'Matplotlib', level: 80, icon: <SiPandas /> },
      { name: 'Seaborn', level: 80, icon: <SiPandas /> },
      { name: 'Machine Learning', level: 82, icon: <SiTensorflow /> },
      { name: 'Deep Learning', level: 80, icon: <SiPytorch /> },
      { name: 'Hugging Face', level: 75, icon: <SiPytorch /> },
      { name: 'LangChain', level: 70, icon: <SiTensorflow /> },
      { name: 'OpenCV', level: 70, icon: <FaCode /> },
    ],
  },
  {
    title: 'Course Work',
    icon: <FaTools />,
    skills: [
      { name: 'Data Structures & Algorithms', level: 85, icon: <FaCode /> },
      { name: 'Object-Oriented Programming', level: 88, icon: <FaCode /> },
      { name: 'Computer Networks', level: 80, icon: <FaServer /> },
      { name: 'Operating Systems', level: 82, icon: <FaLaptopCode /> },
      { name: 'Data Mining', level: 80, icon: <FaDatabase /> },
      { name: 'Neural Networks', level: 78, icon: <SiTensorflow /> },
      { name: 'Linear Algebra', level: 85, icon: <SiNumpy /> },
      { name: 'Calculus', level: 83, icon: <SiNumpy /> },
      { name: 'Statistics', level: 85, icon: <SiPandas /> },
    ],
  },
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <SkillsSection id="skills">
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Skills
        </SectionTitle>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <SkillsContainer>
            {skillsData.map((category, index) => (
              <SkillCategory
                key={index}
                variants={itemVariants}
                custom={index}
              >
                <h3>
                  {category.icon}
                  {category.title}
                </h3>
                <SkillsList>
                  {category.skills.map((skill, idx) => (
                    <SkillItem
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * idx }}
                    >
                      <div className="icon">{skill.icon}</div>
                      <div className="skill-info">
                        <h4>{skill.name}</h4>
                        <div className="skill-level">
                          <div 
                            className="level" 
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    </SkillItem>
                  ))}
                </SkillsList>
              </SkillCategory>
            ))}
          </SkillsContainer>
        </motion.div>
      </Container>
    </SkillsSection>
  );
};

export default Skills;
