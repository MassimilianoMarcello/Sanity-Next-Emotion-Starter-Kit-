const blog = {
    name: "blog",
    title: "Blog",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string",
      },
      {
        name: "slug",
        title: "Slug",
        type: "slug",
        options: { source: "title" },
      },
      {
        name: "project",
        title: "Associated Project",
        type: "reference",
        to: [{ type: "project" }],
        description: "The project this blog post is associated with",
      },
      {
        name: "generalAnalysis",
        title: "General Analysis",
        type: "array",
        of: [{ type: "block" }],
        description: "General analysis of the project's challenges",
      },
      {
        name: "challengesSections",
        title: "Challenges Sections",
        type: "array",
        of: [
          {
            type: "object",
            fields: [
              {
                name: "title",
                title: "Challenge Title",
                type: "string",
                description: "Title of the specific challenge",
              },
              {
                name: "anchor",
                title: "Anchor",
                type: "slug",
                description: "Anchor ID for this challenge section",
                options: {
                  source: "title", // Usa il campo "title" per generare l'anchor
                  slugify: (input:string) => {
                    const randomNum = Math.floor(Math.random() * 10000); // Genera un numero casuale tra 0 e 9999
                    return input
                      .toLowerCase()
                      .replace(/[^a-z0-9]/g, '-') // Sostituisce caratteri non alfanumerici con '-'
                      .replace(/-+/g, '-')        // Elimina sequenze multiple di '-'
                      .trim() + '-' + randomNum; // Aggiunge il numero casuale alla fine
                  },
                },
              },
              
              
              {
                name: "content",
                title: "Content",
                type: "array",
                of: [{ type: "block" }],
                description: "Content for this specific challenge",
              },
            ],
          },
        ],
        description: "Sections for each specific challenge",
      },
    ],
  };
  
  export default blog;
  
  