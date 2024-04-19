import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <a className="flex items-center">
            <Image src="/logo.png" alt="Logo de la Aplicación" width={50} height={50} />
            <span className="font-bold text-xl ml-2">Nombre de la App</span>
          </a>
        </Link>
        <nav>
          <Link href="/features" className="mx-2 hover:underline">Características</Link>
          <Link href="/about" className="mx-2 hover:underline">Acerca de</Link>
          <Link href="/contact" className="mx-2 hover:underline">Contacto</Link>
        </nav>
        <Link href="/demo" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Prueba Ahora
        </Link>
      </div>
    </header>
  );
};

export default Header;
