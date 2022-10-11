import {Container, Box} from '@chakra-ui/react';
import Head from 'next/head';
import DropDownMenu from '../components/layouts/dropDownMenu.js';
const dashboard = () => {
    return (
        
        <Container maxW='-moz-max-content'>
            <Head>
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="manifest" href="/site.webmanifest"/>
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
                <title>Dashboard</title>
                <link rel="icon" href='favicon.ico' />
            </Head>
            <Box borderRadius="lg" bg="cyan" p={1} mb={1} align="center" color="black" fontWeight='bold'>
                <text>Dashboard</text>
            </Box>
            <Box>
                <DropDownMenu />
            </Box>
        </Container>
    )
}

export default dashboard