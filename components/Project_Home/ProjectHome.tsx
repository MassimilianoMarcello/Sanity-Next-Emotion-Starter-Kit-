"use client";

import React, { useEffect, useState } from 'react';
import { getProjects } from '@/sanity/sanity.query';
import { Project } from '@/types/projects';
import HeaderSection from './HeaderSection';
import ProjectList from './ProjectList';
import ProjectFilter from './ProjectFilter';
import styles from "./ProjectHome.module.scss"; 

// Importa il file SASS


export default function Home() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [openProjectId, setOpenProjectId] = useState<string | null>(null);
    const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  
    const toggleProjectInfo = (projectId: string) => {
      setOpenProjectId(projectId === openProjectId ? null : projectId);
    };
  
    useEffect(() => {
      const fetchProjects = async () => {
        const projectsData: Project[] = await getProjects();
        setProjects(projectsData);
        setFilteredProjects(projectsData);
      };
      fetchProjects();
    }, []);
  
    return (
      <section className="home-section">
        <HeaderSection
          projects={projects}
          setFilteredProjects={setFilteredProjects}
          setOpenProjectId={setOpenProjectId}
        />
        <ProjectFilter
          projects={projects}
          setFilteredProjects={setFilteredProjects}
          setOpenProjectId={setOpenProjectId}
        />
        <ProjectList
          projects={filteredProjects}
          openProjectId={openProjectId}
          toggleProjectInfo={toggleProjectInfo}
        />
      </section>
    );
  }