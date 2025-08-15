export type Project = {
  title: string;
  description: string;
  image?: string;
  tags: string[];
  code?: string;
  demo?: string;
};

export const projects: Project[] = [
  { title: "Automated Compliance Tracking for Avtrain", description: "Automation and tracking system to streamline compliance workflows.", tags: ["Python", "Django", "AWS"], demo: "#", code: "#" },
  { title: "Dengue Virus Prediction", description: "ML modeling to forecast dengue outbreaks.", tags: ["Python", "Pandas", "XGBoost"], demo: "#", code: "#" },
  { title: "API Weather App", description: "Weather data visualization via public APIs.", tags: ["React", "TypeScript", "API"], demo: "#", code: "#" },
  { title: "Customer Portal AI", description: "Conversational AI assistant for support portals.", tags: ["Next.js", "OpenAI", "RAG"], demo: "#", code: "#" },
  { title: "Club Management System", description: "Membership and fixtures management platform.", tags: ["Java", "Spring", "PostgreSQL"], demo: "#", code: "#" },
  { title: "AI Chatbot", description: "Task-focused chatbot with tool usage.", tags: ["Python", "LangChain", "Vector DB"], demo: "#", code: "#" },
  { title: "Webcam Motion Detection", description: "Motion detection using computer vision.", tags: ["Python", "OpenCV"], demo: "#", code: "#" },
  { title: "Cooliverse Creation", description: "Creative web experience with 3D elements.", tags: ["Three.js", "Shaders"], demo: "#", code: "#" },
];

export type Achievement = { title: string; issuer: string };

export const achievements: Achievement[] = [
  { title: "President's Volunteer Award", issuer: "University of Limerick" },
  { title: "AWS Cloud Foundations", issuer: "AWS" },
  { title: "Python Mega Course", issuer: "Udemy" },
  { title: "Cybersecurity Essentials", issuer: "Cisco" },
]; 