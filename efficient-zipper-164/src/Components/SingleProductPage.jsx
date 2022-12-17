import React from 'react'
import { Divider, Flex, Grid, GridItem, Img } from '@chakra-ui/react'
import { Text,Box } from '@chakra-ui/react'
import { ChevronRightIcon,EmailIcon } from '@chakra-ui/icons'
import { Button, ButtonGroup } from '@chakra-ui/react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
  } from '@chakra-ui/react'
function SingleProductPage() {
    function Bag(){
       return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-bag"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
    }
    function Heart(){
        return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
    }
  return (
    <div>
        <div><Breadcrumb marginLeft={"15px"} spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
  <BreadcrumbItem>
    <BreadcrumbLink href='/'>Home</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink href='/men'>Men</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem isCurrentPage>
    <BreadcrumbLink href='#'><Text as="b">Roadster</Text></BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb></div>

<Divider marginTop={"30px"} marginBottom={"30px"}/>
    <Grid templateColumns='58% 38%' gap={4}>
  <GridItem w='100%' h='auto'  >
  <Grid templateColumns='48% 48%' gap={6}>
  <GridItem w='100%' h='auto'  >
    <Img  height={"auto" } marginLeft={"20px"} src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2275365/2022/11/22/a3af8a2f-a385-4cb7-bf7b-e34e0925fe0d1669105782439-Roadster-Men-White--Pure-Cotton-T-shirt-7301669105781913-1.jpg" alt='myntra'/>
  </GridItem>
  <GridItem w='100%' h='auto'  ><Img  height={"auto" } src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2275365/2022/11/22/a3af8a2f-a385-4cb7-bf7b-e34e0925fe0d1669105782439-Roadster-Men-White--Pure-Cotton-T-shirt-7301669105781913-1.jpg" alt='myntra'/>
 </GridItem>
  
</Grid>
  </GridItem>
  <GridItem w='100%' h='auto'  >
  <Text fontSize='3xl' as="b">Roadster</Text>
  <Text fontSize='2xl' color={"grey"} marginTop={"-5px"}>Men Teal Blue Printed Pure Cotton T-shirt</Text>
  <Box w="10%" p="0" border={"1px solid grey"}> <Flex alignItems={"center"}><Text as="b" margin={"5px"}>4.2</Text> <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="blue" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></Flex> 
    </Box>
    <Divider margin={"5px"} color={"grey"}/>
    <Flex> <Text fontSize='3xl' as={"b"}>Rs 224</Text><Text color={"orange"} marginLeft={"5px"} fontSize='3xl'>(50% OFF)</Text></Flex>
    <Text fontSize='sm' as={"b"} color={"green.300"}>inclusive all text</Text>
    <Flex><Text as={"b"} color={"blackAlpha.800"}>SELECT SIZE</Text><Flex alignItems={"center"}><Text marginLeft={"10px"} as={"b"} fontSize={"sm"}  color={'pink.400'}>SIZE CHART</Text><ChevronRightIcon/></Flex></Flex>
    <Flex marginTop={"20px"}><Button marginTop={"10px"} borderRadius={"50%"} backgroundColor={"white"} color={"black"} border={"1px"} variant='solid'>S</Button>
    <Button marginTop={"10px"} marginLeft={"5px"} borderRadius={"50%"} backgroundColor={"white"} color={"black"} border={"1px"} variant='solid'>M</Button>
    <Button marginTop={"10px"} marginLeft={"5px"} borderRadius={"50%"} backgroundColor={"white"} color={"black"} border={"1px"} variant='solid'>L</Button>
    <Button marginTop={"10px"} marginLeft={"5px"} borderRadius={"50%"} backgroundColor={"white"} color={"black"} border={"1px"} variant='solid'>XL</Button>
    <Button marginTop={"10px"}  marginLeft={"5px"} borderRadius={"50%"} backgroundColor={"white"} color={"black"} border={"1px"} variant='solid'>XXL</Button></Flex>
   <Flex marginTop={"20px"}> <Button leftIcon={<Bag />} backgroundColor={"#ff3e6c"} color={"white"} width={"250px"} height={"60px"} marginTop={"10px"} variant='solid'>
   ADD TO BAG
  </Button>
  <Button leftIcon={<Heart />} backgroundColor={"white"} color={"black"} border={"1px"} width={"200px"} height={"60px"} marginTop={"10px"}marginLeft={"10px"} variant='solid'>
   ADD TO BAG
  </Button>
  </Flex>
  </GridItem>
  
</Grid>
    </div>
  )
}

export default SingleProductPage
