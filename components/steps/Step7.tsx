
import React from 'react';

const Step7: React.FC = () => {
  return (
    <div className="text-lg leading-relaxed text-indigo-200">
      <ul className="list-disc list-inside space-y-2">

        <li className="bg-indigo-900/20 p-2 rounded-md">En este paso, tienes la posibilidad de ordenar de manera diferente las UDs y las actividades</li>
    

      <li className="bg-indigo-900/20 p-2 rounded-md">En la barra de herramientas, pulsa sobre ⚙️ Acciones ⏩ Ordenar Unidades y Actividades. </li>

      <li className="bg-indigo-900/20 p-2 rounded-md">Simplemente con arrastrar y soltar puedes ordenar de manera diferente a como aparece en pantalla.</li>
     <li className="bg-indigo-900/20 p-2 rounded-md">No obstante, <strong>SIEMPRE </strong>  hay que guardar la ordenación pulsando el botón </li>
     <button type="button"
            className="ml-4 px-3 py-1 bg-green-500 text-white rounded-md text-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
            aria-label="Registrar"> Guardar orden en TEMPORALIZACIÓN  </button>
    
    <li className="bg-indigo-900/20 p-2 rounded-md "> La ordenación se refleja en la hoja
        <button type="button"
        class="inline-flex  justify-center gap-x-1.5  bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs inset-ring-1 inset-ring-gray-300 hover:bg-gray-50 m-2" >TEMPORALIZACIÓN ▾</button> </li>

        
      </ul>
    </div>
  );
};

export default Step7;
