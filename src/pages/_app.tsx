import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { fonts } from "@/lib/fonts";
import { FilterProvider } from "@/context/FilterContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-rubik: ${fonts.rubik.style.fontFamily};
            --font-inter: ${fonts.inter.style.fontFamily};
          }
        `}
      </style>
      
      <FilterProvider>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </FilterProvider>
    </>
  );
}

export default MyApp;
