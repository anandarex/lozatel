import {Container, Box, Image, Center, Heading} from '@chakra-ui/react';
import Head from 'next/head';

const knowledged3 = () => {
    return (
        
        <Container maxW='-moz-max-content'>
            <Head>
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="manifest" href="/site.webmanifest"/>
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
                <title>What is D3?</title>
            </Head>
            <Box borderRadius="lg" bg="cyan" p={1} mb={1} align="center" color="black" fontWeight='bold'>
                <text>What is D3</text>
            </Box>
            <br/>
            <Center>
                <Center>
                <Image borderRadius='full'
            boxSize='200px'
            src='https://cdn.dribbble.com/users/22018/screenshots/2456036/d3.png'
            alt='d3logo' />
                </Center>
                
            <br/>
            </Center>
            <Center>
            <br/>
            <Heading color={'cyan'} boxSize={'lg'}>D3 is JavaScript library for manipulating documents based on data. 
                D3 helps you bring data to life using HTML, SVG, and CSS.</Heading>
                <br/>
            <Heading color={'white'} boxSize={'lg'}>
                D3 adalah library Javascript untuk memanipulasi dokumen berdasarkan data.
                    D3 membantu dalam menyajikan data menjadi lebih hidup menggunakan HTML, SVG, dan CSS.</Heading>
            </Center>
            
        </Container>
    )
}

export default knowledged3