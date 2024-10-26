import React from "react";
import styles from "./HeaderSection.module.scss";
import { Project } from "@/types/projects";



interface HeaderSectionProps {
  projects: Project[];
  setFilteredProjects: React.Dispatch<React.SetStateAction<Project[]>>;
  setOpenProjectId: React.Dispatch<React.SetStateAction<string | null>>; // Assicurati che sia string | null
}

const HeaderSection: React.FC<HeaderSectionProps> = ({ projects, setFilteredProjects, setOpenProjectId }) => {
  return (
    <div className="header-section">
      {/* Il tuo codice qui */}
    </div>
  );
};

export default HeaderSection;
