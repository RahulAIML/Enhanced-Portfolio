import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const ProjectsSection = styled.section`
  padding: 100px 5%;
  background: ${theme.colors.background};
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

const Filters = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 3rem;
`;

const FilterButton = styled(motion.button)`
  background: transparent;
  border: 1px solid ${theme.colors.primary};
  color: ${({ active }) => (active ? theme.colors.background : theme.colors.primary)};
  padding: 0.5rem 1.5rem;
  border-radius: 30px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  background: ${({ active }) => (active ? theme.colors.primary : 'transparent')};
  
  &:hover {
    background: ${theme.colors.primary};
    color: ${theme.colors.background};
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
  
  @media (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background: ${theme.colors.backgroundLight};
  border-radius: 10px;
  overflow: hidden;
  box-shadow: ${theme.shadows.lg};
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 1.5rem;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 30px -15px rgba(2, 12, 27, 0.7);
  }
  
  .project-content {
    display: flex;
    flex-direction: column;
    height: 100%;
    
    h3 {
      color: ${theme.colors.text};
      font-size: 1.5rem;
      margin-bottom: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    p {
      color: ${theme.colors.textSecondary};
      margin-bottom: 1.5rem;
    }
    
    .project-tech {
      display: flex;
      flex-wrap: wrap;
      gap: 0.8rem;
      margin-bottom: 1.5rem;
      
      span {
        font-size: 0.8rem;
        color: ${theme.colors.primary};
        background: rgba(37, 99, 235, 0.1);
        padding: 0.3rem 0.8rem;
        border-radius: 20px;
      }
    }
    
    .project-links {
      display: flex;
      gap: 1rem;
      margin-top: auto;
      
      a {
        color: ${theme.colors.primary};
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 0.9rem;
        text-decoration: none;
        transition: all 0.3s ease;
        
        &:hover {
          color: ${theme.colors.primaryLight};
          transform: translateY(-2px);
        }
        
        svg {
          font-size: 1.1rem;
        }
      }
    }
  }
`;

const projectsData = [
  // AI/ML Projects
  {
    id: 1,
    title: 'CodeGen AI Assistant',
    description: 'An AI Coding Assistant built with Transformers and Streamlit that generates Python code from natural language prompts and provides data exploration features including CSV/XLSX uploads, Pandas summaries, and interactive Seaborn visualizations.',
    tags: ['Python', 'Transformers', 'Streamlit', 'Pandas', 'Seaborn'],
    github: 'https://github.com/RahulAIML/Codegen-ai-assistant-data-explorer',
    demo: null,
    category: 'aiml',
  },
  
  // Frontend Projects
  {
    id: 2,
    title: 'SmartPay Dashboard',
    description: 'A responsive payment analytics dashboard with charts, navigation, and authentication. Built with a focus on clean UI and user experience.',
    tags: ['React', 'Tailwind CSS', 'Chart.js', 'React Router'],
    github: 'https://github.com/RahulAIML/SmartPay',
    demo: null,
    category: 'frontend',
  },
  {
    id: 3,
    title: 'Recipe Finder App',
    description: 'A real-time recipe search application built with React and TheMealDB API. Features include searching recipes by ingredients, viewing detailed recipes, and filtering by meal type.',
    tags: ['React', 'Axios', 'TheMealDB API', 'React Hooks'],
    github: 'https://github.com/RahulAIML/recipe-finder-app',
    demo: null,
    category: 'frontend',
  },
  {
    id: 4,
    title: 'Personal Portfolio',
    description: 'A modern, responsive portfolio website built with React and styled-components. Features a clean UI, smooth animations, and sections for projects, skills, and contact information.',
    tags: ['React', 'Styled Components', 'Framer Motion', 'Responsive Design'],
    github: 'https://github.com/RahulAIML/portfolio',
    demo: null,
    category: 'frontend',
  }
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filters = [
    { id: 'all', name: 'All' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'aiml', name: 'AI/ML' },
  ];
  
  const filteredProjects = activeFilter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeFilter);

  return (
    <ProjectsSection id="projects">
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </SectionTitle>
        
        <Filters>
          {filters.map((filter) => (
            <FilterButton
              key={filter.id}
              active={activeFilter === filter.id}
              onClick={() => setActiveFilter(filter.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.name}
            </FilterButton>
          ))}
        </Filters>
        
        <AnimatePresence>
          <ProjectsGrid>
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="project-content">
                  <h3>
                    {project.title}
                    <div className="project-links">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                          <FiGithub />
                          <span>View Code</span>
                        </a>
                      )}
                      {project.demo && (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                          <FiExternalLink />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.tags.map((tag, index) => (
                      <span key={index}>{tag}</span>
                    ))}
                  </div>
                </div>
              </ProjectCard>
            ))}
          </ProjectsGrid>
        </AnimatePresence>
      </Container>
    </ProjectsSection>
  );
};

export default Projects;
