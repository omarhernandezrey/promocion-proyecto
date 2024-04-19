import '../styles/globals.css'; // Asegúrate de que la ruta es correcta
import Navbar from '../components/Navbar'; // Asegúrate de que la ruta es correcta
import Footer from '../components/footer'; // Corrige la importación del componente Footer
import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }: { Component: any, pageProps: any }) {
    return (
        <>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
        </>
    );
}

export default MyApp;
