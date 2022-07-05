import React from "react";
import {
  Flex,
  Spacer,
  Text,
  useMediaQuery,
  Icon,
  VStack,
  Heading,
} from "@chakra-ui/react";
import {
  FaTools,
  FaHandshake,
  FaStar,
  FaBuilding,
  FaRegBuilding,
  FaUserTie,
} from "react-icons/fa";

const Services = () => {
  const [isLargerThan48] = useMediaQuery("(min-width: 48em)");

  const array = [
    {
      id: 1,
      text: " تخطيط معماري",
      icon: FaBuilding,
    },
    {
      id: 2,
      text: "تصميم داخلي",
      icon: FaRegBuilding,
    },
    {
      id: 3,
      text: "ادراة بناء",
      icon: FaUserTie,
    },
    {
      id: 4,
      text: "اشراف هندسي",
      icon: FaTools,
    },
  ];

  return (
    <VStack id="app-services">
      <VStack spacing={4} align="center">
        <Heading as="h2" size="3xl" noOfLines={1} color={"#5E5542"}>
          خدماتنا
        </Heading>
      </VStack>
      <Flex
        minH="70vh"
        alignItems="center"
        justifyContent="space-between"
        w="full"
        py="16"
        px={isLargerThan48 ? "16" : "6"}
        flexDirection={isLargerThan48 ? "row" : "column"}
      >
        {array.map((arr) => (
          <>
            <Flex
              height="300px"
              bg="#FFFEFF"
              width={isLargerThan48 ? "32%" : "full"}
              shadow="lg"
              p="6"
              m="2"
              boxShadow={"2xl"}
              rounded={"md"}
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
              textAlign="center"
              overflow={"hidden"}
              mb={isLargerThan48 ? "0" : "4"}
              border="1px solid #b0a388"
            >
              <Icon as={arr.icon} boxSize={14} color="#076467" mb="5" />
              <Text fontSize="2xl">{arr.text}</Text>
            </Flex>

            <Spacer />
          </>
        ))}
      </Flex>
    </VStack>
  );
};

export default Services;
