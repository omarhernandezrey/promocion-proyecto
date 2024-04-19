import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Mi App de Tareas. Todos los derechos reservados.
        </p>
        <div>
          <a href="#" className="text-gray-500 hover:text-white hover:underline ml-4">
            Términos de Servicio
          </a>
          <a href="#" className="text-gray-500 hover:text-white hover:underline ml-4">
            Política de Privacidad
          </a>
          <a href="#" className="text-gray-500 hover:text-white hover:underline ml-4">
            Contacto
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
