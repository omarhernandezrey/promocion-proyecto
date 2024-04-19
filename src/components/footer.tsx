import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto flex flex-wrap">
        <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
          <h2 className="text-3xl font-bold mb-4">Bienvenido a Mi App de Tareas</h2>
          <p className="text-sm mb-4">
            Organiza tu vida, mejora tu productividad con facilidad.
          </p>
          <a
            href="/register"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded transition-colors duration-300"
          >
            Regístrate Gratis
          </a>
        </div>
        <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
          <h4 className="text-lg font-semibold mb-3">Características Principales</h4>
          <ul className="text-sm">
            <li>Gestión de Tareas: Administra tus proyectos y tareas diarias con herramientas intuitivas.</li>
            <li>Alertas y Recordatorios: Mantente al día con recordatorios personalizados.</li>
            <li>Integración Completa: Conecta con Google Calendar, Asana, y más para una sincronización perfecta.</li>
          </ul>
        </div>
        <div className="w-full lg:w-1/3">
          <h4 className="text-lg font-semibold mb-3">Lo Que Dicen Nuestros Usuarios</h4>
          <p className="text-sm text-gray-400">
            "Esta aplicación ha revolucionado mi forma de trabajar y organizar mi vida diaria." - Usuario Satisfecho
          </p>
        </div>
      </div>
      <div className="mt-12 text-center">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Mi App de Tareas. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
