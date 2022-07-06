import React from 'react'
import {
    Heading,
    Box,
    Center,
    Text,
    Stack,
    Button,
    useColorModeValue,
  } from '@chakra-ui/react';
  import Divder from '../componets/Divder';
import Navbar from './Navbar';


const Appoint = () => {
  const array = [
    {
      id: 1,
      date: "6 July",
      time: "10-10:30"
    },
    {
      id: 2,
      date: "7 July",
      time: "10:30-11"
    },
    {
      id: 3,
      date: "8 July",
      time: "11:30-12"
    },
  ];

  return (
    <>
    <Navbar/> 
    <Center height={"100vh"} py={6}>

      <Box
        maxW={'320px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'lg'}
        p={6}
        textAlign={'center'}>

        <Heading fontSize={'2xl'} fontFamily={'body'} color={'#5E5542'}
>
          احجز موعد
        </Heading>
        <br/>
  
        <Text color="#076467" mb="1rem"> <strong>اختر اليوم:</strong> </Text>

        {array.map((arr) => (

          <Button
            m={"1px"}
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            color
            _focus={{
              bg: 'gray.200',
            }}>
          <Text color="#076467" fontSize="xl">{arr.date}</Text>
          </Button>
          
          ))}

          <Divder/>
          <Text color="#076467" mb="1rem"> <strong>اختر الوقت:</strong> </Text>

          {array.map((arr) => (

          <Button
            m={"1px"}
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            color
            _focus={{
              bg: 'gray.200',
            }}>
          <Text color="#076467" fontSize="xl">{arr.time}</Text>
          </Button>

          ))}




        <Box>
        <Stack mt={8} direction={'row'} spacing={4}>
          <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            bg={'#076467'}
            color={'white'}
            _hover={{
              bg: '#076467',
            }}
            >
            حجز موعد
          </Button>
        </Stack>
      </Box>
      </Box>
    </Center>
    </>
  )
}

export default Appoint