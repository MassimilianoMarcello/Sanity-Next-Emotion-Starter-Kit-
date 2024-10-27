import { groq } from "next-sanity";
import client from "./sanity.client";
import { Project } from "@/types/projects";
// import  {Post}  from "@/types/Post";
// import { AboutMe } from "@/types/AboutMe";

export async function getProjects(): Promise<Project[]> {
    const projects = await client.fetch(
      groq`*[_type == "project"]{
        name,
        _id,
        _key,
        "technologies": technologies[]-> {
          _id,
          name,
          icon
        },
        importance,
        _createdAt,
        _updatedAt,
        _type,
        url,
        githubUrl,
        "slug": slug.current,
        content,
        'image': image.asset->url,
        'imageAlt': image.alt,
        status, 
      }`
    );
  
    console.log("Fetched Projects from Sanity:", projects); // Aggiungi questo log
    return projects;
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
      importance,
      githubUrl,
"technologies": technologies[]-> {
    _id,
    name,
    icon
  },
    }`,
    { slug },
    {
      next: {
        revalidate: 63,
      },
    }
  );

}


