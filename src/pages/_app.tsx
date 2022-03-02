import { AppProps } from 'next/app';

import '../styles/global.scss';
import { Header } from '../components/Header';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

import { Provider as NextAuthProvider } from 'next-auth/client';

const initialOptions = {
  "client-id": "AasDRCofhkxX55YykRmklrvVuBTpC2Dfywv2Kgcsny7Y4TkyoUnqnfsxvKrsrNP42P8QdgXVgqf5ZTUp",
  currency: "BRL",
  intent: "capture"
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <PayPalScriptProvider options={initialOptions}>
      <Header />
      <Component {...pageProps} />
      </PayPalScriptProvider>
    </NextAuthProvider>
  )
}

export default MyApp
