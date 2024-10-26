import { groq } from "next-sanity";
import client from "./sanity.client";
import { Project } from "@/types/projects";
// import  {Post}  from "@/types/Post";
// import { AboutMe } from "@/types/AboutMe";

export async function getProjects(): Promise<Project[]> {
  return client.fetch(
    groq`*[_type == "project"]{
name,
    _id,
     _key,
      technologies,
    _createdAt,
    _updatedAt,
   _type,
   url,
    githubUrl,
   "slug": slug.current,
    // 'content': content[].children[].text,
    content,
     'image' :image.asset->url,
     'imageAlt':image.alt,
  status, 
   }`,
    // {
    //   next: {
    //     revalidate: 63,
    //   },
    // }
  );
}

export async function getProject(slug: string): Promise<Project> {
  return client.fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      _createdAt,
      author->,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content,
      githubUrl
    }`,
    { slug },
    {
      next: {
        revalidate: 63,
      },
    }
  );
}


