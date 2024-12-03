const Forms = () => {
    return (
        <form className="bg-white p-8 rounded-lg shadow-md max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Contáctanos</h2>
            <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700">Nombre</label>
                <input type="text" id="name" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">Correo Electrónico</label>
                <input type="email" id="email" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
            </div>
            <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700">Mensaje</label>
                <textarea id="message" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"></textarea>
            </div>
            <button type="submit" className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600">
                Enviar
            </button>
        </form>
    );
}

export default Forms;
