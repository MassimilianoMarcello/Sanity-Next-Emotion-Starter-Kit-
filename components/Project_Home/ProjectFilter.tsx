import React, { useState, useEffect } from "react";
import NoProjectsMessage from "./NoProject";
import MediumBlueBorder from "./MediuBlueBorder";
import { Project } from "@/types/projects";

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

    const filteredProjects = projects.filter((project) =>
      selectedTechnologies.every((tech) =>
        project.technologies?.map(t => t.name).includes(tech) // Controllo se technologies è definito
      )
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

  // Mappa le tecnologie uniche a stringhe, controllando che technologies non sia null o undefined
  const uniqueTechnologies = Array.from(new Set(
    projects.flatMap((project) =>
      Array.isArray(project.technologies) && project.technologies !== null
        ? project.technologies.map((tech) => tech?.name) // Usa l'optional chaining
        : [] // Ritorna un array vuoto se technologies non è un array valido
    )
  ));

  return (
    <div className="filter-container">
      <MediumBlueBorder />
      <section className="filter">
        {uniqueTechnologies.map((technology) => (
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






