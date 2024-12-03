const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
            <div className="text-lg font-bold">Gabriel Campos</div>
            <ul className="hidden md:flex space-x-4">
            <li><a href="#home" className="hover:text-gray-300">Inicio</a></li>
            <li><a href="#productos" className="hover:text-gray-300">Productos</a></li>
            <li><a href="#contacto" className="hover:text-gray-300">Contacto</a></li>
            </ul>
            <button className="bg-blue-500 px-4 py-2 rounded-md text-white hover:bg-blue-600">
            Login
            </button>
        </div>
        </nav>
    );
}

export default Navbar;