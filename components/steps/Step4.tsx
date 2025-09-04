
import React from 'react';

const Step4: React.FC = () => {
  return (
    <div className="text-lg leading-relaxed text-indigo-200">
      <li className="list-disc list-inside space-y-2">En la hoja <button type="button"
        class="inline-flex  justify-center gap-x-1.5  bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs inset-ring-1 inset-ring-gray-300 hover:bg-gray-50 m-2" >OBJETIVOS ▾</button> marca los checks según las instrucciones del currículum de cada módulo.</li>
        <li className="list-disc list-inside space-y-2">En la hoja <button type="button"
        class="inline-flex  justify-center gap-x-1.5  bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs inset-ring-1 inset-ring-gray-300 hover:bg-gray-50 m-2" >COMPETENCIAS ▾</button> marca también los checks según las instrucciones del currículum de cada módulo.</li>
      OPCIONAL: Con la ayuda de la IA rellena las tablas C, D y E. Para la clasificación los valores aceptados son: Profesionales o Empleabilidad. 
      En la columna E especifica las Unidades Didácticas en las que se trabajan dichas competencias. Indícalas con los números correspondientes a las UD separándolas con comas ','. P.e: 1, 2, 3    </div>
  );
};

export default Step4;
