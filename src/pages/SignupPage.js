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
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Link as ReachLink } from "react-router-dom";
import { RadioCard } from "../componets/radio-card";
import Navbar from "../componets/Navbar";
const SignupPage = () => {
  const options = ["عميل", "مقاول", "مهندس", "مشرف"];

  const [showPassword, setShowPassword] = useState(false);
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "userType",
    defaultValue: "عميل",
    onChange: console.log,
  });
  const group = getRootProps();

  return (
    <>
      <Navbar/>
      <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={["sm","sm","lg"]} py={12} px={[0,0,6]}>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
          <HStack align={"center"} justify={"center"} {...group}>
              {options.map((value) => {
                const radio = getRadioProps({ value });
                return (
                  <RadioCard key={value} {...radio}>
                    {value}
                  </RadioCard>
                );
              })}
            </HStack>
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
            <FormControl id="password" isRequired>
              <FormLabel>كلمة المرور</FormLabel>
              <InputGroup>
                <Input type={showPassword ? "text" : "password"} />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={"#5E5542"}
                color={"white"}
                _hover ={{
                  bg: "#5E5542",
                }}
              >
                تسجيل
              </Button>
            </Stack>
                <Stack pt={6}>
                <Text align={"center"}>
                    لديك حساب بالفعل؟{" "}
                    <Link as={ReachLink} to="/login" color={"#05E5542"}>
                    تسجيل الدخول
                    </Link>
                </Text>
                </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
    </>
  );
};

export default SignupPage;
