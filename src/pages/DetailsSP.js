import React from 'react'
import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
  } from '@chakra-ui/react';
import Comments from '../componets/Comments';

  
const DetailsSP = () => {

    const array = [
        {
          id: 1,
          text: "فلة تحدي",
          details: "The project board is an exclusive resource for contract work. It'sperfect for freelancers, agencies, and moonlighters." ,
          img: "https://www.ubm-development.com/magazin/wp-content/uploads/2020/03/kl-main-building-d-Kopie.jpg"
        },
        {
            id: 2,
            text: "فلة تحدي",
            details: "The project board is an exclusive resource for contract work. It'sperfect for freelancers, agencies, and moonlighters." ,
            img: "https://www.ubm-development.com/magazin/wp-content/uploads/2020/03/kl-main-building-d-Kopie.jpg"
          },
        {
        id: 3,
        text: "فلة تحدي",
        details: "The project board is an exclusive resource for contract work. It'sperfect for freelancers, agencies, and moonlighters." ,
        img: "https://www.ubm-development.com/magazin/wp-content/uploads/2020/03/kl-main-building-d-Kopie.jpg"
        },
        
      ];
  return (
    <>
   
    <Stack m={"4rem"} minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        
        <Flex maxH={'40vh'} flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://www.ubm-development.com/magazin/wp-content/uploads/2020/03/kl-main-building-d-Kopie.jpg'
          }
        />
      </Flex>
      <Flex maxH={'40vh'} p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'auto',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: '#076467',
                zIndex: -1,
              }}>
              Freelance
            </Text>
            <br />{' '}
            <Text color={'#076467'} as={'span'}>
              Design Projects
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'black'}>
            <strong>
                The project board is an exclusive resource for contract work. It's
                perfect for freelancers, agencies, and moonlighters.
            </strong>
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>         
          </Stack>
        </Stack>
      </Flex>


      <Flex maxH={'40vh'} flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://usernameproperties.com/blog/wp-content/uploads/2021/12/New-Project-1-1024x576.webp'
          }
        />
      </Flex>
      <Flex maxH={'40vh'} p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'auto',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: '#076467',
                zIndex: -1,
              }}>
              Freelance
            </Text>
            <br />{' '}
            <Text color={'#076467'} as={'span'}>
              Design Projects
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'black'}>
            <strong>
                The project board is an exclusive resource for contract work. It's
                perfect for freelancers, agencies, and moonlighters.
            </strong>
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>         
          </Stack>
        </Stack>
      </Flex>
    </Stack>
    {/* <Comments/> */}
    </>
    )
}

export default DetailsSP