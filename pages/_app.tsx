import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar2 from '../components/Navbar2';
import Footer from '../components/Footer';
import { UserAuthContextProvider } from '../context/UserAuthContext';
import ProtectedRoute from '../pages/ProtectedRoute';
import { useRouter } from 'next/router';
//import 'bootstrap/dist/css/bootstrap.min.css';

const noAuthRequired = ['/phonesignup', '/signup', '/login'];

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <UserAuthContextProvider>
      <Navbar2 />
      {noAuthRequired.includes(router.pathname) ? (
        <Component {...pageProps} />
      ) : (
        <ProtectedRoute>
          <Component {...pageProps} />
        </ProtectedRoute>
      )}
      <Footer />
    </UserAuthContextProvider>
  );
}
