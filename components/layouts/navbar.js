import NextLink from 'next/link';
import {Container, Box, Link, Stack, Heading, Flex ,useColorModeValue} from '@chakra-ui/react';
import ThemeToggleButton from './theme-toggle-button';

const LinkItem = ({ href, path, children}) => {
    const active = path === href
    // const inactiveColor = useColorModeValue(`gray200`)
    const inactiveColor = useColorModeValue(`gray200`, `whiteAlpha.900`)
    return(
        <NextLink href={href}>
            <Link
            p={2}
            bg={active ? 'glassTeal' : undefined}
            color={active ? '#202023' : inactiveColor}
            _hover={{color:'cyan'}}
            >
                {children}
            </Link>
        </NextLink>
    )
}

const Navbar = props => {
    const {path} = props

    return (
        <Box
        position="fixed"
        as="nav"
        w="100%"
        bg={useColorModeValue('#ffffff40', '#20202380')}
        style={{backdropFilter:'blur(10px)'}}
        zIndex={1}
        {...props}
        >
            <Container 
            display="flex" 
            p={2} 
            maxW="-moz-fit-content" 
            wrap="wrap" 
            align="center" 
            justify="space-between"
            >
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                        <text><Link href='/'>LOZATEL</Link> || THE FRIENDLY ATLAS</text>
                    </Heading>
                </Flex>
                <Stack
                fontSize='20px'
                direction={{base: 'column', md:'row-reverse'}}
                display={{base:'none', md:'flex'}}
                width={{base:'full', md:'auto'}}
                alignItems="center"
                flexGrow={1}
                mt={{base:0, nmd:0}}
                mr="12px"
                >
                    <ThemeToggleButton />
                    <LinkItem href='/about' path={path}>About</LinkItem>
                    <LinkItem href='/dashboard' path={path}>Dashboard</LinkItem>
                    <LinkItem href='/knowledged3' path={path}>What Is D3?</LinkItem>


                </Stack>
            </Container>
        </Box>
    )
}

export default Navbar