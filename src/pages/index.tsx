import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Importa Image desde next/image

const Home = () => {
  return (
    <div>
      <section className="hero bg-blue-500 text-white p-8">
        <div className="container mx-auto flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-bold mb-4">Bienvenido a Mi App de Tareas</h1>
          <p className="mb-6">Organiza tu vida, mejora tu productividad con facilidad.</p>
          <Link href="/signup" className="inline-block bg-white text-blue-500 py-2 px-6 rounded-lg font-medium text-lg">
            Regístrate Gratis
          </Link>
        </div>
      </section>

      <section className="features py-12 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Características Principales</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="font-semibold text-xl mb-2">Gestión de Tareas</h3>
              <p>Administra tus proyectos y tareas diarias con herramientas intuitivas.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="font-semibold text-xl mb-2">Alertas y Recordatorios</h3>
              <p>Mantente al día con recordatorios personalizados.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="font-semibold text-xl mb-2">Integración Completa</h3>
              <p>Conecta con Google Calendar, Asana, y más para una sincronización perfecta.</p>
            </div>
          </div>
        </div>
      </section>


      {/* Nueva sección para la tarjeta animada */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto">
          <div className="flex justify-center items-center">
            <div className="max-w-md w-full mx-auto overflow-hidden rounded-lg shadow-lg">
              <div className="relative">
                <Image src="/images/todo.png" alt="App de Tareas" width={500} height={300} />
                <div className="absolute top-0 left-0 bg-blue-500 text-white py-2 px-4 rounded-br-lg">
                  <p className="text-lg font-bold">¡Organiza tu vida con facilidad!</p>
                </div>
              </div>
              <div className="p-4 bg-white">
                <h3 className="text-2xl font-semibold mb-2">Crea nuevas tareas</h3>
                <p>¡Agrega nuevas tareas fácilmente y mantén tu día organizado!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials py-12 bg-gray-900 text-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">Lo Que Dicen Nuestros Usuarios</h2>
          <div className="max-w-3xl mx-auto">
            <div className="p-6 bg-gray-800 rounded-lg shadow-md mb-8">
              <p className="text-lg italic">
                &quot;Esta aplicación ha revolucionado mi forma de trabajar y organizar mi vida diaria. La facilidad de uso y las características avanzadas realmente marcan la diferencia. ¡Gracias por crear una herramienta tan increíble!&quot; - Usuario Satisfecho
              </p>
            </div>
            {/* Agrega más testimonios aquí si es necesario */}
          </div>
        </div>
      </section>



    </div>
  );
};

export default Home;
