
import React from 'react';

const Step8: React.FC = () => {
  return (
    <div className="text-lg leading-relaxed text-indigo-200">
      <ul className="list-disc list-inside space-y-2">

        <li className="bg-indigo-900/20 p-2 rounded-md">Cuando definimos las actividades establecemos el tiempo en horas que cada CE involucrado en la actividad va a durar.</li>

        <li className="bg-indigo-900/20 p-2 rounded-md">La suma de todos los CE de la actividad definen la duración de la misma.</li>

       <li className="bg-indigo-900/20 p-2 rounded-md">No tenemos que distribuir manualmente las actividades a lo largo del curso, el sistema lo hace automáticamente.</li>     

      <li className="bg-indigo-900/20 p-2 rounded-md">En la barra de herramientas, pulsa sobre ⚙️ Acciones ⏩ Distribución Temporal de Actividades. </li>

      <li className="bg-indigo-900/20 p-2 rounded-md">Simplemente haz clic sobre los dos botones que aparecen debajo</li>
      <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Registrar Fechas en ACTIVIDADES</button> 
      <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Guardar Tabla en TEMPORALIZACIÓN</button> 
     <li className="bg-indigo-900/20 p-2 rounded-md">Se crea una tabla que según los días de clase y los días festivos, reparte las actividades a lo largo de las sesiones del curso </li>

      <li className="bg-indigo-900/20 p-2 rounded-md "> Además, en la hoja Actividades se rellena automáticamente la fecha de inicio y fin de cada actividad. </li>
     
      </ul>
    </div>
  );
};

export default Step8;
