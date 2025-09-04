
import React from 'react';

const Step5: React.FC = () => {
  return (
    <div className="text-lg leading-relaxed text-indigo-200">
      <ul className="list-disc list-inside space-y-2">
      <li className="bg-indigo-900/20 p-2 rounded-md">En el quinto paso, en la barra de herramientas, pulsa sobre ⚙️ Acciones ⏩ Registrar o Editar Actividad. </li>
     <form class="max-w-sm mx-auto">
  <label for="countries_multiple" class="block mb-2 text-sm font-medium text-white dark:text-black">Seleccionar actividad existente:</label>
  <select multiple id="countries_multiple" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <option selected>--Nueva actividad--</option>
    <option value="US">Act 1.1</option>
    <option value="CA">Act 1.2</option>
    <option value="FR">Act 1.3</option>
    <option value="DE">Act 2.1</option>
  </select>
</form>
     <p className="p-2"> Para una nueva actividad, deja la opción --Nueva Actividad-- seleccionada. </p>

        <li className="bg-indigo-900/20 p-2 rounded-md"><strong> Metodología, Agrupamientos, Herramientas TIC e Instrumentos de Evaluación </strong> cogen las opciones de cada una de las hojas de cálculo, previamente definidas.</li>

        <form class="max-w-sm mx-auto">
  <label for="countries_multiple" class="block mb-2 text-sm font-medium text-white dark:text-black">Resultado:</label>
  <select multiple id="countries_multiple" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <option selected>--Seleccionar--</option>
  </select>
</form>
<p>puedes ir seleccionando los RA que cumpla la actividad. Una vez seleccionado se despliegan los CR y los contenidos.</p>

      <li className="bg-indigo-900/20 p-2 rounded-md "> Para añadir más RA, CE y contenidos a la actividad pulsa sobre <button type="button"
            className="ml-4 px-3 py-1 bg-blue-500 text-white rounded-md text-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
            aria-label="Registrar"> + Añadir Resultado  </button></li>
    <li className="bg-indigo-900/20 p-2 rounded-md ">
    Una vez seleccionado un CE, se habilita un cuadro de texto para que indiques la duración en horas que vas a dedicar a este CE dentro de la actividad. Representa la importancia o peso que tiene.</li>
      <li className="bg-indigo-900/20 p-2 rounded-md "> Una vez rellenados los datos no olvides pulsar sobre <button type="button"
            className="ml-4 px-3 py-1 bg-green-500 text-white rounded-md text-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
            aria-label="Registrar">💾  Guardar Actividad  </button></li>
        <li className="bg-indigo-900/20 p-2 rounded-md "> Las actividades se van guardando en la hoja 
        <button type="button"
        class="inline-flex  justify-center gap-x-1.5  bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs inset-ring-1 inset-ring-gray-300 hover:bg-gray-50 m-2" >ACTIVIDADES ▾</button> </li>
        
      </ul>
    </div>
  );
};

export default Step5;
