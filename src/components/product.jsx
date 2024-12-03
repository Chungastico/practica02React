const Product = () => {
    return (
        <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="https://dinamicadigital.mx/cdn/shop/files/9a403017-7640-4564-b916-cd7087b135e3.jpg?v=1727838824" alt="Laptop Gamer" className="w-full h-48 object-cover" />
            <div className="p-4">
                <h2 className="text-xl font-bold text-gray-800">MSI Katana 15</h2>
                <p className="text-gray-600 mt-2">Potente laptop gamer con gráficos de última generación y diseño futurista.</p>
                <div className="mt-4 flex justify-between items-center">
                    <span className="text-green-600 font-bold">$1,999.00</span>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                        Añadir al Carrito
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Product;
