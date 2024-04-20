import '../styles/globals.css'; // Asegúrate de que la ruta es correcta
import Navbar from '../components/Navbar'; // Asegúrate de que la ruta es correcta
import Footer from '../components/footer'; // Asegúrate de que la ruta es correcta
import 'tailwindcss/tailwind.css';
import CustomForm from '../components/CustomForm';

function MyApp({ Component, pageProps }: { Component: any, pageProps: any }) {
    return (
        <>
            <Navbar />
            <Component {...pageProps} />
            <CustomForm/>
            <Footer />
           
        </>
    );
}

export default MyApp;
