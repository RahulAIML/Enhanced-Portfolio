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
  align-items: flex-start;
  gap: 4rem;
  margin-top: 2rem;

  @media (max-width: ${theme.breakpoints.lg}) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const TechProfileCard = styled(motion.div)`
  flex: 1;
  max-width: 420px;
  min-width: 320px;
  background: #0d1117;
  border-radius: 10px;
  border: 1px solid rgba(37, 99, 235, 0.35);
  overflow: hidden;
  font-family: 'Fira Code', 'Courier New', monospace;
  box-shadow: 0 0 40px rgba(37, 99, 235, 0.12), 0 8px 32px rgba(0, 0, 0, 0.4);

  .card-header {
    background: #161b22;
    padding: 0.65rem 1rem;
    display: flex;
    align-items: center;
    gap: 0.45rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.07);

    .dot {
      width: 12px;
      height: 12px;
      border-radius: 50%;
    }
    .dot-red    { background: #ff5f57; }
    .dot-yellow { background: #febc2e; }
    .dot-green  { background: #28c840; }

    .filename {
      color: #8b949e;
      font-size: 0.78rem;
      margin-left: 0.6rem;
    }
  }

  .card-body {
    padding: 1.4rem 1.6rem;
    font-size: 0.84rem;
    line-height: 2;

    p { margin: 0; }

    .ln  { color: #3d444d; margin-right: 1.2rem; user-select: none; display: inline-block; min-width: 1.4rem; text-align: right; }
    .kw  { color: #ff7b72; }
    .var { color: #79c0ff; }
    .str { color: #a5d6ff; }
    .prop{ color: #ffa657; }
    .br  { color: #f8f8f2; }
    .cmt { color: #3d444d; font-style: italic; }
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
    'Python',
    'Large Language Models (LLM)',
    'RAG Systems',
    'Hugging Face Transformers',
    'LangChain',
    'LayoutLM / Donut',
    'Django REST Framework',
    'Docker',
    'Make (Integromat)',
    'Zapier',
    'Pandas & NumPy',
    'OpenCV',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 },
    },
  };

  const codeLines = [
    { n: 1,  jsx: <><span className="kw">const</span> <span className="var">engineer</span> <span className="br">= {'{'}</span></> },
    { n: 2,  jsx: <>&nbsp;&nbsp;<span className="prop">name</span><span className="br">:</span> <span className="str">"Buddhadeb Bhattacharya"</span><span className="br">,</span></> },
    { n: 3,  jsx: <>&nbsp;&nbsp;<span className="prop">role</span><span className="br">:</span> <span className="str">"AI & Automation Engineer"</span><span className="br">,</span></> },
    { n: 4,  jsx: <>&nbsp;&nbsp;<span className="prop">focus</span><span className="br">: [</span></> },
    { n: 5,  jsx: <>&nbsp;&nbsp;&nbsp;&nbsp;<span className="str">"LLM Systems & RAG"</span><span className="br">,</span></> },
    { n: 6,  jsx: <>&nbsp;&nbsp;&nbsp;&nbsp;<span className="str">"Intelligent Document Processing"</span><span className="br">,</span></> },
    { n: 7,  jsx: <>&nbsp;&nbsp;&nbsp;&nbsp;<span className="str">"Workflow Automation"</span><span className="br">,</span></> },
    { n: 8,  jsx: <>&nbsp;&nbsp;&nbsp;&nbsp;<span className="str">"Backend AI (Django, Docker)"</span><span className="br">,</span></> },
    { n: 9,  jsx: <>&nbsp;&nbsp;<span className="br">],</span></> },
    { n: 10, jsx: <>&nbsp;&nbsp;<span className="prop">stack</span><span className="br">:</span> <span className="br">[</span><span className="str">"Python"</span><span className="br">,</span> <span className="str">"HuggingFace"</span><span className="br">,</span></> },
    { n: 11, jsx: <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="str">"LangChain"</span><span className="br">,</span> <span className="str">"Django"</span><span className="br">,</span> <span className="str">"Docker"</span><span className="br">],</span></> },
    { n: 12, jsx: <>&nbsp;&nbsp;<span className="prop">available</span><span className="br">:</span> <span className="kw">true</span><span className="br">,</span></> },
    { n: 13, jsx: <><span className="br">{'}'}</span><span className="cmt">;</span></> },
  ];

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
          <TechProfileCard
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="card-header">
              <div className="dot dot-red" />
              <div className="dot dot-yellow" />
              <div className="dot dot-green" />
              <span className="filename">profile.ts</span>
            </div>
            <div className="card-body">
              {codeLines.map((line) => (
                <p key={line.n}>
                  <span className="ln">{line.n}</span>
                  {line.jsx}
                </p>
              ))}
            </div>
          </TechProfileCard>

          <TextContent
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p variants={itemVariants}>
              I build AI-powered automation systems that solve real operational problems. My work combines
              Generative AI, NLP, and backend engineering to design production-ready intelligent systems
              that move beyond experimentation into real deployment.
            </motion.p>

            <motion.p variants={itemVariants}>
              I specialize in LLM-powered applications, RAG-based systems, intelligent document processing
              (OCR + NLP + Transformer models), and workflow automation through API orchestration. Currently
              focused on integrating LLMs with backend infrastructure to automate workflows and optimize
              operational pipelines.
            </motion.p>

            <motion.p variants={itemVariants}>
              I aim to build scalable, maintainable AI systems that reduce manual operations, improve
              accuracy, and deliver measurable efficiency gains in production environments.
            </motion.p>

            <motion.p variants={itemVariants}>
              Technologies I work with:
            </motion.p>

            <SkillsList>
              {skills.map((skill, index) => (
                <SkillItem key={index} variants={itemVariants} custom={index}>
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
