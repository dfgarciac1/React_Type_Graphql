import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react'
import theme from '../theme'
import "../scss/index.scss"
import { Provider,createClient } from 'urql';
const client = createClient({
  url: 'http://localhost:4000/graphql',
  fetchOptions:{
    credentials:"include"
  }
});
function MyApp({ Component, pageProps }:any) {
  return (
    <Provider value={client}>
    <ChakraProvider resetCSS theme={theme}>
      <ColorModeProvider
        options={{
          useSystemColorMode: true,
        }}
      >
        <Component {...pageProps} />
      </ColorModeProvider>
    </ChakraProvider>
    </Provider>

  )
}

export default MyApp
