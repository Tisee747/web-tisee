import { Project, TimelineItem } from '@/types';

export interface JourneyStep extends TimelineItem {
  stage: 'SMP' | 'SMK' | 'University';
  subTitle: string;
}

export const journeyData: JourneyStep[] = [
  {
    id: 'smp-lensza',
    stage: 'SMP',
    title: 'Digital Marketing Intern',
    company: 'PT. Gucob E-Service (Lensza.co.id)',
    period: 'Feb 2021 - Jan 2023',
    subTitle: 'Junior High School Era',
    description: 'Began exploring the digital industry early while completing junior high school. Managed promotional content creation, designed newsletters via Shopify, scheduled uploads, and handled customer interactions to maintain consistent brand engagement.',
    technologies: ['Shopify', 'Canva', 'Email Marketing', 'E-Commerce Operations'],
    image: '/images/journey/lensza.jpg'
  },
  {
    id: 'smk-indicator',
    stage: 'SMK',
    title: 'IT & Data Intern',
    company: 'PT. Indonesia Indicator',
    period: 'Feb 2023 - Aug 2023',
    subTitle: 'Vocational High School Era',
    description: 'Transitioned into technical research at a Big Data & AI institute. Performed web scraping and data crawling using advanced regular expressions (RegEx) and automation scripts. Supported deployment, data analysis, and internal productivity tool developments.',
    technologies: ['Python', 'RegEx', 'Web Scraping', 'Automation Tools', 'Data Processing'],
    image: '/images/journey/indicator.jpg'
  },
  {
    id: 'university-medusa',
    stage: 'University',
    title: 'Medusa Tech Intern',
    company: 'Medusa Technology',
    period: 'Sep 2023 - Present',
    subTitle: 'Professional Internships',
    description: 'Completed a Programming Internship at Medusa Tech (Jun - Aug 2026), building intelligent Llama-3/RAG NPC chatbots, deploying REST APIs on AWS EC2, and programming virtual world systems via LSL.',
    technologies: ['Node.js', 'Go', 'FastAPI', 'AWS EC2', 'Llama 3', 'LangChain', 'ChromaDB', 'Linden Scripting Language (LSL)'],
    image: '/images/journey/medusa.jpg'
  }
];

export const projectsData: Project[] = [
  {
    id: 'posyandu-pintar',
    title: 'Posyandu Pintar',
    description: 'An AI-assisted health monitoring web application tailored for toddlers and maternal health. Built with Next.js and TypeScript, integrating intelligent analytics to track developmental metrics and automate toddler growth assessments.',
    tags: ['Fullstack', 'AI'],
    technologies: ['Next.js', 'React', 'TypeScript', 'TailwindCSS'],
    repoUrl: 'https://github.com/Tisee747/Posyandu_Pintar',
    image: '/images/projects/posyandu.jpg',
    version: 'v1.4.0',
    status: 'Live',
    stars: 0,
    forks: 0,
    mockLogs: [
      '[SYSTEM] Next.js SSR pipeline online',
      '[API] Growth curve analyzer loaded',
      '[AI] RAG model sync: COMPLETED'
    ]
  },
  {
    id: 'telyutalks',
    title: 'TelyuTalks',
    description: 'An academic Q&A platform tailored for university students and lecturers to exchange course knowledge. Developed as a Java-based Progressive Web App (PWA) to ensure seamless mobile-desktop accessibility.',
    tags: ['Fullstack'],
    technologies: ['Java', 'Spring Boot', 'PWA'],
    repoUrl: 'https://github.com/Tisee747/TelyuTalks',
    image: '/images/projects/telyutalks.jpg',
    version: 'v1.1.0',
    status: 'Beta',
    stars: 0,
    forks: 0,
    mockLogs: [
      '[JVM] Spring Boot thread pool running',
      '[PWA] Service worker caching enabled',
      '[API] Discussion channels online'
    ]
  },
  {
    id: 'gpt-ner',
    title: 'GPT-NER Implementation',
    description: 'A specialized Named Entity Recognition (NER) pipeline built with Streamlit. Uses Llama 3 via Groq API and customized RegEx filters to parse, identify, and categorize entities from messy text files.',
    tags: ['AI'],
    technologies: ['Python', 'Streamlit', 'Llama 3'],
    repoUrl: 'https://github.com/Tisee747/GPT-NER-Implementation',
    image: '/images/projects/gptner.jpg',
    version: 'v0.9.4',
    status: 'Beta',
    stars: 0,
    forks: 0,
    mockLogs: [
      '[AI] Groq API client initialized',
      '[LLM] Loading weights: Llama-3-8B',
      '[PARSER] RegEx rules parsed: 84'
    ]
  },
  {
    id: 'house-pricing',
    title: 'House Pricing Predictor',
    description: 'A predictive machine learning regression model built using CatBoost in Python, predicting real estate prices based on spatial and structural parameters. Bundled with a clean Streamlit interface.',
    tags: ['AI'],
    technologies: ['Python', 'Streamlit', 'Machine Learning'],
    repoUrl: 'https://github.com/Tisee747/House-Pricing',
    version: 'v0.8.2',
    status: 'Archived',
    stars: 0,
    forks: 0,
    mockLogs: [
      '[ML] CatBoost regression initialized',
      '[DATA] Feature scaling matrix loaded',
      '[UI] Streamlit interface active'
    ]
  },
  {
    id: 'mydormitory',
    title: 'MyDormitory Backend',
    description: 'A dormitory attendance tracking and security check-in system featuring instant QR scan verifications. Built with a Laravel administrative panel to manage student presence and permissions.',
    tags: ['Backend'],
    technologies: ['Laravel', 'PHP', 'MySQL'],
    repoUrl: 'https://github.com/Tisee747/mydormitory-backend',
    version: 'v1.0.8',
    status: 'Live',
    stars: 0,
    forks: 0,
    mockLogs: [
      '[SEC] AES-256 QR encryptor: READY',
      '[AUTH] JWT session worker spawned',
      '[SYSTEM] Dormitory DB synchronized'
    ]
  }
];
