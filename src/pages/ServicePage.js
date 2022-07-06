import React from 'react'
import {
  Flex,
  Spacer,
  ButtonGroup,
  Button,
  Text,
  useMediaQuery,
  Icon,
  VStack,
  Heading,
} from "@chakra-ui/react";
import {
  FaUserTie,
  FaStar
} from "react-icons/fa";
import Divder from '../componets/Divder';

const ServicePage = () =>  {
    const [isLargerThan48] = useMediaQuery("(min-width: 48em)");

  const array = [
    {
      id: 1,
      text: " محمد علي",
      phoneNumber: "055555678",
      email: "M@M.com",
      address: "Ryiadh-King Fahad Road",
      icon: FaUserTie,
    },
    {
      id: 2,
      text: "صالح أحمد",
      phoneNumber: "055556733",
      email: "S@S.com",
      address: "Ryiadh-King Fahad Road",
      icon: FaUserTie,

    },
    {
      id: 3,
      text: "سارة محمد",
      phoneNumber: "055565221",
      email: "Sara@S.com",
      address: "Qassim-King Fahad Road",
      icon: FaUserTie,

    },
    {
      id: 4,
      text: "أشواق فهد",
      phoneNumber: "055599083",
      email: "A@A.com",
      address: "Jeddah-King Fahad Road",
      icon: FaUserTie,

    },
  ];
  return (
    <VStack id="app-services">
      <VStack spacing={4} align="center">
        <Heading as="h1" color={"#5E5542"} mt="2rem" mb="1rem" >
            مستـعدين لخـدمتك
        </Heading>
      </VStack>
      <Flex
        minH="75vh"
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
              height="500px"
              bg="#FFFEFF"
              width={isLargerThan48 ? "32%" : "full"}
              shadow="lg"
              p="6"
              m="3"
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
              <Text mb="3" color="#5E5542" fontSize="2xl"><strong>{arr.text}</strong></Text>
              <Text color="#5E5542" fontSize="xl">رقم الجوال: {arr.phoneNumber}</Text>
              <Text color="#5E5542" fontSize="xl">البريد الإلكتروني: {arr.email}</Text>
              <Text color="#5E5542" fontSize="xl">الموقع: {arr.address}</Text>

                <ButtonGroup >
                    <Button
                        mb="5" 
                        mt="2rem" 
                        as={"a"}
                        href={"/details"}
                        loadingText="Submitting"
                        size="lg"
                        bg={"#076467"}
                        color={"white"}
                        _hover={{
                        bg: "#076467",
                        }}
                    >
                        مشاريعي  
                    </Button>
                    <Button  
                        mb="5" 
                        mt="2rem"
                        as={"a"} 
                        href="/appointment"
                        loadingText="Submitting"
                        size="lg"
                        bg={"#076467"}
                        color={"white"}
                        _hover={{
                        bg: "#076467",
                        }}
                    >
                        حجز خدمة 
                    </Button>
                </ButtonGroup>
            </Flex>

            {/* <Spacer /> */}
          </>
        ))}
      </Flex>
    </VStack>
  )
}

export default ServicePage