import Head from 'next/head';
import {Box, Container} from '@chakra-ui/react';
import Navbar from './navbar';

const Main = ({ children}) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <title>Lozatel</title>
            </Head>
            <Navbar />
            <Container maxW="-moz-fit-content" pt={5}>
            {children}
            </Container>
        </Box>
    )
}

export default Main