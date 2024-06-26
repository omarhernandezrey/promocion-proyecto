import React from "react";

const About = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">¡Bienvenido a Mi App de Tareas!</h2>
            <p className="text-lg mb-6 text-gray-800">
              Mi App de Tareas es la herramienta perfecta para organizar tu vida diaria y mejorar tu productividad de manera eficiente. ¡Descubre todas las increíbles características que tenemos para ti!
            </p>
            <ul className="list-disc pl-6 text-lg text-gray-800 mb-6">
              <li>Crea nuevas tareas fácilmente</li>
              <li>Marca las tareas completadas con un solo clic</li>
              <li>Realiza búsquedas y filtra tus tareas de forma rápida</li>
              <li>Elimina tareas con un simple gesto</li>
              <li>¡Toda tu información se almacena de forma segura en tu dispositivo!</li>
            </ul>
            <p className="text-lg text-gray-800">
              Nuestra misión es proporcionarte las herramientas adecuadas para que puedas mantener tus proyectos en orden, nunca olvides una tarea importante y te mantengas siempre un paso adelante en tus metas personales y profesionales.
            </p>
          </div>
          {/* Eliminé el bloque de imagen */}
        </div>
      </div>
      <div className="mt-12 bg-white py-12 shadow-xl rounded-lg">
        <div className="container mx-auto">
          <h3 className="text-3xl font-semibold mb-6 text-gray-900">Nuestra Visión</h3>
          <p className="text-lg mb-6 text-gray-800">
            En Mi App de Tareas, creemos en un mundo donde la organización y la productividad son accesibles para todos. Queremos ser tu compañero de confianza en tu viaje hacia una vida más organizada y satisfactoria. Nuestra visión es convertirnos en la aplicación número uno para la gestión de tareas, ofreciendo una experiencia única y personalizada para cada usuario.
          </p>
          <h3 className="text-3xl font-semibold mb-6 text-gray-900">Nuestro Equipo</h3>
          <p className="text-lg mb-6 text-gray-800">
            Detrás de Mi App de Tareas hay un equipo dedicado de desarrolladores, diseñadores y expertos en productividad que trabajan arduamente para ofrecerte la mejor experiencia posible. Estamos comprometidos con la excelencia y nos esforzamos por superar tus expectativas en cada paso del camino.
          </p>
          <h3 className="text-3xl font-semibold mb-6 text-gray-900">Únete a Nosotros</h3>
          <p className="text-lg mb-6 text-gray-800">
            ¿Interesado en formar parte de nuestra comunidad? ¡Nos encantaría tenerte a bordo! Únete a nosotros hoy mismo y descubre cómo Mi App de Tareas puede ayudarte a alcanzar tus objetivos de manera más eficiente y efectiva.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
