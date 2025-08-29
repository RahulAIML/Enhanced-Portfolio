import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi';

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

const ProjectThumb = styled.div`
  height: 160px;
  border-radius: 10px;
  background: ${({ category }) =>
    category === 'aiml'
      ? 'linear-gradient(135deg, #0ea5e9 0%, #22c55e 100%)'
      : 'linear-gradient(135deg, #6366f1 0%, #22d3ee 100%)'};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-bottom: 1rem;
  position: relative;
  overflow: hidden;
  box-shadow: inset 0 0 80px rgba(0,0,0,0.15);
  
  .icon {
    font-size: 2.2rem;
    opacity: 0.9;
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
    
    .project-badges {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 1rem;
      
      span {
        font-size: 0.75rem;
        color: #10b981;
        background: rgba(16, 185, 129, 0.12);
        padding: 0.25rem 0.6rem;
        border-radius: 999px;
        border: 1px solid rgba(16, 185, 129, 0.25);
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
    description: 'AI code assistant in Streamlit powered by Transformers. Supports CSV/XLSX upload, automatic EDA (Pandas/Seaborn), and code generation from natural language.',
    tags: ['Python', 'Transformers', 'Streamlit', 'Pandas', 'Seaborn'],
    badges: ['EDA + Code Gen'],
    github: 'https://github.com/RahulAIML/Codegen-ai-assistant-data-explorer',
    demo: null,
    category: 'aiml',
  },
  {
    id: 2,
    title: 'Twitter Sentiment Analysis',
    description: 'Classifies tweet sentiment using NLP (tokenization, stemming, TF‑IDF) with TensorFlow / scikit‑learn.',
    tags: ['Python', 'TensorFlow', 'scikit-learn', 'NLP', 'TF-IDF'],
    badges: ['NLP', 'TF‑IDF'],
    github: 'https://github.com/RahulAIML/Twitter-Sentiment-Analysis',
    demo: null,
    category: 'aiml',
  },
  {
    id: 3,
    title: 'DocChat — RAG Chatbot',
    description: 'Retrieval‑Augmented Generation chatbot to query PDFs/Excel/Text using LangChain and HF Transformers with a Streamlit UI.',
    tags: ['Python', 'LangChain', 'Hugging Face', 'Streamlit', 'RAG'],
    badges: ['RAG', 'File Upload'],
    github: 'https://github.com/RahulAIML/DocChat-RAG_Based_Chat_Application',
    demo: null,
    category: 'aiml',
  },
  {
    id: 4,
    title: 'Cat vs Dog Image Classification',
    description: 'CNN-based image classifier to distinguish cats and dogs; data preprocessing and training pipeline included.',
    tags: ['Python', 'TensorFlow', 'CNN', 'Computer Vision'],
    badges: ['CNN'],
    github: 'https://github.com/RahulAIML/cat-Dog-Image-Classification',
    demo: null,
    category: 'aiml',
  },
  {
    id: 5,
    title: 'Drone Landing without GPS',
    description: 'Computer-vision driven autonomous landing approach for drones without GPS dependency.',
    tags: ['Computer Vision', 'Robotics', 'Python'],
    badges: ['CV', 'Robotics'],
    github: 'https://github.com/RahulAIML/Drone_Project-LandingWithoutGPS',
    demo: null,
    category: 'aiml',
  },

  // Frontend Projects (HTML/CSS/JS/React)
  {
    id: 6,
    title: 'SmartPay Dashboard',
    description: 'Responsive payment analytics dashboard with charts, navigation, and authentication; clean UI/UX.',
    tags: ['React', 'Tailwind CSS', 'Chart.js', 'React Router'],
    badges: ['React', 'Charts'],
    github: 'https://github.com/RahulAIML/SmartPay',
    demo: null,
    category: 'frontend',
  },
  {
    id: 7,
    title: 'Recipe Finder App',
    description: 'Real-time recipe search with TheMealDB API; filter by ingredients and meal type.',
    tags: ['React', 'Axios', 'TheMealDB API', 'React Hooks'],
    badges: ['API'],
    github: 'https://github.com/RahulAIML/recipe-finder-app',
    demo: null,
    category: 'frontend',
  },
  {
    id: 8,
    title: 'Personal Portfolio',
    description: 'Modern portfolio built with React and styled-components, smooth animations and responsive design.',
    tags: ['React', 'Styled Components', 'Framer Motion', 'Responsive Design'],
    badges: ['Responsive'],
    github: 'https://github.com/RahulAIML/portfolio',
    demo: null,
    category: 'frontend',
  },
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
                <ProjectThumb category={project.category}>
                  <FiFolder className="icon" />
                </ProjectThumb>
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
                  {project.badges && project.badges.length > 0 && (
                    <div className="project-badges">
                      {project.badges.map((b, i) => (
                        <span key={i}>{b}</span>
                      ))}
                    </div>
                  )}
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
