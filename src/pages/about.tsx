import React from "react";

const About = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h2 className="text-4xl font-bold mb-6">Acerca de Mi App de Tareas</h2>
            <p className="text-lg mb-6">
              Mi App de Tareas es una aplicación diseñada para ayudarte a organizar tu vida diaria y mejorar tu productividad de manera fácil y eficiente. Con una amplia gama de características y una interfaz intuitiva, estamos aquí para hacer que la gestión de tareas sea simple y agradable para ti.
            </p>
            <p className="text-lg">
              Nuestra misión es proporcionarte las herramientas adecuadas para que puedas mantener tus proyectos en orden, nunca olvides una tarea importante y te mantengas siempre un paso adelante en tus metas personales y profesionales.
            </p>
          </div>
          {/* Eliminé el bloque de imagen */}
        </div>
      </div>
      <div className="mt-12 bg-white py-12">
        <div className="container mx-auto">
          <h3 className="text-2xl font-semibold mb-6">Nuestra Visión</h3>
          <p className="text-lg mb-6">
            En Mi App de Tareas, creemos en un mundo donde la organización y la productividad son accesibles para todos. Queremos ser tu compañero de confianza en tu viaje hacia una vida más organizada y satisfactoria. Nuestra visión es convertirnos en la aplicación número uno para la gestión de tareas, ofreciendo una experiencia única y personalizada para cada usuario.
          </p>
          <h3 className="text-2xl font-semibold mb-6">Nuestro Equipo</h3>
          <p className="text-lg mb-6">
            Detrás de Mi App de Tareas hay un equipo dedicado de desarrolladores, diseñadores y expertos en productividad que trabajan arduamente para ofrecerte la mejor experiencia posible. Estamos comprometidos con la excelencia y nos esforzamos por superar tus expectativas en cada paso del camino.
          </p>
          <h3 className="text-2xl font-semibold mb-6">Únete a Nosotros</h3>
          <p className="text-lg mb-6">
            ¿Interesado en formar parte de nuestra comunidad? ¡Nos encantaría tenerte a bordo! Únete a nosotros hoy mismo y descubre cómo Mi App de Tareas puede ayudarte a alcanzar tus objetivos de manera más eficiente y efectiva.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

