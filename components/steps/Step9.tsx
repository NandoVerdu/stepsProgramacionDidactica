
import React from 'react';

const Step9: React.FC = () => {
  return (
    <div className="text-lg leading-relaxed text-indigo-200">
      <ul className="list-disc list-inside space-y-2">

        <li className="bg-indigo-900/20 p-2 rounded-md">Por último generamos el documento en Google Docs de los datos que hemos reflejado en las hojas de cálculo.</li>

        <li className="bg-indigo-900/20 p-2 rounded-md">El documento es totalmente editable. Puedes añadir o quitar contenido y formato. <strong>Importante:</strong> Cada vez que generas un documento se pierde la información que hayas podido editar 'a mano'.</li>  

        <li className="bg-indigo-900/20 p-2 rounded-md">Cada vez que se genera un documento en Docs se guarda en un ID diferente al anterior. Por lo que si el documento generado anterior no sirve, acuérdate de eliminarlo. </li> 

      <li className="bg-indigo-900/20 p-2 rounded-md">En la barra de herramientas, pulsa sobre ⚙️ Acciones ⏩ Generar Documento Programación Didáctica. </li>

      

   
     
      </ul>
    </div>
  );
};

export default Step9;
