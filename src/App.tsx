import { useRoutes } from "react-router-dom";
import React from 'react';
import { routes } from './Routes';

export default function App() {
  const elem = useRoutes(routes);
  return (
    <div>
      {elem}
    </div>
  );
}
