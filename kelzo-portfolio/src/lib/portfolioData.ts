import { Project, SocialLinks, Quote, Certificate } from './types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Dengue Virus Prediction',
    description: 'Using machine learning to predict dengue virus cases. Advanced prediction model built with Python and scikit-learn.',
    technologies: ['Python', 'Machine Learning', 'scikit-learn', 'Pandas'],
    imageUrl: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&auto=format&fit=crop&q=60',
    githubUrl: 'https://github.com/NiallSom/DengueCasePrediction',
    liveUrl: 'https://cooliverse-creation-hub.lovable.app/',
  },
  {
    id: '2',
    title: 'API Weather App',
    description: 'A modern weather application utilizing public APIs to provide real-time weather data and forecasts.',
    technologies: ['Python', 'APIs', 'Flask', 'React'],
    imageUrl: 'https://images.unsplash.com/photo-1601134467661-3d775b999c8b?w=800&auto=format&fit=crop&q=60',
    githubUrl: 'https://github.com/Kelzo8/DataWebApp',
    liveUrl: 'https://cooliverse-creation-hub.lovable.app/',
  },
  {
    id: '3',
    title: 'Customer Portal AI',
    description: 'An AI-powered customer portal that streamlines customer management with intelligent features.',
    technologies: ['Python', 'TypeScript', 'React', 'AI'],
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=60',
    githubUrl: 'https://github.com/Kelzo8/CustomerPortalAI',
    liveUrl: 'https://cooliverse-creation-hub.lovable.app/',
  },
  {
    id: '4',
    title: 'Club Management System',
    description: 'Comprehensive system for managing club memberships, activities, and events using modern web technologies.',
    technologies: ['Python', 'Docker', 'Flask', 'PostgreSQL'],
    imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=60',
    githubUrl: 'https://github.com/NiallSom/flaskClubManagement',
    liveUrl: 'https://cooliverse-creation-hub.lovable.app/',
  },
  {
    id: '5',
    title: 'AI Chatbot',
    description: 'Intelligent chatbot system built with modern AI technologies for enhanced customer interactions.',
    technologies: ['Python', 'TypeScript', 'NLP', 'Machine Learning'],
    imageUrl: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&auto=format&fit=crop&q=60',
    githubUrl: 'https://github.com/Kelzo8/AI-Chatbot',
    liveUrl: 'https://cooliverse-creation-hub.lovable.app/',
  },
  {
    id: '6',
    title: 'Webcam Motion Detection',
    description: 'Real-time motion detection system using OpenCV and Python for security applications.',
    technologies: ['Python', 'OpenCV', 'Computer Vision'],
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop&q=60',
    githubUrl: 'https://github.com/Kelzo8/webcam',
    liveUrl: 'https://cooliverse-creation-hub.lovable.app/',
  }
];

export const socialLinks: SocialLinks = {
  github: 'https://github.com/Kelzo8',
  linkedin: 'https://ie.linkedin.com/in/jameskellyise',
  email: 'james.kelly991@yahoo.com'
};

export const motivationalQuotes: Quote[] = [
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  },
  {
    text: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius"
  },
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    text: "Code is like humor. When you have to explain it, it's bad.",
    author: "Cory House"
  }
];

export const certificates: Certificate[] = [
  {
    title: "President's Volunteer Award",
    organization: "University of Limerick",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop&q=60",
    description: "Awarded for exceptional community service and volunteer work"
  },
  {
    title: "AWS Cloud Foundations",
    organization: "Amazon Web Services",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=60",
    description: "Certification in AWS cloud computing fundamentals"
  },
  {
    title: "Python Mega Course",
    organization: "Udemy",
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&auto=format&fit=crop&q=60",
    description: "Comprehensive Python programming certification"
  },
  {
    title: "Cybersecurity Essentials",
    organization: "Cisco",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop&q=60",
    description: "Certification in fundamental cybersecurity concepts"
  }
]; 