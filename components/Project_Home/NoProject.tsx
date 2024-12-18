import React from "react";
import Image from "next/image";
import styles from "./NoProject.module.scss";

interface NoProjectsMessageProps {
  selectedTechnologies: string[];
  handleClearSelection: () => void;
}

const NoProjectsMessage: React.FC<NoProjectsMessageProps> = ({
  selectedTechnologies,
  handleClearSelection,
}) => {
  const technologiesList = selectedTechnologies.join(", ");

  return (
    <div className={styles.MessageContainer}>
      <Image
        src="/logo.png"
        alt="mass dev logo"
        width={400}
        height={120}
      />
      <h1>Oops! No projects match your selection.</h1>
      {selectedTechnologies.length > 0 && (
        <p>
          You selected: <strong>{technologiesList}</strong>.
        </p>
      )}
      <button
        onClick={handleClearSelection}
        className={styles.clearSelectionButton}
      >
        Clear Selection
      </button>
    </div>
  );
};

export default NoProjectsMessage;


