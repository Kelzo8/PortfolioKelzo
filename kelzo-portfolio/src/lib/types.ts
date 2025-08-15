export type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl: string;
};

export type SocialLinks = {
  github: string;
  linkedin: string;
  email: string;
};

export type Quote = {
  text: string;
  author: string;
};

export type Certificate = {
  title: string;
  organization: string;
  image: string;
  description: string;
}; 