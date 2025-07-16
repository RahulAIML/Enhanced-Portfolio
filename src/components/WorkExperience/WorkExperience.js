import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { FaBriefcase, FaCalendarAlt, FaTasks } from 'react-icons/fa';

const WorkExperienceSection = styled.section`
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

const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 900px;
  margin: 0 auto;
`;

const ExperienceItem = styled(motion.div)`
  background: ${theme.colors.backgroundLight};
  border-radius: 10px;
  padding: 2rem;
  box-shadow: ${theme.shadows.md};
  border-left: 4px solid ${theme.colors.primary};
`;

const ExperienceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  gap: 1rem;
  
  h3 {
    font-size: 1.5rem;
    color: ${theme.colors.primary};
    margin: 0;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  .date {
    background: rgba(37, 99, 235, 0.1);
    color: ${theme.colors.primary};
    padding: 0.3rem 0.8rem;
    border-radius: 20px;
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

const CompanyInfo = styled.div`
  font-size: 1.1rem;
  color: ${theme.colors.text};
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Responsibilities = styled.ul`
  margin: 1rem 0 0 1.5rem;
  padding: 0;
  
  li {
    color: ${theme.colors.textSecondary};
    margin-bottom: 0.5rem;
    line-height: 1.6;
    position: relative;
    
    &::before {
      content: '•';
      color: ${theme.colors.primary};
      font-weight: bold;
      display: inline-block;
      width: 1em;
      margin-left: -1em;
    }
  }
`;

const WorkExperience = () => {
  const experiences = [
    {
      id: 1,
      position: 'AI Engineer Intern',
      company: '99 Ideas Saas Private Limited',
      location: 'Pune, Maharashtra',
      date: 'Mar 2025 – Present',
      responsibilities: [
        'Created a custom dataset from raw text documents using Hugging Face APIs and formatted it in JSONL for fine-tuning.',
        'Fine-tuned the Gemma language model to develop a high-accuracy document information extractor, achieving 90%+ accuracy on validation data.',
        'Designed and implemented a production-grade AI-powered document processing system to convert unstructured documents into structured JSON format.',
        'Developed and deployed RESTful APIs using Django REST Framework and Docker; tested and validated API endpoints using Postman.',
        'Collaborated with frontend and backend teams to seamlessly integrate AI services into the production environment.',
        'Followed Agile development practices, using Git for version control and actively contributing to a customer-facing product.'
      ]
    }
  ];

  return (
    <WorkExperienceSection id="experience">
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Work Experience
        </SectionTitle>
        
        <ExperienceContainer>
          {experiences.map((exp) => (
            <ExperienceItem
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * exp.id }}
            >
              <ExperienceHeader>
                <h3>
                  <FaBriefcase />
                  {exp.position}
                </h3>
                <div className="date">
                  <FaCalendarAlt />
                  {exp.date}
                </div>
              </ExperienceHeader>
              
              <CompanyInfo>
                {exp.company} • {exp.location}
              </CompanyInfo>
              
              <div>
                <h4>Key Responsibilities:</h4>
                <Responsibilities>
                  {exp.responsibilities.map((responsibility, index) => (
                    <li key={index}>{responsibility}</li>
                  ))}
                </Responsibilities>
              </div>
            </ExperienceItem>
          ))}
        </ExperienceContainer>
      </Container>
    </WorkExperienceSection>
  );
};

export default WorkExperience;
