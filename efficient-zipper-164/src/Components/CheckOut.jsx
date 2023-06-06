import React, { useContext, useEffect } from 'react'
import { Flex, Grid, GridItem,Select,Text,Button, Spinner } from '@chakra-ui/react' 
import { Box } from '@chakra-ui/react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useToast } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addAddress, deleteAddress, getAddress } from '../Redux/address/action'
import { AppContext } from './AppContextProvider'
const getLocalItems=()=>{
 
  let detail=localStorage.getItem("detail")
  if(detail){
    return JSON.parse(localStorage.getItem("detail"))
  }else{
  return  []
  }
}
function CheckOut() {
  const{loading,useraddressdata}=useSelector((store)=>store.address)
  const {length,Length,userid}=useContext(AppContext)
    const [name,setName]=useState("");
    const [mobile,setMobile]=useState("");
    const [address,setAddress]=useState("");
    const [state,setState]=useState("");
    const [count,setCount]=useState(0)
    const [detail,setDetail]=useState(getLocalItems())
    const toast = useToast();
    const [addressdata,setAddressData]=useState(useraddressdata)
   
   const navigate=useNavigate()
   const dispatch=useDispatch()
   useEffect(()=>{
   
    dispatch(getAddress(userid))
    setAddressData(useraddressdata)
   },[])
   useEffect(()=>{
   
    dispatch(getAddress(userid))
    setAddressData(useraddressdata)
   },[count])
    const handleSubmit=()=>{
     
      if(name!=="" && mobile!=="" && address!=="" && state!==""){
        let data={
          name:name,
          mobile:mobile,
          address:address,
          state:state
        }
       dispatch(addAddress(data))
     
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
    if(loading){
      return <img style={{display:"flex",alignItems:"center",justifyContent:"center",margin:"auto"}} width="300px" height="300px"  src="https://www.appcoda.com/learnswiftui/images/animation/swiftui-animation-4.gif" alt="progress"/>
  
    }
   
  return (
    <div>
    {useraddressdata===undefined||useraddressdata.length===0? 
     <div>
     <Grid templateColumns='70%' justifyContent={"center"} alignItems={"center"}>
 <GridItem   alignItems={"center"} >
 <Flex justifyContent={"center"}><Text fontWeight={"bold"} color={"black"}><Link to="/cart">BAG</Link></Text>------<Text fontWeight={"bold"} textAlign={"center"} color={"green.500"}><u>Address</u></Text>-----<Text fontWeight={"bold"} color={"black"}>PAYMENT</Text>
 </Flex>
 <Box  className='address'>
 <Text fontWeight={"bold"} color={"black"}>Contact Detail</Text>
 <input className='input' type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter your name" ></input>
 <Text fontWeight={"bold"} color={"black"}>Mobile</Text>
 <input className='input' type="number" value={mobile} onChange={(e)=>setMobile(e.target.value)} placeholder="Enter your Mobile Number" ></input>
 <Text fontWeight={"bold"} color={"black"}>Address</Text>
 <input className='input' type="text" value={address} onChange={(e)=>setAddress(e.target.value)} placeholder="Enter your Address" ></input>
 <Text fontWeight={"bold"} color={"black"}>State</Text>
 <select className='input'  value={state} onChange={(e)=>setState(e.target.value)}>
   <option >Select your state</option>
    <option value={"bihar"}>Bihar</option>
    <option value={"delhi"}>Delhi</option>
    <option  value={"karnataka"}>Karnataka</option>
 </select>
 <Button   onClick={handleSubmit}  backgroundColor={"#ff3e6c"} color={"white"}  >Add Address</Button>
</Box>
 </GridItem>

</Grid>
   </div>
    :
    <div>
    <Grid templateColumns='70%' justifyContent={"center"} alignItems={"center"}>
<GridItem   alignItems={"center"} >
<Flex justifyContent={"center"}><Text fontWeight={"bold"} color={"black"}><Link to="/cart">BAG</Link></Text>------<Text fontWeight={"bold"} textAlign={"center"} color={"green.500"}><u>Address</u></Text>-----<Text fontWeight={"bold"} color={"black"}>PAYMENT</Text>
</Flex>
<Box  className='address'>
{useraddressdata.map(el=>(
  <div key={el._id} style={{border:"1px solid purple",padding:"5px",margin:"5px", borderRadius:"10px"}}>
    <Text fontSize={'3xl'} fontWeight={'bold'}>{el.name}</Text>
    <Text fontSize={'2xm'} fontWeight={'bold'}>{el.mobile}</Text>
    <Text fontSize={'2xm'} fontWeight={'bold'}>{el.address}</Text>
    <Text fontSize={'2xm'} fontWeight={'bold'}>{el.state}</Text>
    <Flex justifyContent={'space-around'}>
      {/* <Button backgroundColor={'skyblue'} color={'white'}>Edit</Button>
      <Button backgroundColor={'red.500'} color={'white'} onClick={()=>{
        dispatch(deleteAddress(el._id))
       setCount(count=>count+1)
        }}>Remove</Button> */}
    </Flex>
    </div>
 
)
  
  )}
<Button onClick={()=>navigate('/payment')}     backgroundColor={"#ff3e6c"} color={"white"}  >Proceed to Payment</Button>
</Box>
</GridItem>

</Grid>
  </div>
    
  }
  </div>
  )
}

export default CheckOut
