

const testproject = {
    name: "testproject",
    title: "TestProject",
    type: "document",
    fields: [
      {
        name: "name",
        title: "Name",
        type: "string",
      },
      {
        name: "importance",
        title: "Importance",
        type: "string",
        options: {
          list: [
            { title: "Main", value: "main" },
            { title: "Secondary", value: "secondary" },
            { title: "Testing Technologies", value: "testing" }
          ],
          layout: "radio"
        }
      },
      {
        name: "technologies",
        title: "Technologies",
        type: "array",
        of: [{ type: "reference", to: [{ type: "technology" }] }],
        description: "List of technologies used in the project"
      },
    
    
    
    ]}


      export default testproject