import React from "react";

const Seccion = ({ titulo, descripcion, children }) => {
    return (
        <div className="p-6 bg-white rounded-lg shadow-md mb-6">
        <h1 className="text-2xl font-bold mb-4">{titulo}</h1>
        <p className="mb-4">{descripcion}</p>
        {children}
        </div>
    );
};

export default Seccion;
