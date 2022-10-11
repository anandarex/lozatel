import {Container, Box, Image, Center, Heading} from '@chakra-ui/react';
import Head from 'next/head';

const about = () => {
    return (
        
        <Container maxW='-moz-max-content'>
            <Head>
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="manifest" href="/site.webmanifest"/>
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
                <title>About Us</title>
            </Head>
            <Box borderRadius="lg" bg="cyan" p={1} mb={1} align="center" color="black" fontWeight='bold'>
                <text>About Us</text>
            </Box>
            <br></br>
            <Center>
            <Heading lineHeight='tall'>
            This Website Prototype Made & Designed by :   
            </Heading>
            </Center>
            <Center>
            <Image
                borderRadius='full'
                boxSize='150px'
                src='https://images.genius.com/6d22714b99b3e09f0e0c985bb18a386f.748x748x1.png'
                alt='Anandar the dev'
                />
                </Center>
                <Center><Heading>Rizki Anandar Saputra</Heading></Center>
                <br/>
                <Center><h3>Made With :</h3></Center>
                <br/>
                <Center>
                    <Image
                    borderRadius='full'
                    boxSize='100px'
                    src='https://decodenatura.com/static/fb8aa1bb70c9925ce1ae22dc2711b343/nextjs-logo.png'
                    alt='nextjslogo'
                    />
                    <Image
                    borderRadius='full'
                    boxSize='100px'
                    src='https://miro.medium.com/max/400/1*q0emKRBNI0Sv_NseTYRDwg.png'
                    alt='chakrauilogo'
                    />
                    <Image
                    borderRadius='full'
                    boxSize='100px'
                    src='https://cdn.dribbble.com/users/22018/screenshots/2456036/d3.png'
                    alt='d3Logo'
                    />
                    <Image
                    borderRadius='full'
                    boxSize='100px'
                    src='https://www.pngitem.com/pimgs/m/664-6644509_icon-react-js-logo-hd-png-download.png'
                    alt='ReactLogo'
                    />
                </Center>
                <br/>
                    <Center><h3>Special Thanks to :</h3></Center>
                    <br/>
                    <Center>
                    <Image
                    bgColor={'white'}
                    borderRadius='full'
                    boxSize='200px'
                    src='https://kompaspedia.kompas.id/wp-content/uploads/2020/08/logo_Universitas-Bina-Nusantara-thumb.png'
                    alt='BinusLogo'
                    />
                    </Center>
        </Container>
    )
}

export default about