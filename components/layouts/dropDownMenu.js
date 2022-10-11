import {Tabs, TabList, TabPanels, TabPanel, Tab, Text, 
    HStack, VStack, Box, StackDivider, Flex, Button, Select, 
    Icon, Image, ButtonGroup, Stack, Spacer, Divider, Heading, Container } from "@chakra-ui/react";
import Head from "next/head";
import data from "../../chart/data/data";
import Treemap from "../../chart/trainingChart1/chartTraining";
import TreemapCustomization from "../../chart/trainingChart1/chartD3Customization1";
import goldenStateWariorsData from "../../chart/data/goldenStateWarriorsData";
import exportIndonesia from "../../chart/data/exportIndonesia";
const DropDownMenu = props => {
    
    return (
        <Container maxW='-moz-max-content'>
           <Head><title>Dashboard</title></Head>
            {/* <Box bgColor={'blue'} maxW={'-moz-max-content'}> */}
            <Flex flexGrow={1} mt={'10px'}>
            <Box>
                <Heading mb={2}>Indonesia Export (2021)</Heading>
                {/* <Box mb={'20px'}>
                <Treemap width={1000} height={800} data={data} />
                </Box> */}
                <Box>
                <TreemapCustomization width={1000} height={600} data={exportIndonesia} />
                </Box>
            </Box>
            <Spacer />
            <Box display='flex-end' alignItems='baseline' border='2px' borderColor='cyan' borderStyle='solid'>
            <Tabs defaultIndex={0} isFitted variant='enclosed-colored' colorScheme='blue'>
        <TabList>
            <Tab>Build Visualization</Tab>
            <Tab>Settings</Tab>
        </TabList>
        <TabPanels>
            <TabPanel>
                <VStack
                spacing={4}
                align='center'
                mt={0}
                >
                    <Box>Please Select One:</Box>
                </VStack>
                <HStack
                spacing={4}
                align='center'
                justifyContent='center'
                mt={3}
                >
                        <ButtonGroup spacing='20' variant='outline'>
                        <Button>Country</Button>
                        <Button>Product</Button>
                        </ButtonGroup>
                </HStack>
                <VStack
                divider={<StackDivider borderColor='gray.200'/>}
                spacing={4}
                align='center'
                mt={3}
                >
                        <Select placeholder="Select Country">
                            <option selected value='indonesia'>Indonesia</option>
                            <option value='singapore'>Singapore</option>
                            <option value='malaysia'>Malaysia</option>
                            <option value='thailand'>Thailand</option>
                            <option value='vietnam'>Vietnam</option>
                            <option value='philippines'>Philippines</option>
                            <option value='brunei'>Brunei</option>
                            <option value='cambodia'>Cambodia</option>
                            <option value='laos'>Laos</option>
                        </Select>
                    <Box>
                        <text>TEXT VISUALIZATIONS</text>
                    </Box>
                </VStack>
                <HStack
                spacing={4}
                align='center'
                justifyContent='center'
                mt={3}
                >
                    <ButtonGroup size='md' isAttached variant='outline' >
                    <Button variant='outline'>Exports</Button>
                    <Button variant='outline'>Imports</Button>
                    </ButtonGroup>
                </HStack>
                <HStack
                spacing={0}
                align='center'
                justifyContent='center'
                mt={3}
                >
                    <ButtonGroup isAttached>
                    <Button size='sm' variant='outline'>Tree Map</Button>
                    <Button size='sm' variant='outline'>Geo Map</Button>
                    <Button size='sm' variant='outline'>Overtime</Button>
                    <Button size='sm' variant='outline'>Global Share</Button>
                    </ButtonGroup>
                </HStack>
                <HStack
                spacing={0}
                align='center'
                justifyContent='center'
                mt={3}
                >
                    <ButtonGroup size='md' isAttached variant='outline' >
                    <Button variant='outline'>By Product</Button>
                    <Button variant='outline'>By Partner</Button>
                    </ButtonGroup>
                </HStack>
                <HStack
                spacing={0}
                align='center'
                justifyContent='center'
                mt={3}
                >
                    <Select placeholder="Select a product">
                            <option value='textiles'>Textiles</option>
                            <option value='agriculture'>Agriculture</option>
                            <option value='stone'>Stone</option>
                            <option value='minerals'>Minerals</option>
                            <option value='metals'>Metals</option>
                            <option value='chemicals'>Chemicals</option>
                            <option value='vehicles'>Vehicles</option>
                            <option value='electronics'>Electronics</option>
                            <option value='other'>Other</option>
                            <option value='services'>Services</option>
                        </Select>
                </HStack>
            </TabPanel>
            <TabPanel>
                <VStack
                spacing={4}
                align='center'
                mt={0}
                >
                    <text>Product Class</text>
                    <ButtonGroup>
                        <Button>SITC rev.2 2000-2019</Button>
                        <Button>HC rev.2 2000-2019</Button>
                    </ButtonGroup>
                    <Divider />
                    <text>Trade Flow</text>
                    <ButtonGroup>
                        <Button>Gross</Button>
                        <Button>Net</Button>
                    </ButtonGroup>
                    <Divider />
                    <text>Detail Level</text>
                    <ButtonGroup>
                        <Button>2 Digit</Button>
                        <Button>4 Digit</Button>
                        <Button>6 Digit</Button>
                    </ButtonGroup>
                </VStack>
            </TabPanel>
        </TabPanels>
        </Tabs>
            </Box>

            </Flex>
            {/* </Box> */}
        </Container>
    )
}

export default DropDownMenu