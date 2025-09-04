import React from 'react';

const Step1: React.FC = () => {
  // Define el estilo directamente en el cuerpo del componente
  const linkStyle = {
    color: 'magenta',
    textDecoration: 'underline',
    fontWeight: 'bold'
  };

  // Devuelve el JSX directamente desde Step1
  return (
    <p className="text-lg leading-relaxed text-indigo-200">
      Este es el primer paso del proceso. Copia el{' '}
      <a
        href="https://docs.google.com/spreadsheets/d/1-lvMtHYGgFmIgpFifrTAoXThlfLEcSQpufGOnHixk4A/edit?pli=1&gid=1272942804#gid=1272942804"
        style={linkStyle}
      >
        google sheets
      </a>{' '}
      y cambia el nombre a "Programmación Didáctica [nombre módulo]".
    </p>
  );
};

export default Step1;