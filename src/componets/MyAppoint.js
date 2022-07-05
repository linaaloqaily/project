import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Center,
  } from '@chakra-ui/react'
function MyAppoint() {
  return (
    // <Center >
        <TableContainer height={"100vh"} p={"10rem"} >
  <Table border="2px" borderColor="#5E5542" variant='striped' colorScheme="gray">
    <Thead>
      <Tr>
      <Th>اسم مقدم الخدمة</Th>
        <Th>التاريخ</Th>
        <Th >الوقت</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>inches</Td>
        <Td>millimetres (mm)</Td>
        <Td>25.4</Td>
      </Tr>
      <Tr>
        <Td>feet</Td>
        <Td>centimetres (cm)</Td>
        <Td >30.48</Td>
      </Tr>
    </Tbody>
  </Table>
</TableContainer>
    // </Center>
  )
}

export default MyAppoint