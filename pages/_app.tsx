import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import IntlProvider from "../providers/IntlProvider";
import theme from "../theme";

import { AppProps } from "./_app.type";

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <div>
      <ChakraProvider theme={theme}>
        <IntlProvider>
          <Head>
            <title>Timerize</title>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
              href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
              rel="stylesheet"
            />
          </Head>
          <Component {...pageProps} />
        </IntlProvider>
      </ChakraProvider>
    </div>
  );
};

export default App;
