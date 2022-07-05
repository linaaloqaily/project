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


function Appoint() {
   

  return (
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
        <Text fontWeight={600} mb={4} color={"#076467"}>
          تاريخ اليوم: 
        </Text>
        <br/>


        <Stack mt={8} direction={'row'} spacing={4}>
          <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            bg={'#5E5542'}
            color={'white'}
            _hover={{
              bg: '#5E5542',
            }}
            >
            حجز موعد
          </Button>
        </Stack>
      </Box>
    </Center>
  )
}

export default Appoint