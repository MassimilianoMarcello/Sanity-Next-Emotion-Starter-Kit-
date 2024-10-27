import React from 'react';

interface Technology {
  _id: string;
  name: string;
  slug: string; // Aggiungi altri campi se necessario
}

interface TechnologiesUsedProps {
  technologies: Technology[];
}

const TechnologiesUsed: React.FC<TechnologiesUsedProps> = ({ technologies }) => {
  return (
    <div>
      <h4>Technologies Used:</h4>
      <ul>
        {technologies.map((tech) => (
          <li key={tech._id}>{tech.name}</li> // Usa tech.name per visualizzare il nome della tecnologia
        ))}
      </ul>
    </div>
  );
};

export default TechnologiesUsed;


