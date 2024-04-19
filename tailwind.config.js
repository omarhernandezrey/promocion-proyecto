// Importación de tipos desde el paquete de Tailwind CSS
import { Config } from 'tailwindcss';

// Definición de la configuración de Tailwind CSS usando TypeScript
const config: Config = {
  // Especifica los directorios y tipos de archivos en los que Tailwind debería buscar clases para purgar el CSS no utilizado
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}', // Busca en todos los archivos de páginas
    './src/components/**/*.{js,ts,jsx,tsx,mdx}', // Busca en todos los archivos de componentes
    './src/app/**/*.{js,ts,jsx,tsx,mdx}', // Busca en todos los archivos dentro de la carpeta app
  ],
  // Personalización del tema de Tailwind
  theme: {
    extend: {
      // Extiende el tema para incluir gradientes personalizados
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))', // Gradiente radial personalizado
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))', // Gradiente cónico personalizado
      },
      // Aquí puedes añadir más personalizaciones al tema como colores, tipografías, etc.
    },
  },
  // Plugins de Tailwind CSS, aquí puedes añadir plugins adicionales si los necesitas
  plugins: [],
};

// Exporta la configuración para que sea utilizada por Tailwind CSS
export default config;
