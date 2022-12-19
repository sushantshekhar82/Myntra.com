import React from 'react'
import { Flex, Grid, GridItem,Select,Text,Button, Img } from '@chakra-ui/react' 
import { Box } from '@chakra-ui/react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useToast } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import "../project.css";
import { Input } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
import { useContext } from 'react'
import { AppContext } from './AppContextProvider'
 
function Login() {
    const [mobile,setMobile]=useState("")
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [otp1,setOtp1]=useState("")
    const [otp2,setOtp2]=useState("")
    const [otp3,setOtp3]=useState("")
    const [otp4,setOtp4]=useState("")
    const toast = useToast();
    const {auth,login,authUser,loginUser}=useContext(AppContext)
    const navigate=useNavigate()
    console.log(otp1,otp2,otp3,otp4);
 const handleOtp=()=>{
    if(mobile=="8298937625"){
        if(otp1==1 && otp2==2 && otp3==3 && otp4==4){
            toast({
                title: 'Login successful',
                
                status: 'success',
                duration: 5000,
                isClosable: true,
              })
               login(true)
              navigate("/");
        }
    }
    
    if(otp1==1 && otp2==2 && otp3==3 && otp4==4){
        toast({
            title: 'Login successful',
            
            status: 'success',
            duration: 5000,
            isClosable: true,
          })
          loginUser(true)
          navigate("/");
    }
   else{
        toast({
            title: 'Check OTP ',
            
            status: 'error',
            duration: 5000,
            isClosable: true,
          }) 
    }
 }
  return (
    <div >
      <Grid templateColumns='30%' justifyContent={"center"} alignItems={"center"} backgroundColor="rgb(207, 204, 198)" height={"87vh"}>
  <GridItem w='100%' h='auto'  alignItems={"center"} border={"1px solid wheat"} marginTop={"25px"} backgroundColor={"white"}>
 <Img width={"400px"} margin={"auto"} src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2022/9/6/98b25e23-649a-40e2-8d86-f9b97f441c791662403123928-offer-banner-300-600x240-code-_-MYNTRA200.jpg" alt="login banner"/>
  <Box  display={"grid"} margin={"auto"} justifyContent={"center"} w='60%' height={"300px"} color='Black'>
  <Text margin={"25px"} fontWeight={"bold"} color={"grey"} fontSize="22px">Login or Signup</Text>
  <Input type={"number"}  maxLength={"10"} marginTop={"-50px"} width="400px" marginLeft={"10px"} placeholder='+91 | Mobile Number' size='lg' onChange={(e)=>setMobile(e.target.value)} />
  <Flex marginLeft={"10px"}> <Text fontSize={"sm"} color={"grey"}>By Continuing, I agree to the</Text><Text fontSize={"sm"} color={"#ff3e6c"} fontWeight={"bold"}>Terms of use & privacy policy.</Text></Flex>

  <Button className='input1'  onClick={onOpen}  backgroundColor={"#ff3e6c"} color={"white"} marginLeft={"40px"} width={"350px"} >CONTINUE</Button>
  <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader> Verify With OTP</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          Sent to<Text as={'b'}> {mobile}</Text>
          <Flex gap={"10"}><Input maxLength={"1"} onChange={(e)=>setOtp1(e.target.value)} placeholder="1"></Input><Input maxLength={"1"} onChange={(e)=>setOtp2(e.target.value)} placeholder="2"></Input><Input maxLength={"1"} onChange={(e)=>setOtp3(e.target.value)} placeholder="3"></Input><Input maxLength={"1"} onChange={(e)=>setOtp4(e.target.value)} placeholder="4"></Input></Flex>
          <Text fontSize={"sm"} as={'b'} color={"#ff3e6c"}>Resend OTP</Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button onClick={handleOtp} backgroundColor={'#ff3e6c'} color="white">LOGIN</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
</Box>
  </GridItem>
 
</Grid>
    </div>
  )
}

export default Login
