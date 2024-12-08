import React, { useState } from "react";

const Contador = () => {
    const [contador, setContador] = useState(0);

    return (
        <div className="p-4 bg-neutral-100 rounded-lg shadow-md text-center">
        <h2 className="text-xl font-bold mb-4">Contador</h2>
        <p className="text-3xl font-semibold mb-4">{contador}</p>
        <button
            onClick={() => setContador(contador + 1)}
            className="px-4 py-2 bg-green-500 text-white rounded-lg mr-2"
        >
            Incrementar
        </button>
        <button
            onClick={() => setContador(0)}
            className="px-4 py-2 bg-red-500 text-white rounded-lg"
        >
            Restablecer
        </button>
        </div>
    );
};

export default Contador;
