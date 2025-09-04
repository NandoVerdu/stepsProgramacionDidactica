import type { Step } from './types';
import Step1 from './components/steps/Step1';
import Step2 from './components/steps/Step2';
import Step3 from './components/steps/Step3';
import Step4 from './components/steps/Step4';
import Step5 from './components/steps/Step5';
import Step6 from './components/steps/Step6';
import Step7 from './components/steps/Step7';
import Step8 from './components/steps/Step8';
import Step9 from './components/steps/Step9';
import Step10 from './components/steps/Step10';

export const STEPS: Step[] = [
  {
    id: 1,
    title: 'Paso 1: Descarga archivo',
    component: Step1,
    imageUrl: 'https://www.automateexcel.com/excel/wp-content/uploads/2022/11/Hacer-una-Copia-de-Libro-en-Google-Sheets.jpg',
  },
  {
    id: 2,
    title: 'Paso 2: Selecciona tu módulo',
    component: Step2,
    
  },
  {
    id: 3,
    title: 'Paso 3: Completa datos en la hoja CONFIGURACIÓN',
    component: Step3,
    
  },
  {
    id: 4,
    title: 'Paso 4: Objetivos y Competencias',
    component: Step4,
    
  },
  {
    id: 5,
    title: 'Paso 5: Definición de Actividades',
    component: Step5,
    
  },
   {
    id: 6,
    title: 'Paso 6: Define las Unidades Didácticas',
    component: Step6,
    
  },
   {
    id: 7,
    title: 'Paso 7: Ordena UDs y actividades',
    component: Step7,
   
  },
  {
    id: 8,
    title: 'Paso 8: Distribuye temporalmente',
    component: Step8,
   
  },
    {
    id: 9,
    title: 'Paso 9: Genera el documento final',
    component: Step9,
    
  },
    {
    id: 10,
    title: 'Paso 10: Último paso',
    component: Step10,
    imageUrl: 'https://cdn0.vox-cdn.com/uploads/chorus_asset/file/6043953/leonardo-dicaprio-celebrate-gif.0.gif',
  }
];