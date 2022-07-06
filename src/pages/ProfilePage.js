import React from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  useRadioGroup,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link as ReachLink } from "react-router-dom";
import Avatar from "react-avatar";
import Navbar from "../componets/Navbar";

const Profile = () => {
  return (
    <>
    <Navbar/>
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Flex
            alignItems="center"
            minWidth="max-content"
            justifyContent="center"
          >
            <Box mt="-4rem" mb="2rem">
              <Avatar name="Anhar" color="#5E5542" size="70" round={true} />
            </Box>
          </Flex>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>الأسم الاول</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>الأسم الأخير</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>البريد الألكتروني</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="mobile" isRequired>
              <FormLabel>رقم الجوال</FormLabel>
              <Input type="number" />
            </FormControl>

            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={"#5E5542"}
                color={"white"}
                _hover={{
                  bg: "#5E5542",
                }}
              >
                   حفظ التعديلات
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
    </>

  );
};

export default Profile;