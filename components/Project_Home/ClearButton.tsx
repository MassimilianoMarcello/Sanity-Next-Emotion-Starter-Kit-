import React from "react";

// Definisci i tipi delle props per ClearButton
interface ClearButtonProps {
  onClick: () => void; // Funzione che verrà chiamata al click
  children: React.ReactNode; // Contenuto del bottone
}

const ClearButton: React.FC<ClearButtonProps> = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};

export default ClearButton;
