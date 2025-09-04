import React from 'react';

const ConfettiPiece: React.FC<{ style: React.CSSProperties }> = ({ style }) => {
  return <div className="confetti-piece" style={style}></div>;
};

const Step10: React.FC = () => {
  const confettiCount = 100;
  const confetti = [];

  const colors = ['#60a5fa', '#f472b6', '#4ade80', '#facc15', '#a78bfa', '#ffffff'];

  for (let i = 0; i < confettiCount; i++) {
    const style = {
      left: `${Math.random() * 100}%`,
      animationDuration: `${Math.random() * 3 + 2}s`, // 2 to 5 seconds
      animationDelay: `${Math.random() * 5}s`,
      backgroundColor: colors[Math.floor(Math.random() * colors.length)],
      transform: `rotate(${Math.random() * 360}deg)`,
    };
    confetti.push(<ConfettiPiece key={i} style={style} />);
  }

  return (
    <div className="text-center relative  p-4">
      <div className="confetti-container" aria-hidden="true">{confetti}</div>
      <h2 className="text-4xl font-bold text-yellow-300 drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)] mb-4" style={{zIndex: 20}}>
        ¡Enhorabuena!
      </h2>
      <p className="text-lg leading-relaxed text-indigo-200" style={{zIndex: 20}}>
        Has completado con éxito el tutorial. ¡Gran trabajo! Ahora estás listo para crear tu propia programación didáctica.
      </p>
    </div>
  );
};

export default Step10;
