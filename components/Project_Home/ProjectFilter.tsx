import React, { useState, useEffect, useMemo } from "react";
import NoProjectsMessage from "./NoProject";
import MediumBlueBorder from "./MediuBlueBorder";
import { Project } from "@/types/projects";

interface ProjectFilterProps {
  projects: Project[];
  setFilteredProjects: React.Dispatch<React.SetStateAction<Project[]>>;
  setOpenProjectId: React.Dispatch<React.SetStateAction<string | null>>;
}

const ProjectFilter: React.FC<ProjectFilterProps> = ({
  projects = [], // Impostiamo un array vuoto come default per evitare problemi
  setFilteredProjects,
  setOpenProjectId
}) => {
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);

  useEffect(() => {
    if (projects.length === 0) return; // Evita il filtro se non ci sono progetti

    const filteredProjects = projects.filter((project) =>
      selectedTechnologies.every((tech) =>
        project.technologies?.some((t) => t.name === tech)
      )
    );

    setFilteredProjects(filteredProjects);
    setOpenProjectId(null);
    console.log("Filtered projects:", filteredProjects); // Controllo dello stato finale
  }, [selectedTechnologies, projects, setFilteredProjects, setOpenProjectId]);

  const handleToggleTechnology = (technology: string) => {
    setSelectedTechnologies((prev) =>
      prev.includes(technology)
        ? prev.filter((tech) => tech !== technology)
        : [...prev, technology]
    );
  };

  const handleClearSelection = () => {
    setSelectedTechnologies([]);
  };

  const uniqueTechnologies = useMemo(() => 
    Array.from(new Set(
      projects.flatMap((project) =>
        project.technologies?.map((tech) => tech.name) || []
      )
    )), 
    [projects]
  );

  return (
    <div className="filter-container">
      {/* <MediumBlueBorder /> */}
      <section className="filter">
        {uniqueTechnologies.map((technology) => (
          <button
            key={technology}
            onClick={() => handleToggleTechnology(technology)}
            className={`the-button ${selectedTechnologies.includes(technology) ? 'active' : ''}`}
          >
            {technology}
          </button>
        ))}
        <button className="clear-button" onClick={handleClearSelection}>Clear</button>
      </section>
      {setFilteredProjects.length === 0 && selectedTechnologies.length > 0 && (
        <NoProjectsMessage handleClearSelection={handleClearSelection} />
      )}
    </div>
  );
};

export default ProjectFilter;
