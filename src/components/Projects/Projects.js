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
  margin: 0 auto 3rem;
  text-align: center;
  position: relative;
  display: block;
  width: 100%;

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

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: 2rem;
  }
`;

const ProjectThumb = styled.div`
  height: 160px;
  border-radius: 10px;
  background: ${({ $category }) =>
    $category === 'aiml'
      ? 'linear-gradient(135deg, #0ea5e9 0%, #22c55e 100%)'
      : 'linear-gradient(135deg, #6366f1 0%, #22d3ee 100%)'};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-bottom: 1rem;
  position: relative;
  overflow: hidden;
  box-shadow: inset 0 0 80px rgba(0, 0, 0, 0.15);

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
  background: ${({ $active }) => ($active ? theme.colors.primary : 'transparent')};
  border: 1px solid ${theme.colors.primary};
  color: ${({ $active }) => ($active ? theme.colors.background : theme.colors.primary)};
  padding: 0.5rem 1.5rem;
  border-radius: 30px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${theme.colors.primary};
    color: ${theme.colors.background};
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
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
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 1.5rem;
  transition: box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 30px -15px rgba(2, 12, 27, 0.7);
  }

  .project-title {
    color: ${theme.colors.text};
    font-size: 1.4rem;
    font-weight: 600;
    margin-bottom: 0.8rem;
  }

  .project-description {
    color: ${theme.colors.textSecondary};
    font-size: 0.95rem;
    line-height: 1.6;
    margin-bottom: 1.2rem;
    flex: 1;
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

  .project-tech {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
    margin-bottom: 1.2rem;

    span {
      font-size: 0.78rem;
      color: ${theme.colors.primary};
      background: rgba(37, 99, 235, 0.1);
      padding: 0.25rem 0.7rem;
      border-radius: 20px;
    }
  }

  .project-links {
    display: flex;
    gap: 1rem;
    margin-top: auto;
    padding-top: 0.5rem;
    border-top: 1px solid rgba(255, 255, 255, 0.06);

    a {
      color: ${theme.colors.primary};
      display: flex;
      align-items: center;
      gap: 0.4rem;
      font-size: 0.88rem;
      text-decoration: none;
      transition: all 0.3s ease;

      &:hover {
        color: ${theme.colors.primaryLight};
        transform: translateY(-2px);
      }

      svg { font-size: 1rem; }
    }
  }
`;

const projectsData = [
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
    description: 'Classifies tweet sentiment using NLP (tokenization, stemming, TF-IDF) with TensorFlow / scikit-learn.',
    tags: ['Python', 'TensorFlow', 'scikit-learn', 'NLP', 'TF-IDF'],
    badges: ['NLP', 'TF-IDF'],
    github: 'https://github.com/RahulAIML/Twitter-Sentiment-Analysis',
    demo: null,
    category: 'aiml',
  },
  {
    id: 3,
    title: 'DocChat — RAG Chatbot',
    description: 'Retrieval-Augmented Generation chatbot to query PDFs, Excel, and text files using LangChain and HF Transformers with a Streamlit UI.',
    tags: ['Python', 'LangChain', 'Hugging Face', 'Streamlit', 'RAG'],
    badges: ['RAG', 'File Upload'],
    github: 'https://github.com/RahulAIML/DocChat-RAG_Based_Chat_Application',
    demo: null,
    category: 'aiml',
  },
  {
    id: 4,
    title: 'Cat vs Dog Classifier',
    description: 'CNN-based image classifier to distinguish cats and dogs; includes full data preprocessing and training pipeline.',
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
  {
    id: 6,
    title: 'SmartPay Dashboard',
    description: 'Responsive payment analytics dashboard with charts, navigation, and authentication — clean UI/UX.',
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
    description: 'Modern portfolio built with React and styled-components — smooth animations and responsive design.',
    tags: ['React', 'Styled Components', 'Framer Motion', 'Responsive'],
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
    { id: 'aiml', name: 'AI/ML' },
    { id: 'frontend', name: 'Frontend' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projectsData
    : projectsData.filter((p) => p.category === activeFilter);

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
              $active={activeFilter === filter.id}
              onClick={() => setActiveFilter(filter.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.name}
            </FilterButton>
          ))}
        </Filters>

        <AnimatePresence mode="wait">
          <ProjectsGrid key={activeFilter}>
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, delay: index * 0.07 }}
              >
                <ProjectThumb $category={project.category}>
                  <FiFolder className="icon" />
                </ProjectThumb>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                {project.badges?.length > 0 && (
                  <div className="project-badges">
                    {project.badges.map((b, i) => <span key={i}>{b}</span>)}
                  </div>
                )}

                <div className="project-tech">
                  {project.tags.map((tag, i) => <span key={i}>{tag}</span>)}
                </div>

                <div className="project-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="View source code on GitHub">
                      <FiGithub />
                      View Code
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="Open live demo">
                      <FiExternalLink />
                      Live Demo
                    </a>
                  )}
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
