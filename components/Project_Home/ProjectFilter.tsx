import React, { useState, useEffect } from "react";
import NoProjectsMessage from "./NoProject";
import MediumBlueBorder from "./MediuBlueBorder";
import { Project } from "@/types/projects"; // Assicurati che il path sia corretto

import styles from "./ProjectFilter.module.scss"; 

// Definisci i tipi delle props per il componente
interface ProjectFilterProps {
  projects: Project[];
  setFilteredProjects: React.Dispatch<React.SetStateAction<Project[]>>;
  setOpenProjectId: React.Dispatch<React.SetStateAction<string | null>>;
}

const ProjectFilter: React.FC<ProjectFilterProps> = ({ projects, setFilteredProjects, setOpenProjectId }) => {
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);
  const [noProjectsMessage, setNoProjectsMessage] = useState<boolean>(false);
  const [showInvalidCombination, setShowInvalidCombination] = useState<boolean>(false);

  useEffect(() => {
    if (!projects) return;

    // Filtro progetti basato sulle tecnologie selezionate
    const filteredProjects = projects.filter((project) =>
      selectedTechnologies.every((tech) => project.technologies.includes(tech))
    );
    setFilteredProjects(filteredProjects);

    setNoProjectsMessage(filteredProjects.length === 0);
    setShowInvalidCombination(
      selectedTechnologies.length > 0 && filteredProjects.length === 0
    );
    setOpenProjectId(null);
  }, [selectedTechnologies, projects, setFilteredProjects, setOpenProjectId]);

  const handleToggleTechnology = (technology: string) => {
    setSelectedTechnologies((prevTechnologies) =>
      prevTechnologies.includes(technology)
        ? prevTechnologies.filter((tech) => tech !== technology)
        : [...prevTechnologies, technology]
    );
  };

  const handleClearSelection = () => {
    setSelectedTechnologies([]);
    setShowInvalidCombination(false);
  };

  return (
    <div className="filter-container">
      <MediumBlueBorder />
      <section className="filter">
        {projects &&
          projects.reduce<string[]>((technologies, project) => {
            project.technologies.forEach((tech) => {
              if (!technologies.includes(tech)) {
                technologies.push(tech);
              }
            });
            return technologies;
          }, []).map((technology) => (
            <button
              key={technology}
              onClick={() => handleToggleTechnology(technology)}
              className={`the-button ${selectedTechnologies.includes(technology) ? 'active' : ''} ${showInvalidCombination ? 'invalid' : ''}`}
            >
              {technology}
            </button>
          ))}
        <button className="clear-button" onClick={handleClearSelection}>Clear</button>
      </section>
      {noProjectsMessage && (
        <NoProjectsMessage handleClearSelection={handleClearSelection} />
      )}
    </div>
  );
};

export default ProjectFilter;

