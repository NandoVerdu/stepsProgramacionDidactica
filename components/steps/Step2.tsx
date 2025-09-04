
import React from 'react';

const Step2: React.FC = () => {
  return (
    <div className="text-lg leading-relaxed text-indigo-200">
      <ul className="list-disc list-inside space-y-2">
      <li className="bg-indigo-900/20 p-2 rounded-md">En el segundo paso, en la barra de herramientas, pulsa sobre 🛠️ Útiles ⏩ Menú Inicial. </li>
      <li className="bg-indigo-900/20 p-2 rounded-md">Acepta la autorización.</li>
      <li className="bg-indigo-900/20 p-2 rounded-md"> Navega por los desplegables para seleccionar tu curso y módulo. </li>
      <li className="bg-indigo-900/20 p-2 rounded-md"> Se visualizan diversos apartados. Clica sobre <button type="button"
            className="ml-4 px-3 py-1 bg-cyan-500 text-white rounded-md text-sm hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-300"
            aria-label="Registrar"> "Registrar en Hoja"  </button></li>
      </ul>
    </div>
  );
};

export default Step2;
