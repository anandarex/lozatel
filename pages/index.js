import { Center, Heading, Link, Spacer} from '@chakra-ui/react'
import { Container, Box } from '@chakra-ui/react'
import Head from 'next/head'
import { ArrowRightIcon } from '@chakra-ui/icons'

// const {isOpen, onToggle } = () => useDisclosure()

const Page = props => {
  
  return (
     <Container maxW='-moz-fit-content'>
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
          <Spacer/>
          
          <Box mt='50px'>
            <Center>
            <Heading fontSize='xxx-large'>Welcome to <Link href='/about'>Lozatel</Link></Heading>
            </Center>
            <Center>
            {/* <Button onClick={onToggle}><ArrowDownIcon w={10} h={10}/></Button> */}
            </Center>
            <Spacer mb='10px'/>
            
              <Box
              p='50px'
              mt='4'
              rounded='md'
              shadow='md'
              >
              <Center>
            <Heading fontSize='xxx-large'>We Transform Raw Data Into a Beautiful Chart</Heading>
            </Center>
            <Spacer mb='10px'/>
            <Center>
            <Heading fontSize='xxx-large'>Fresh Made with D3 JS</Heading>
            </Center>
            <Spacer mb='10px'/>
            <Center>
            <Heading fontSize='xxx-large'>See What We Do</Heading>
            </Center>
            <Spacer mb='10px'/>
            <Center>
              <Link _hover={{color:'cyan'}} href='/dashboard'><ArrowRightIcon w={8} h={8}/></Link>
            </Center>
              </Box>
      
          </Box>
          
          
     </Container>
  )
}
export default Page