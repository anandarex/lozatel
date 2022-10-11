import { Link } from '@chakra-ui/react'
import { Container, Box } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'

const Page = () => {
  return (
     <Container maxW='-moz-fit-content' bgColor={'black'}>
      <Head>
              <meta name='viewport' content='width=device-width, initial-scale=1' />
              <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
              <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
              <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
              <link rel="manifest" href="/site.webmanifest"/>
              <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
              <title>Lozatel</title>
      </Head>
          <Box borderRadius="lg" bg="cyan" p={1} mb={1} align="center" color="black" fontWeight='bold'>
              <text>Lozatel</text>
          </Box>
     </Container>
  )
}
export default Page