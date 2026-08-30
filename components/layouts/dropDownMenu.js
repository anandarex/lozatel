import {
    Tabs,
    TabList,
    TabPanels,
    TabPanel,
    Tab,
    HStack,
    VStack,
    Box,
    StackDivider,
    Flex,
    Button,
    Select,
    ButtonGroup,
    Spacer,
    Divider,
    Heading,
    Container,
    Text,
    Badge,
    Grid,
    GridItem,
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
} from "@chakra-ui/react";
import Head from "next/head";
import TreemapCustomization from "../../chart/trainingChart1/chartD3Customization1";
import exportIndonesia from "../../chart/data/exportIndonesia";

const KPIStat = ({ label, value, helpText, icon }) => (
    <Box
        bg="linear-gradient(135deg, rgba(6,182,212,0.1) 0%, rgba(34,211,238,0.05) 100%)"
        border="1px solid"
        borderColor="cyan.500"
        borderRadius="16px"
        p={5}
        backdropFilter="blur(10px)"
        _hover={{
            borderColor: "cyan.300",
            boxShadow: "0 8px 20px rgba(6, 182, 212, 0.25)",
        }}
        transition="all 0.3s ease"
    >
        <Stat>
            <StatLabel fontSize="sm" color="gray.400" fontWeight="500" mb={2}>
                {icon} {label}
            </StatLabel>
            <StatNumber fontSize="2xl" fontWeight="700" color="cyan.200" mb={1}>
                {value}
            </StatNumber>
            {helpText && <StatHelpText fontSize="xs" color="gray.500">{helpText}</StatHelpText>}
        </Stat>
    </Box>
);

const calculateStats = (data) => {
    const flattenValues = (node) => {
        if (node.value) return [node.value];
        if (node.children) return node.children.flatMap(flattenValues);
        return [];
    };
    
    const allValues = flattenValues(data);
    const total = allValues.reduce((a, b) => a + b, 0);
    const topValue = Math.max(...allValues);
    const count = data.children ? data.children.length : 0;
    
    return {
        total: `$${(total / 1e9).toFixed(2)}B`,
        topCategory: `$${(topValue / 1e9).toFixed(2)}B`,
        categories: count,
    };
};

const DropDownMenu = () => {
    const stats = calculateStats(exportIndonesia);
    
    return (
        <Container maxW="1400px" py={8} px={{ base: 4, md: 6 }}>
            <Head><title>Dashboard</title></Head>

            {/* Header Section */}
            <VStack spacing={6} align="stretch">
                <Box>
                    <Badge colorScheme="cyan" variant="subtle" mb={3} fontSize="sm" px={3} py={1}>
                        Trade Analytics
                    </Badge>
                    <Heading as="h1" size="2xl" color="white" mb={2}>
                        Indonesia Export Dashboard
                    </Heading>
                    <Text color="gray.400" fontSize="md">
                        2021 Export Data by Product Category
                    </Text>
                </Box>

                {/* KPI Summary Row */}
                <Grid
                    templateColumns={{ base: "1fr", sm: "repeat(3, 1fr)" }}
                    gap={4}
                    mb={2}
                >
                    <GridItem>
                        <KPIStat
                            icon="📊"
                            label="Total Exports"
                            value={stats.total}
                            helpText="All products combined"
                        />
                    </GridItem>
                    <GridItem>
                        <KPIStat
                            icon="⭐"
                            label="Top Category"
                            value={stats.topCategory}
                            helpText="Highest single category"
                        />
                    </GridItem>
                    <GridItem>
                        <KPIStat
                            icon="📦"
                            label="Categories"
                            value={stats.categories}
                            helpText="Product categories tracked"
                        />
                    </GridItem>
                </Grid>
            </VStack>

            {/* Main Content */}
            <Flex direction={{ base: "column", xl: "row" }} gap={7} align="stretch" mt={8}>
                {/* Chart Panel */}
                <Box
                    flex="1"
                    bg="linear-gradient(135deg, rgba(7,24,39,0.8) 0%, rgba(15,23,42,0.9) 100%)"
                    px={6}
                    py={5}
                    borderRadius="20px"
                    border="1px solid"
                    borderColor="cyan.500"
                    boxShadow="0 25px 50px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
                    backdropFilter="blur(20px)"
                >
                    <Box overflow="hidden" borderRadius="16px" bg="gray.900">
                        <TreemapCustomization width={940} height={580} data={exportIndonesia} />
                    </Box>
                </Box>

                {/* Controls Panel */}
                <Box
                    w={{ base: "100%", xl: "380px" }}
                    borderRadius="20px"
                    border="1px solid"
                    borderColor="cyan.500"
                    bg="linear-gradient(135deg, rgba(7,24,39,0.8) 0%, rgba(15,23,42,0.9) 100%)"
                    boxShadow="0 25px 50px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
                    backdropFilter="blur(20px)"
                    overflow="hidden"
                >
                    <Tabs defaultIndex={0} isFitted variant="enclosed-colored" colorScheme="cyan" bg="gray.900">
                        <TabList bg="gray.800" borderBottom="1px solid" borderColor="gray.700">
                            <Tab _selected={{ color: "cyan.300", bg: "gray.900", fontWeight: "600" }} fontSize="sm">Build</Tab>
                            <Tab _selected={{ color: "cyan.300", bg: "gray.900", fontWeight: "600" }} fontSize="sm">Settings</Tab>
                        </TabList>

                        <TabPanels bg="gray.900">
                            <TabPanel p={6}>
                                <VStack spacing={5} align="stretch">
                                    <Box>
                                        <Text color="gray.300" fontSize="sm" fontWeight="600" mb={3}>
                                            📍 Select Country
                                        </Text>
                                        <ButtonGroup spacing={2} variant="outline" width="100%">
                                            <Button flex="1" colorScheme="cyan" variant="solid" fontSize="sm">
                                                Country
                                            </Button>
                                            <Button flex="1" isDisabled fontSize="sm">
                                                Product
                                            </Button>
                                        </ButtonGroup>
                                    </Box>

                                    <Select
                                        defaultValue="indonesia"
                                        bg="gray.800"
                                        borderColor="gray.600"
                                        color="white"
                                        placeholder="Select Country"
                                        _hover={{ borderColor: "cyan.400" }}
                                        fontSize="sm"
                                    >
                                        <option value='indonesia'>Indonesia</option>
                                        <option value='singapore'>Singapore</option>
                                        <option value='malaysia'>Malaysia</option>
                                        <option value='thailand'>Thailand</option>
                                        <option value='vietnam'>Vietnam</option>
                                        <option value='philippines'>Philippines</option>
                                        <option value='brunei'>Brunei</option>
                                        <option value='cambodia'>Cambodia</option>
                                        <option value='laos'>Laos</option>
                                    </Select>

                                    <Divider borderColor="gray.700" />

                                    <Box>
                                        <Text color="gray.300" fontSize="sm" fontWeight="600" mb={3}>
                                            📊 Trade Direction
                                        </Text>
                                        <ButtonGroup isAttached variant="outline" width="100%">
                                            <Button flex="1" colorScheme="cyan" fontSize="sm">
                                                Exports
                                            </Button>
                                            <Button flex="1" fontSize="sm">
                                                Imports
                                            </Button>
                                        </ButtonGroup>
                                    </Box>

                                    <Box>
                                        <Text color="gray.300" fontSize="sm" fontWeight="600" mb={3}>
                                            🗺️ Visualization Type
                                        </Text>
                                        <ButtonGroup
                                            isAttached
                                            variant="outline"
                                            width="100%"
                                            flexWrap="wrap"
                                        >
                                            <Button flex="1" minW="90px" isDisabled fontSize="xs">
                                                Tree Map
                                            </Button>
                                            <Button flex="1" minW="90px" fontSize="xs">
                                                Geo Map
                                            </Button>
                                            <Button flex="1" minW="90px" fontSize="xs">
                                                Overtime
                                            </Button>
                                            <Button flex="1" minW="90px" fontSize="xs">
                                                Share
                                            </Button>
                                        </ButtonGroup>
                                    </Box>

                                    <Box>
                                        <Text color="gray.300" fontSize="sm" fontWeight="600" mb={3}>
                                            🔍 Analysis By
                                        </Text>
                                        <ButtonGroup isAttached variant="outline" width="100%">
                                            <Button flex="1" isDisabled fontSize="sm">
                                                Product
                                            </Button>
                                            <Button flex="1" fontSize="sm">
                                                Partner
                                            </Button>
                                        </ButtonGroup>
                                    </Box>

                                    <Box>
                                        <Text color="gray.300" fontSize="sm" fontWeight="600" mb={3}>
                                            📋 Product Type
                                        </Text>
                                        <Select
                                            bg="gray.800"
                                            borderColor="gray.600"
                                            color="white"
                                            placeholder="Select a product"
                                            _hover={{ borderColor: "cyan.400" }}
                                            fontSize="sm"
                                        >
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
                                    </Box>
                                </VStack>
                            </TabPanel>

                            <TabPanel p={6}>
                                <VStack spacing={5} align="stretch" color="gray.200">
                                    <Box>
                                        <Text fontWeight="600" color="gray.300" mb={3}>
                                            📌 Product Classification
                                        </Text>
                                        <ButtonGroup size="sm" variant="outline" width="100%" isAttached>
                                            <Button flex="1" fontSize="xs">
                                                SITC rev.2
                                            </Button>
                                            <Button flex="1" isDisabled fontSize="xs">
                                                HC rev.2
                                            </Button>
                                        </ButtonGroup>
                                    </Box>

                                    <Divider borderColor="gray.700" />

                                    <Box>
                                        <Text fontWeight="600" color="gray.300" mb={3}>
                                            💱 Trade Flow
                                        </Text>
                                        <ButtonGroup size="sm" variant="outline" width="100%" isAttached>
                                            <Button flex="1" fontSize="xs">
                                                Gross
                                            </Button>
                                            <Button flex="1" fontSize="xs">
                                                Net
                                            </Button>
                                        </ButtonGroup>
                                    </Box>

                                    <Divider borderColor="gray.700" />

                                    <Box>
                                        <Text fontWeight="600" color="gray.300" mb={3}>
                                            🔬 Detail Level
                                        </Text>
                                        <ButtonGroup size="sm" variant="outline" width="100%" isAttached>
                                            <Button flex="1" isDisabled fontSize="xs">
                                                2 Digit
                                            </Button>
                                            <Button flex="1" fontSize="xs">
                                                4 Digit
                                            </Button>
                                            <Button flex="1" fontSize="xs">
                                                6 Digit
                                            </Button>
                                        </ButtonGroup>
                                    </Box>
                                </VStack>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Box>
            </Flex>
        </Container>
    );
};

export default DropDownMenu;