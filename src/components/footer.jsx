const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-400 py-8">
            <div className="container mx-auto text-center">
                <p>&copy; 2024 Gabriel Campos. Todos los derechos reservados.</p>
                <div className="flex justify-center space-x-4 mt-4">
                    <a href="#" className="hover:text-white">Facebook</a>
                    <a href="#" className="hover:text-white">Twitter</a>
                    <a href="#" className="hover:text-white">Instagram</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
