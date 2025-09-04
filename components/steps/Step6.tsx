
import React from 'react';

const Step6: React.FC = () => {
  return (
    <div className="text-lg leading-relaxed text-indigo-200">
      <ul className="list-disc list-inside space-y-2">
     <li className="bg-indigo-900/20 p-2 rounded-md ">Automáticamente, a medida que vas asignando UDs a las actividades, estas se van plasmando en la hoja.
        <button type="button"
        class="inline-flex  justify-center gap-x-1.5  bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs inset-ring-1 inset-ring-gray-300 hover:bg-gray-50 m-2" >UD ▾</button> </li>
      <li className="bg-indigo-900/20 p-2 rounded-md ">Debes nombrar cada una de las UDs y escribir un texto para la justificación. </li>
    </ul>
    </div>
  );
};

export default Step6;
