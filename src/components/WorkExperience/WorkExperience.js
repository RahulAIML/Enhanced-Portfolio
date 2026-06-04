import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';

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
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const EmploymentType = styled.span`
  font-size: 0.85rem;
  color: ${theme.colors.textSecondary};
  margin-bottom: 1rem;
  display: block;
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
      position: 'AI Researcher',
      company: 'RolPlay',
      employmentType: 'Full-time · Remote',
      location: 'Mexico',
      date: 'Nov 2025 – Present',
      responsibilities: [
        'Building and optimizing AI-driven products across conversational AI, workflow automation, and intelligent document systems.',
        'Developing AI-powered coaching and communication platforms, language assessment applications, dashboard systems, and scalable automation workflows for business operations.',
        'Driving AI automation using Make and Zapier — integrating CRM systems, WhatsApp workflows, email automation, and webhook pipelines to improve operational efficiency and user engagement.',
        'Conducting in-depth research on large language models, multimodal AI systems, and avatar-based AI solutions to enhance product intelligence and support strategic AI implementation.',
        'Key areas: Generative AI & LLM research, conversational AI architecture, AI-powered dashboards, multi-tenant systems, and product strategy through AI model evaluation and experimentation.',
      ],
    },
    {
      id: 2,
      position: 'Machine Learning Engineer',
      company: '99IDEAS INFOTECH SERVICES',
      employmentType: 'Full-time · Remote',
      location: 'Pune District, Maharashtra, India',
      date: 'Mar 2025 – Nov 2025',
      responsibilities: [
        'Fine-tuned the Gemma language model on a custom dataset (formatted via Hugging Face APIs) to build a high-accuracy document information extractor, achieving 90%+ validation accuracy.',
        'Designed and deployed a production-grade document processing system converting unstructured documents into structured JSON using NLP and transformer-based models like LayoutLM and Donut.',
        'Built and deployed RESTful APIs using Django REST Framework and Docker; validated all API endpoints using Postman with comprehensive test coverage.',
        'Worked closely with frontend and backend teams to integrate AI services seamlessly into a live production environment.',
        'Followed Agile development practices, using Git for version control and contributing directly to a customer-facing product.',
      ],
    },
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
              <EmploymentType>{exp.employmentType}</EmploymentType>

              <div>
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
