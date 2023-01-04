import '../styles/globals.css';
import { Toaster } from 'react-hot-toast';
import { SessionProvider as AuthProvider } from 'next-auth/react';
import {ClerkProvider, RedirectToSignIn, SignedIn, SignedOut,} from "@clerk/nextjs";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <AuthProvider session={session}>
      <ClerkProvider {...pageProps}></ClerkProvider>
      </AuthProvider>

      <Toaster />
    </>
  );
}

export default MyApp;
