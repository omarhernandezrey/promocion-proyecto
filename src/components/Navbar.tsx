import Link from 'next/link';
import Footer from './footer';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-white text-lg ml-3">
            Home
          </Link>
          <Link href="/about" className="text-white text-lg ml-3">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
