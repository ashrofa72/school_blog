import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { UserAuthContextProvider } from '../context/UserAuthContext';
import ProtectedRoute from '../pages/ProtectedRoute';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <UserAuthContextProvider>
        <Navbar />
        <ProtectedRoute>
          <Component {...pageProps} />
        </ProtectedRoute>
        <Footer />
      </UserAuthContextProvider>
    </>
  );
}
