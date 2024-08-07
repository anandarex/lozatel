// import '../styles/globals.css'

import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layouts/main'
import theme from '../components/layouts/theme'

function MyApp({Component, pageProps, router}) {
  
  return ( 
  <ChakraProvider theme={theme}>
    <Layout router={router}>
<Component {...pageProps} key={router.route} />
</Layout>
  </ChakraProvider>
  )
}

export default MyApp