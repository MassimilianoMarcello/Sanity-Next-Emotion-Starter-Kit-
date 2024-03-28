import { groq } from "next-sanity";
import client from "./sanity.client";


// export async function getProjects(): Promise<Project[]> {
//   return client.fetch(
//     groq`*[_type == "project"]{
// name,
   
//    }`,
//     {
//       next: {
//         revalidate: 63,
//       },
//     }
//   );
// }

// export async function getProject(slug: string): Promise<Project> {
//   return client.fetch(
//     groq`*[_type == "project" && slug.current == $slug][0]{
      
//     }`,
//     { slug },
//     {
//       next: {
//         revalidate: 63,
//       },
//     }
//   );
// }

