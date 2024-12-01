interface Challenge {
    title: string;
    anchor: string;
    content: any[];
  }
  
  interface Blog {
    name: string;
    title: string;
    type: string;
    fields: {
      name: string;
      title: string;
      type: string;
      options?: { source?: string; slugify?: (input: string) => string };
      description?: string;
      of?: { type: string }[];
      to?: { type: string }[];
    }[];
  }