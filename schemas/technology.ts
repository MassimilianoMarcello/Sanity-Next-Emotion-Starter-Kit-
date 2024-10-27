const technology = {
    name: "technology",
    title: "Technology",
    type: "document",
    fields: [
      {
        name: "name",
        title: "Name",
        type: "string",
      },
      {
        name: "slug",
        title: "Slug",
        type: "slug",
        options: { source: "name" }
      },
      {
        name: "icon",
        title: "Icon",
        type: "image",
        options: { hotspot: true },
      },
      {
        name: "description",
        title: "Description",
        type: "text",
        description: "Short description of the technology",
      }
    ]
  }
  
  export default technology;
  