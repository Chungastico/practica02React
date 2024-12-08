import React from "react";
import Contador from "./components/Contador";
import Seccion from "./components/Seccion";

const App = () => {
  return (
    <div className="min-h-screen bg-slate-300 flex flex-col items-center justify-center">
      <Seccion
        titulo="Gabriel Campos"
        descripcion="Proyecto de contador :D"
      >
        <Contador />
      </Seccion>
    </div>
  );
};

export default App;
