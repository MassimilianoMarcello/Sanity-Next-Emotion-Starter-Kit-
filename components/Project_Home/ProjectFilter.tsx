import React, { useState, useMemo } from "react";
import NoProjectsMessage from "./NoProject";
import { Project } from "@/types/projects";
import styles from "./ProjectFilter.module.scss";

interface ProjectFilterProps {
  projects: Project[];
  setFilteredProjects: React.Dispatch<React.SetStateAction<Project[]>>;
  setOpenProjectId: React.Dispatch<React.SetStateAction<string | null>>;
}

const ProjectFilter: React.FC<ProjectFilterProps> = ({
  projects = [],
  setFilteredProjects,
  setOpenProjectId,
}) => {
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);

  // Filtraggio ottimizzato usando useMemo
  const filteredProjects = useMemo(() => {
    if (!selectedTechnologies.length) return projects;
    return projects.filter((project) =>
      selectedTechnologies.every((tech) =>
        project.technologies?.some((t) => t.name === tech)
      )
    );
  }, [projects, selectedTechnologies]);

  // Aggiorna i progetti filtrati e resetta il progetto aperto
  React.useEffect(() => {
    setFilteredProjects(filteredProjects);
    setOpenProjectId(null);
  }, [filteredProjects, setFilteredProjects, setOpenProjectId]);

  // Lista unica delle tecnologie
  const uniqueTechnologies = useMemo(
    () =>
      Array.from(
        new Set(
          projects.flatMap(
            (project) => project.technologies?.map((tech) => tech.name) || []
          )
        )
      ),
    [projects]
  );

  // Gestisce l'aggiunta/rimozione delle tecnologie selezionate
  const handleToggleTechnology = (technology: string) => {
    setSelectedTechnologies((prev) =>
      prev.includes(technology)
        ? prev.filter((tech) => tech !== technology)
        : [...prev, technology]
    );
  };

  // Resetta le selezioni
  const handleClearSelection = () => {
    setSelectedTechnologies([]);
  };

  return (
    <div className={styles.filterContainer}>
      <section className={styles.filter}>
        {uniqueTechnologies.map((technology) => (
          <button
            key={technology}
            onClick={() => handleToggleTechnology(technology)}
            className={`${styles.theButton} ${
              selectedTechnologies.includes(technology) ? styles.active : ""
            }`}
          >
            {technology}
          </button>
        ))}
        <button className={styles.clearButton} onClick={handleClearSelection}>
          Clear
        </button>
      </section>

      {/* Messaggio di errore quando non ci sono progetti */}
      {filteredProjects.length === 0 && selectedTechnologies.length > 0 ? (
        <NoProjectsMessage handleClearSelection={handleClearSelection} />
      ) : null}
    </div>
  );
};

export default ProjectFilter;


