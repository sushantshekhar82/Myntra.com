import React from 'react'
import { Flex, Grid, GridItem,Select,Text,Button } from '@chakra-ui/react' 
import { Box } from '@chakra-ui/react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useToast } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
const getLocalItems=()=>{
 
  let detail=localStorage.getItem("detail")
  if(detail){
    return JSON.parse(localStorage.getItem("detail"))
  }else{
  return  []
  }
}
function CheckOut() {
    const [name,setName]=useState("");
    const [mobile,setMobile]=useState("");
    const [address,setAddress]=useState("");
    const [state,setState]=useState("");
    const [detail,setDetail]=useState(getLocalItems())
    const toast = useToast();
   const navigate=useNavigate()
    let data={
      name:name,
      mobile:mobile,
      address:address,
      state:state
    }
    const handleSubmit=()=>{
     
      if(name!=="" && mobile!=="" && address!=="" && state!==""){
       
        localStorage.setItem("detail",JSON.stringify(data))
        setDetail(getLocalItems()) 
        toast({
          title: 'Address created',
          
          status: 'success',
          duration: 5000,
          isClosable: true,
        })
       navigate("/payment")
      }else{
        toast({
          title: 'Enter all fields first',
          
          status: 'error',
          duration: 5000,
          isClosable: true,
        })
      }
     

    }
    console.log(detail);
  return (
    <div>
      <Grid templateColumns='70%' justifyContent={"center"} alignItems={"center"}>
  <GridItem w='100%' h='auto'  alignItems={"center"} >
  <Flex justifyContent={"center"}><Text fontWeight={"bold"} color={"black"}><Link to="/cart">BAG</Link></Text>------<Text fontWeight={"bold"} textAlign={"center"} color={"green.500"}><u>Address</u></Text>-----<Text fontWeight={"bold"} color={"black"}>PAYMENT</Text>
  </Flex>
  <Box  display={"grid"} margin={"auto"} justifyContent={"center"} w='60%' p={4} color='Black'>
  <Text fontWeight={"bold"} color={"black"}>Contact Detail</Text>
  <input className='input' type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter your name" ></input>
  <input className='input' type="number" value={mobile} onChange={(e)=>setMobile(e.target.value)} placeholder="Enter your Mobile Number" ></input>
  <Text fontWeight={"bold"} color={"black"}>Address</Text>
  <input className='input' type="text" value={address} onChange={(e)=>setAddress(e.target.value)} placeholder="Enter your Address" ></input>
  <Text fontWeight={"bold"} color={"black"}>State</Text>
  <Select value={state} onChange={(e)=>setState(e.target.value)}>
    <option >Select your state</option>
     <option value={"bihar"}>Bihar</option>
     <option value={"delhi"}>Delhi</option>
     <option  value={"karnataka"}>Karnataka</option>
  </Select>
  <Button className='input' onClick={handleSubmit}  backgroundColor={"#ff3e6c"} color={"white"} marginLeft={"70px"} width={"350px"} >Add Address</Button>
</Box>
  </GridItem>
 
</Grid>
    </div>
  )
}

export default CheckOut
