import React from 'react';
import ProjectInfos from "./ProjectInfo";
import TechnologiesUsed from "./TecnologiesUsed";
import { PortableText } from '@portabletext/react';
import styles from "./ProjectList.module.scss"; 





interface Project {
  _id: string;
  image: string;
  imageAlt: string;
  content: any[];
  technologies: string[];
  name: string;
  githubUrl: string;
  url: string;
  slug: string;
}

interface ProjectListProps {
  projects: Project[];
  openProjectId: string | null;
  toggleProjectInfo: (id: string) => void;
}

const ProjectList: React.FC<ProjectListProps> = ({ projects, openProjectId, toggleProjectInfo }) => {
  return (
    <div className={styles.projectContainer}> 
      {projects.map((project) => (
        <div
          key={project._id}
          className={styles.projectCard}
          onClick={() => toggleProjectInfo(project._id)}
        >
          <div className={styles.boxImageTextProject}>
            <img className={styles.projectImage} src={project.image} alt={project.imageAlt} />
            <div className={styles.portableStyle}>
              <PortableText value={project.content[0]} />
            </div>
          </div>
          <TechnologiesUsed technologies={project.technologies} />
          <ProjectInfos project={project} openProjectId={openProjectId} />
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
