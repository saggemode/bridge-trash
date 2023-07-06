import Script from 'next/script';
import { ThemeProvider } from 'next-themes';
import Head from 'next/head';

import { NFTProvider } from '../context/NFTContext';
import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../utils/theme";
function MyApp({ Component, pageProps }) {
  return (
    <NFTProvider>
       <ThemeProvider attribute="class">
      <Component {...pageProps} />
      </ThemeProvider>
    </NFTProvider>
  );
}

export default MyApp;
