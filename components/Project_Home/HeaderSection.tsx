import React from "react";
import styles from "./HeaderSection.module.scss";
import { Project } from "@/types/projects";
import About from "../AboutMe/About";



// interface HeaderSectionProps {
  // projects: Project[];
  // setFilteredProjects: React.Dispatch<React.SetStateAction<Project[]>>;
  // setOpenProjectId: React.Dispatch<React.SetStateAction<string | null>>; 
// }

// const HeaderSection: React.FC<HeaderSectionProps> = ({  setFilteredProjects, setOpenProjectId }) => {

//   return (
//     <div className="header-section">
//     Hallo (HeaderSection)
//     </div>
//   );
// };

// export default HeaderSection;



const HeaderSection = () => {
  return (<>
    {/* <div>HeaderSection</div> */}
    <About /></>
  
  )
}

export default HeaderSection
