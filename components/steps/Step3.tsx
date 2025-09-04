
import React from 'react';

const Step3: React.FC = () => {
  return (
    <div className="text-lg leading-relaxed text-indigo-200">
      
       <ul className="list-disc list-inside space-y-2">
        <li className="list-disc list-inside space-y-2">En la hoja <button type="button"
        class="inline-flex  justify-center gap-x-1.5  bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs inset-ring-1 inset-ring-gray-300 hover:bg-gray-50 m-2" >CONFIGURACIÓN ▾</button> rellena el nombre del profesor</li>
        <li className="list-disc list-inside space-y-2">En ⚙️ Acciones ⏩  Abrir Calculadora de Sesiones Especifica los Días y Sesiones de Clase. Para cada día de la semana, especifica las horas de clase.</li> 
        <li className="list-disc list-inside space-y-2">Pulsa sobre el botón <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Calcular Sesiones</button>  </li>
        <li className="list-disc list-inside space-y-2">Pulsa sobre <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 m-2">Registrar Sesiones</button> y sobre <button type="button" class="focus:outline-none text-white bg-cyan-400 hover:bg-cyan-500 focus:ring-4 focus:ring-cyan-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800 m-2">Registrar Distribución Horaria</button></li>
        Automáticamente se rellenan los datos referentes a horas y horarios.
      </ul>
    </div>
  );
};

export default Step3;
