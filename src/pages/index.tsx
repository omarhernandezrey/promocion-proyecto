import Link from 'next/link';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div>
      <section className="hero bg-blue-500 text-white p-8">
        <div className="container mx-auto flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-bold mb-4">Bienvenido a Mi App de Tareas</h1>
          <p className="mb-6">Organiza tu vida, mejora tu productividad con facilidad.</p>
          <Link href="/signup" className="inline-block bg-white text-blue-500 py-2 px-6 rounded-lg font-medium text-lg">
            <img src="/public/images/todo.png" alt="" />Regístrate Gratis
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

      <section className="testimonials py-12 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Lo Que Dicen Nuestros Usuarios</h2>
          <p className="text-center text-lg italic">"Esta aplicación ha revolucionado mi forma de trabajar y organizar mi vida diaria." - Usuario Satisfecho</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
