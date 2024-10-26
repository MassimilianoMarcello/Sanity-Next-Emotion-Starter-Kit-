import { PortableTextBlock } from '@portabletext/react';

export type Project = {
  _id: string;
  _key: string;
  _type: string;
  technologies: string[]; // Cambia da `string` a `string[]`
  _createdAt: Date;
  _updatedAt: Date; // Correzione: `_updateAt` -> `_updatedAt`
  name: string;
  slug: string;
  image: string;
  imageAlt: string;
  status: string;
  url: string;
  content: PortableTextBlock[];
  githubUrl: string;
};
