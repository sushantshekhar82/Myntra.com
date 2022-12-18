import React from 'react'
import { Flex, Grid, GridItem,Select,Text,Button } from '@chakra-ui/react' 
import { Box } from '@chakra-ui/react'
import { useState } from 'react'
function CheckOut() {
    const [name,setName]=useState("");
    const [mobile,setMobile]=useState("");
    const [address,setAddress]=useState("");
  return (
    <div>
      <Grid templateColumns='70%' justifyContent={"center"} alignItems={"center"}>
  <GridItem w='100%' h='auto'  alignItems={"center"} >
  <Flex justifyContent={"center"}><Text fontWeight={"bold"} color={"black"}>BAG</Text>------<Text fontWeight={"bold"} textAlign={"center"} color={"green.500"}><u>Address</u></Text>-----<Text fontWeight={"bold"} color={"black"}>PAYMENT</Text>
  </Flex>
  <Box  display={"grid"} margin={"auto"} justifyContent={"center"} w='60%' p={4} color='Black'>
  <Text fontWeight={"bold"} color={"black"}>Contact Detail</Text>
  <input className='input' type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter your name" ></input>
  <input className='input' type="number" value={mobile} onChange={(e)=>setMobile(e.target.value)} placeholder="Enter your Mobile Number" ></input>
  <Text fontWeight={"bold"} color={"black"}>Address</Text>
  <input className='input' type="text" value={address} onChange={(e)=>setAddress(e.target.value)} placeholder="Enter your Address" ></input>
  <Text fontWeight={"bold"} color={"black"}>State</Text>
  <Select>
    <option>Select your state</option>
     <option>Bihar</option>
     <option>Delhi</option>
     <option>Karnataka</option>
  </Select>
  <Button className='input'  backgroundColor={"#ff3e6c"} color={"white"} marginLeft={"70px"} width={"350px"} >Place Order</Button>
</Box>
  </GridItem>
 
</Grid>
    </div>
  )
}

export default CheckOut
