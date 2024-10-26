import React from "react";
import Image from "next/image";
import ClearButton from "./ClearButton";
import styles from "./NoProject.module.scss";

// Definisci i tipi delle props per NoProjectsMessage
interface NoProjectsMessageProps {
  handleClearSelection: () => void;
}

const NoProjectsMessage: React.FC<NoProjectsMessageProps> = ({ handleClearSelection }) => {
  return (
    <div className={styles.MessageContainer}>
      <Image
        src="/logo.png"
        alt="mass dev logo"
        width={120}
        height={120}
      />
      <ClearButton onClick={handleClearSelection}>Clear</ClearButton>
      <p>Oops! No projects with this tech combo yet. Check back soon!</p>
    </div>
  );
};

export default NoProjectsMessage;

