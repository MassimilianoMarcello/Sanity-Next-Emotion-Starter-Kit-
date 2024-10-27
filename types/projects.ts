import { PortableTextBlock } from '@portabletext/react';

export interface Technology {
    _id: string;
    name: string;
    slug: string;
  
  }
export type Project = {
  _id: string;
  _key: string;
  _type: string;
  technologies: Technology[]; 
  _createdAt: Date;
  _updatedAt: Date; 
  name: string;
  slug: string;
  image: string;
  imageAlt: string;
  status: string;
  importance: string;
url: string;
  content: PortableTextBlock[];
  githubUrl: string;
};
