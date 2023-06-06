import React, { useEffect } from "react";
import {
  Flex,
  Grid,
  GridItem,
  Select,
  Text,
  Button,
  Img,
} from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import "../project.css";
import { Input } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useContext } from "react";
import { AppContext } from "./AppContextProvider";
import { useDispatch, useSelector } from "react-redux";
import { loginuser } from "../Redux/login/action";
import { getCart } from "../Redux/cart/action";

function Login() {
  const [email,setEmail]=useState("")
   const [password,setPassword]=useState("")
   
const {loading,message}=useSelector((store)=>store.loginUser)
const dispatch=useDispatch()
  const toast = useToast();
  const { auth, login, authUser, loginUser, UserName,userid } = useContext(AppContext);
  const navigate = useNavigate();
 let postdata=async()=>{
   
 }

 const handleValid=async()=>{
  if(email!=="" && password!==""){
 try {
  
    dispatch(loginuser(email,password)).then((res)=>{
      
        if(res.msg=="Login successful"){
   toast({
    title: "Login successful" ,

    status: "success",
    duration: 1000,
    isClosable: true,
 });
 localStorage.setItem("token",res.token)
 dispatch(getCart(userid))
   navigate("/") 
window.location.reload()
 

        }
        if(res.msg=="user not found Register first"){
          toast({
            title: "No user found , Register first" ,
        
            status: "error",
            duration: 1000,
            isClosable: true,
         });
        }
        if(res.msg=="Wrong credential"){
          toast({
            title: "Check your Password" ,
        
            status: "error",
            duration: 1000,
            isClosable: true,
         });
        }

        
    })
   


  
 } catch (error) {
    toast({
        title: error.message ,
    
        status: "error",
        duration: 1000,
        isClosable: true,
     });
 }finally{
    
 }
    
  
       
    
   
   
   
  }else{
    toast({
        title: "Enter all fields ",

        status: "error",
        duration: 2000,
        isClosable: true,
      });
  }
 }
 
  return (
    <div>
      <Grid
        justifyContent={"center"}
        alignItems={"center"}
        backgroundColor="rgb(207, 204, 198)"
        height={"87vh"}
        className="responsive"
      >
        <GridItem
          w="100%"
          h="auto"
          alignItems={"center"}
          border={"1px solid wheat"}
          marginTop={"25px"}
          backgroundColor={"white"}
        >
          <Img
            width={"400px"}
            margin={"auto"}
            src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2022/9/6/98b25e23-649a-40e2-8d86-f9b97f441c791662403123928-offer-banner-300-600x240-code-_-MYNTRA200.jpg"
            alt="login banner"
          />
          <Box
            display={"grid"}
            margin={"auto"}
            justifyContent={"center"}
            w="60%"
            height={"300px"}
            color="Black"
          >
            <Text
              margin={"25px"}
              fontWeight={"bold"}
              color={"grey"}
              fontSize="22px"
            >
              Login
            </Text>
            <Input
              type={"text"}
              marginTop={"-40px"}
              width="90%"
              marginLeft={"15px"}
              placeholder="Enter valid Email"
              size="lg"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type={"password"}
              pattern=".{10,}"
              maxLength={"10"}
              marginTop={"-20px"}
              width="90%"
              marginLeft={"15px"}
              placeholder="Enter Password"
              size="lg"
              
              onChange={(e) =>setPassword(e.target.value)}
            />
            <Flex width={"100%"}  justifyContent={"center"} alignItems={"center"} gap={"5px"}>
              {"    "}
              <Text fontSize={"15px"} color={"grey"} marginLeft={"2px"}>
                New To Myntra{" "}
              </Text>
              <Text fontSize={"17px"} color={"#ff3e6c"} fontWeight={"bold"}>
                <Link to="/register">Register here</Link>
              </Text>
            </Flex>

            <Button
              className="input1"
               onClick={handleValid}
              backgroundColor={"#ff3e6c"}
              color={"white"}
              width={"320px"}
              disabled={loading}
            >
             Login
            </Button>
          
          </Box>
        </GridItem>
      </Grid>
    </div>
  );
}

export default Login;
