import React from 'react'
import {Divider, Flex, Grid,GridItem,Stack,Radio,RadioGroup} from "@chakra-ui/react"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Text,
  Checkbox,Img
} from '@chakra-ui/react'
import {ChevronRightIcon} from "@chakra-ui/icons"
import Footer from './Footer'
import { useState } from 'react'
function Men() {
  const [value, setValue] = useState('1')
  return (
    <div>
      <div><Breadcrumb marginLeft={"15px"} spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
  <BreadcrumbItem>
    <BreadcrumbLink href='/'>Home</BreadcrumbLink>
  </BreadcrumbItem>

 

  <BreadcrumbItem isCurrentPage>
    <BreadcrumbLink href='#'><Text as="b">men</Text></BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb></div>

<Divider marginTop={"30px"}/>
   <Grid templateColumns='23% 73%' gap={2}>
  <GridItem w='100%' h='auto'  >
  <Text as="b" marginLeft={"15px"}>FILTERS</Text>
  <Divider />
  
  <div style={{marginLeft:"15px",marginTop:"10px"}}>
    <Text as={"b"}>CATEGORIES</Text><br/>
  <Checkbox size='md' colorScheme='pink' >
    Tshirt
  </Checkbox>
  
  </div>
  <div style={{marginLeft:"15px",marginTop:"2px"}}>
  <Checkbox size='md' colorScheme='pink' >
    Jeans
  </Checkbox>
  
  </div>
  <Divider margin={"5px"}/>
  
  
  <div style={{marginLeft:"15px",marginTop:"10px"}}>
    <Text as={"b"}>BRAND</Text><br/>
  <Checkbox size='md' colorScheme='pink' >
    Roadster
  </Checkbox>
  
  </div>
  <div style={{marginLeft:"15px",marginTop:"2px"}}>
  <Checkbox size='md' colorScheme='pink' >
    Puma
  </Checkbox>
  
  </div>
  <div style={{marginLeft:"15px",marginTop:"2px"}}>
  <Checkbox size='md' colorScheme='pink' >
    WROGN
  </Checkbox>
  
  </div>
  <div style={{marginLeft:"15px",marginTop:"2px"}}>
  <Checkbox size='md' colorScheme='pink' >
    HRX by Hrithik Roshan
  </Checkbox>
  
  </div>
  <div style={{marginLeft:"15px",marginTop:"2px"}}>
  <Checkbox size='md' colorScheme='pink' >
    U.S Polo Assn.
  </Checkbox>
  
  </div>
  <div style={{marginLeft:"15px",marginTop:"2px"}}>
  <Checkbox size='md' colorScheme='pink' >
    Tommy  Hilfiger
  </Checkbox>
  
  </div>
  <div style={{marginLeft:"15px",marginTop:"2px"}}>
  <Checkbox size='md' colorScheme='pink' >
    Huetrap
  </Checkbox>
  
  </div>
  <Divider margin={"5px"}/>
  <div style={{marginLeft:"15px",marginTop:"10px"}}>
    <Text as={"b"}>PRICE</Text><br/>
  <Checkbox size='md' colorScheme='pink' >
    Rs 139 to Rs 5980
  </Checkbox>
  
  </div>
  <div style={{marginLeft:"15px",marginTop:"2px"}}>
  <Checkbox size='md' colorScheme='pink' >
  Rs 139 to Rs 5980
   </Checkbox>
  
  </div>
  <div style={{marginLeft:"15px",marginTop:"2px"}}>
  <Checkbox size='md' colorScheme='pink' >
  Rs 11821 to Rs 17662
   </Checkbox>
  
  </div>
  <div style={{marginLeft:"15px",marginTop:"2px"}}>
  <Checkbox size='md' colorScheme='pink' >
  Rs 17662 to Rs 23503
   </Checkbox>
  
  </div>
  <Divider margin={"5px"}/>
  <div style={{marginLeft:"15px",marginTop:"10px"}}>
    <Text as={"b"}>COLOR</Text><br/>
  <Checkbox size='md' colorScheme='pink' >
  <Flex><svg xmlns="http://www.w3.org/2000/svg" width="18" height="25" viewBox="0 0 24 24" fill="black" stroke="currentColor" stroke-width="0" stroke-linecap="round" stroke-linejoin="round" class="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg>
 Black</Flex>
  </Checkbox>
  
  </div>
  <div style={{marginLeft:"15px",marginTop:"2px"}}>
  <Checkbox size='md' colorScheme='pink' >
  <Flex><svg xmlns="http://www.w3.org/2000/svg" width="18" height="25" viewBox="0 0 24 24" fill="red" stroke="currentColor" stroke-width="0" stroke-linecap="round" stroke-linejoin="round" class="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg>
 Red</Flex>
   </Checkbox>
  
  </div>
  <div style={{marginLeft:"15px",marginTop:"2px"}}>
  <Checkbox size='md' colorScheme='pink' >
  <Flex><svg xmlns="http://www.w3.org/2000/svg" width="18" height="25" viewBox="0 0 24 24" fill="white" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg>
 white</Flex>
   </Checkbox>
  
  </div>
  <div style={{marginLeft:"15px",marginTop:"2px"}}>
  <Checkbox size='md' colorScheme='pink' >
  <Flex><svg xmlns="http://www.w3.org/2000/svg" width="18" height="25" viewBox="0 0 24 24" fill="green" stroke="currentColor" stroke-width="0" stroke-linecap="round" stroke-linejoin="round" class="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg>
 Green</Flex>
   </Checkbox>
  
  </div>
  <div style={{marginLeft:"15px",marginTop:"2px"}}>
  <Checkbox size='md' colorScheme='pink' >
  <Flex><svg xmlns="http://www.w3.org/2000/svg" width="18" height="25" viewBox="0 0 24 24" fill="blue" stroke="currentColor" stroke-width="0" stroke-linecap="round" stroke-linejoin="round" class="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg>
 Blue</Flex>
   </Checkbox>
  
  </div>
  <div style={{marginLeft:"15px",marginTop:"2px"}}>
  <Checkbox size='md' colorScheme='pink' >
  <Flex><svg xmlns="http://www.w3.org/2000/svg" width="18" height="25" viewBox="0 0 24 24" fill="grey" stroke="currentColor" stroke-width="0" stroke-linecap="round" stroke-linejoin="round" class="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg>
 Grey</Flex>
   </Checkbox>
  
  </div>
  <Divider margin={"5px"}/>
  <div style={{marginLeft:"15px",marginTop:"10px"}}>
    <Text as={"b"}>DISCOUNT</Text><br/>
  <RadioGroup onChange={setValue} value={value}>
      <Stack direction='column'>
        <Radio value='1'>10% and above</Radio>
        <Radio value='2'>20% and above</Radio>
        <Radio value='3'>30% and above</Radio>
        <Radio value='4'>40% and above</Radio>
        <Radio value='5'>50% and above</Radio>
       
      </Stack>
    </RadioGroup>
    </div>
  </GridItem>
  <GridItem w='100%' h='auto'  >
    <div>
      <div>
        <Img width={"220px"} height={"300px"} src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2275365/2022/11/22/a3af8a2f-a385-4cb7-bf7b-e34e0925fe0d1669105782439-Roadster-Men-White--Pure-Cotton-T-shirt-7301669105781913-1.jpg"/>
      </div>
      <div>
        <Text as={"b"}>Roadster</Text>
        <Text >Pure Cotton Tshirt</Text>
       <Flex> <Text as={"b"}>Rs 224</Text><Text color={"orange"}>(50% OFF)</Text></Flex>
      </div>
    </div>
  </GridItem>
  
</Grid>
<Footer/>
    </div>
  )
}

export default Men
