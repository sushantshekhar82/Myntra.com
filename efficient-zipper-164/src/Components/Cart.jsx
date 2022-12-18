import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { AppContext } from './AppContextProvider'
import EmptyCartPage from './EmptyCartPage'
import { Button, Divider, Grid, GridItem ,Img} from '@chakra-ui/react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,Box,Text,Flex
} from '@chakra-ui/react'
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react'

import { Select } from '@chakra-ui/react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const getLocalItems=()=>{
 
  let cart=localStorage.getItem("cart")
  if(cart){
    return JSON.parse(localStorage.getItem("cart"))
  }else{
  return  []
  }
}
function Cart() {
 
  const [item,setItem]=useState(getLocalItems())
  const [finalPrice,setFinalPrice]=useState(0)
  const [discount,setDiscount]=useState(0)
  const [price,setPrice]=useState(0)
  const {length,Length}=useContext(AppContext)
  console.log(item)
  const handleRemove=(id)=>{
   let items=JSON.parse(localStorage.getItem("cart"));
   items=items.filter((el)=>el.id !==id);
   localStorage.setItem("cart",JSON.stringify(items))
  setItem(getLocalItems()) 
  Length(-item.length);
  if (items.length === 0) {
    localStorage.removeItem("item");
  }
  }
  const [totalPrice,setTotalPrice]=useState(0)
  useEffect(()=>{
    const total = item.reduce((prev, cur) => (cur.price * 1) + prev, 0);
    setTotalPrice(total)
    setFinalPrice(price)
  },[length])
  const handleDiscount=()=>{
    const cur=totalPrice-200
    setPrice(cur)
     setFinalPrice(price)
    setDiscount(200)
  }

  const handleCheckout=()=>{

  }
  console.log(totalPrice,finalPrice,price);
  return (
    <div>
     {length===0||null?
     <EmptyCartPage/>:
     <Grid width={"80%"} margin={"auto"} templateColumns='60% 40%' gap={6}>
     
     <GridItem w='100%' h='auto' marginTop={"30px"} >
     <Accordion   allowMultiple textDecoration={"none"}>
  <AccordionItem>
    <h2>
      <AccordionButton textDecoration={"none"} border={"1px solid wheat"} backgroundColor={"transparent"}>
        <Box as="span"  textAlign='left' >
        <Flex><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19"  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-percent"><line x1="19" y1="5" x2="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle></svg><Text as="b"> Available Offers</Text>  <AccordionIcon /></Flex>
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
{
  item?.map((el)=>(
<div className='cartgrid'>
 <div className='image'><Img src={el.imageLink} /></div>
 <div>
  <Text fontSize={"sm"} marginTop={"5px"} as={"b"}>{el.brand}</Text>
  <Text marginTop={"5px"} fontSize={"sm"}>{el.productName}</Text>
  <Flex><Text  fontSize={"sm"} as={"b"}>Rs {el.price}</Text><Text marginLeft={"5px"} fontSize={"sm"} as={"b"} color={"orange"} >{el.discount}% OFF</Text></Flex>
 <Flex> <Select marginLeft={"5px"} marginTop={"10px"} width={"70px"} height={"25px"}>
  <option value='option1'>M</option>
  <option value='option2'>L</option>
  <option value='option3'>S</option>
</Select>
<Select marginLeft={"5px"} marginTop={"10px"} width={"90px"} height={"25px"}>
  <option value='option1'>Qty 1</option>
  <option value='option2'>Qty 2</option>
  <option value='option3'>Qty 3</option>
</Select>
</Flex>
  <Button marginLeft={"250px"} marginTop={"30px"} colorScheme='red' onClick={()=>handleRemove(el.id)}>Remove</Button>
 </div>
</div>

  ))
}

     </GridItem>
     <GridItem w='100%' h='10'  >
      
      <div className='cartprice'>
         <div>
          <Text color={"Red"} as={"b"} >Apply Coupons</Text><br/>
          <Button border={"3px dashed rgb(202, 5, 120)"} marginTop={"10px"} disabled={discount===200} onClick={()=>handleDiscount}>MYNTRA200</Button><br/>
          <Text color={"black"} as={"b"}>Save Rs202</Text><br/>
          <Text color={"black"} as={"b"}>Rs200  off on Minimum  purchase of Rs599</Text>
          
         </div>
         <div><Img src='https://pbs.twimg.com/media/Ejj8fKYUcAABx2m.jpg' height={"180px"} width={"100%"} alt="myntra gift"/></div>
         <div>
          <Divider margin={"20px"}/>
         <Text color={"Red"} as={"b"} >Price Details</Text><br/>
         <div style={{display:"flex",justifyContent:"space-between",fontWeight:"bold"}}>
             <div>Total MRP</div>
             <div>Rs {totalPrice}</div>
         </div>
         <div style={{display:"flex",justifyContent:"space-between",fontWeight:"bold"}}>
             <div>Myntra Discount</div>
             <div><Text color={"green.400"}>-{discount}</Text></div>
         </div>
         <div style={{display:"flex",justifyContent:"space-between",fontWeight:"bold"}}>
             <div>Convenience Fee</div>
             <div><Flex><del>99</del><Text color={"green.500"} marginLeft={"5px"}>Free</Text></Flex></div>
         </div>
         <Divider margin={"20px"}/>
         <div style={{display:"flex",justifyContent:"space-between",fontWeight:"bold"}}>
             <div>Total Amount</div>
             <div><Text color={"green.500"} marginLeft={"5px"}>Rs {discount===200?  finalPrice: totalPrice}</Text></div>
         </div>
         </div>
       <Link to="/checkout"> <Button  backgroundColor={"#ff3e6c"} color={"white"} marginLeft={"70px"} width={"300px"} >Place Order</Button></Link>
      </div>
     </GridItem>
  
   </Grid>
     }
    </div>
  )
}

export default Cart
