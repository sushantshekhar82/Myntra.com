import React from 'react'
import { Flex, Grid, GridItem,Select,Text,Button, Divider, Img } from '@chakra-ui/react' 
import { Link } from 'react-router-dom'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,Box
} from '@chakra-ui/react'
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { useToast } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { useState } from 'react'
import { useContext } from 'react'
import { AppContext } from './AppContextProvider'
function Payment() {
  const [captcha,setCaptcha]=useState("")
  const toast = useToast();
  const navigate=useNavigate()
  const {length,Length}=useContext(AppContext);
  const handleOrder=()=>{
      if(captcha!==""){
        if(captcha==="W68HP"){
          toast({
            title: 'Order placed',
            
            status: 'success',
            duration: 5000,
            isClosable: true,
          })
          navigate("/");
          localStorage.removeItem("cart");
          Length(-1)
        }else{
          toast({
            title: 'otp not match',
            
            status: 'error',
            duration: 3000,
            isClosable: true,
          })
        }
       
        
      }else{
        toast({
          title: 'Enter captcha first',
          
          status: 'error',
          duration: 5000,
          isClosable: true,
        })
      }
  }
  return (
    <div>
  <Grid templateColumns='70%' justifyContent={"center"} alignItems={"center"}>
  <GridItem w='100%' h='auto'  alignItems={"center"} >
  <Flex justifyContent={"center"}><Text fontWeight={"bold"} color={"black"}><Link to="/cart">BAG</Link></Text>------<Text fontWeight={"bold"} color={"black"}><Link to="/checkout">Address</Link></Text>-----<Text fontWeight={"bold"} textAlign={"center"} color={"green.500"}><u>Payment</u></Text>
  </Flex>
  <Accordion   allowMultiple textDecoration={"none"}>
  <AccordionItem>
    <h2>
      <AccordionButton textDecoration={"none"} border={"1px solid wheat"} backgroundColor={"transparent"}>
        <Box as="span"  textAlign='left' >
        <Flex><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19"  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-percent"><line x1="19" y1="5" x2="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle></svg><Text as="b">Bank Offers</Text>  <AccordionIcon /></Flex>
        <UnorderedList>
  <ListItem>5% Unlimited Cashback on Flipkart Axis Credit Card. TCA</ListItem>
 
</UnorderedList>
      
        </Box>
       
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <UnorderedList>
  <ListItem>Get up to Rs 500  cashback on CRED pay UPI</ListItem>
  <ListItem>10% Cashback upto 150 on Freecharge</ListItem>

</UnorderedList>
    </AccordionPanel>
  </AccordionItem>

  
</Accordion>
<Divider margin={"10px"}/>
<Tabs border={"1px solid wheat"} height={"300px"}>
  <TabList>
    <Tab>Cash On Delivery</Tab>
    <Tab>Credit/Debit card</Tab>
    <Tab>Phone Pe / Google Pay / BHIM Upi</Tab>
  </TabList>

  <TabPanels>
    <TabPanel>
     <Text marginBottom={"30px"} > Pay on Delivery(Cash / UPI)</Text>
     <Box border={"1px solid red"} width={"150px"} height={"70px"} margin={"auto"}>
    <Img src="https://miro.medium.com/max/600/1*MHqIWdansPvRMEmUK2KNPw.png" marginTop={"5px"} />
     </Box>
     <Box className='orderotp'>
     <input className='paymentinput' type="text" value={captcha} onChange={(e)=>setCaptcha(e.target.value)}  placeholder="Enter code shown in above image" ></input>
     <Box className='btnpos'>
     <Button className='orderbtn' onClick={handleOrder}   backgroundColor={"#ff3e6c"} color={"white"}  >PLACE ORDER</Button>
     </Box>
     </Box>
    </TabPanel>
    <TabPanel>
      <Img src="https://m.media-amazon.com/images/I/71Tw084DkuL._AC_SL1500_.jpg"/>
    </TabPanel>
    <TabPanel>
    <Img src="https://m.media-amazon.com/images/I/71Tw084DkuL._AC_SL1500_.jpg"/>
    </TabPanel>
  </TabPanels>
</Tabs>
  </GridItem>
 
</Grid>
    </div>
  )
}

export default Payment
