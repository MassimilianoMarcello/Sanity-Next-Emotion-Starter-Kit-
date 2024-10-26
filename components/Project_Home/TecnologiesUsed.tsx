import React from 'react';
import styles from "./TecnologiesUsed.module.scss"; 

interface TechnologiesUsedProps {
  technologies: string[];
}

const TechnologiesUsed: React.FC<TechnologiesUsedProps> = ({ technologies }) => {
  return (
    <div className="technologies-used">
      <ul>
        {technologies.map((technology, index) => (
          <li key={index}>{technology}</li>
        ))}
      </ul>
    </div>
  );
};

export default TechnologiesUsed;

