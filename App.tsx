import React, { useState } from 'react';
import { STEPS } from './constants';
import Stepper from './components/Stepper';

const App: React.FC = () => {
  const [activeStepId, setActiveStepId] = useState<number>(STEPS[0].id);
  
  const activeStep = STEPS.find(step => step.id === activeStepId);

  if (!activeStep) {
    return <div className="text-center p-12">Error: No se pudo encontrar el paso.</div>;
  }

  const ActiveStepComponent = activeStep.component;

  return (
  <div className="flex min-h-screen bg-gradient-to-br from-indigo-900 via-indigo-900 to-slate-900">
    
    {/* Columna Izquierda - Estática */}
    <aside className="w-full lg:w-[450px] flex-shrink-0 bg-indigo-800/50 backdrop-blur-sm border-r border-indigo-700/50 p-8 h-screen sticky top-0 overflow-y-auto custom-scrollbar">
      
      <header className="text-center group mb-8">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500 pb-4 transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">
          Tutorial Creación de Programación 
        </h1>
        <p className="mt-2 text-indigo-300 transition-transform duration-300 ease-in-out group-hover:scale-105">
          Una guía para el SUPER equipo de ciclos
        </p>
      </header>

      <div className="mb-8">
        <Stepper steps={STEPS} activeStepId={activeStepId} onStepClick={setActiveStepId} />
      </div>

      <footer className="text-center text-indigo-400 text-sm">
        <p>Colegio San Antonio de Padua 1, Catarroja, 2025</p>
      </footer>
    </aside>

    {/* Columna Derecha - Scrollable */}
    <main className="flex-grow overflow-y-auto max-h-screen">
      <div className="p-6 sm:p-10 max-w-4xl mx-auto">
        
        {activeStep.imageUrl && (
          <div className="relative mb-8">
            <img 
              src={activeStep.imageUrl} 
              alt={activeStep.title} 
              className="w-full h-auto max-h-[500px] object-cover rounded-xl shadow-lg border-4 border-indigo-700/50" 
            />
            <div className="absolute top-0 right-0 bg-cyan-500 text-white font-bold py-2 px-4 rounded-bl-xl rounded-tr-lg z-10">
              PASO {activeStep.id}
            </div>
          </div>
        )}

        <h2 className="text-3xl font-bold text-cyan-300 mb-4">{activeStep.title}</h2>
        <div className="prose prose-invert max-w-none text-indigo-200 leading-relaxed">
          <ActiveStepComponent />
        </div>
      </div>
    </main>

  </div>
);
};

export default App;