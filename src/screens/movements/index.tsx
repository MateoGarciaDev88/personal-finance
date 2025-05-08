import React from "react";
import MovimientosFinancieros from "./MovimientosFinancieros";

const movimientos = [
  {
    id: '1',
    categoria: 'Ingreso',
    descripcion: 'Salario mensual',
    monto: 3500000,
    fecha: '2025-05-01',
    persona: 'Carlos',
  },
  {
    id: '2',
    categoria: 'Gasto',
    descripcion: 'Arriendo',
    monto: 1200000,
    fecha: '2025-05-02',
    persona: 'Carlos',
  },
  {
    id: '3',
    categoria: 'Ahorro',
    descripcion: 'Ahorro para viaje',
    monto: 300000,
    fecha: '2025-05-03',
    persona: 'Carlos',
  },
  {
    id: '4',
    categoria: 'Inversión',
    descripcion: 'Cripto activos',
    monto: 500000,
    fecha: '2025-05-04',
    persona: 'Carlos',
  },
];

const Movement = () => {
  return <MovimientosFinancieros movimientos={movimientos} />;
};

export default Movement;