import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 mb-4 lg:mb-0">
          <h2 className="text-xl font-bold mb-2">¿Quieres saber más sobre Mi App de Tareas?</h2>
          <p className="text-gray-500">¡Regístrate ahora y descubre todas las funciones increíbles que tenemos para ti!</p>
        </div>
        <div className="lg:w-1/2 flex justify-center lg:justify-end items-center">
          <div className="flex flex-col lg:flex-row items-center">
            <a href="#" className="text-gray-500 hover:text-white hover:underline mb-2 lg:mb-0 lg:mr-4 transition duration-300">
              Términos de Servicio
            </a>
            <a href="#" className="text-gray-500 hover:text-white hover:underline mb-2 lg:mb-0 lg:mr-4 transition duration-300">
              Política de Privacidad
            </a>
            <a href="#" className="text-gray-500 hover:text-white hover:underline mb-2 lg:mb-0 lg:mr-4 transition duration-300">
              Contacto
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-4 pt-4 text-center">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Mi App de Tareas. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
