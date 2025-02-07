import React from 'react';
import TableDocuments from './components/TableDocuments';

const documentos = [
  { nombre: 'Listados REGRESO CUADROS UCI 8-1-2025 (v1)', fechaCreacion: '2025-01-04', categoria: 'Informes' },
  { nombre: 'Listados Transportacion UCI Diciembre 2024 (v1)(1)', fechaCreacion: '2024-12-10', categoria: 'Informes' },
  { nombre: 'Lista de reservaciones 1-7-24', fechaCreacion: '2024-12-05', categoria: 'Informes' },
];


const App = () => {
  return (
    <div>
      <TableDocuments data={documentos}/>
    </div>
  );
};

export default App;

