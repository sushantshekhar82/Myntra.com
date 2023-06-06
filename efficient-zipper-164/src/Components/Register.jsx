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
import { postuser } from "../Redux/register/action";

function Register() {
    const [name,setName]=useState("")
  const [email,setEmail]=useState("")
   const [password,setPassword]=useState("")
   const [register,setRegister]=useState(false)
const {loading,message}=useSelector((store)=>store.user)
const dispatch=useDispatch()
  const toast = useToast();
  const { auth, login, authUser, loginUser, UserName } = useContext(AppContext);
  const navigate = useNavigate();
 let postdata=async()=>{
   
 }

 const handleValid=async()=>{
  if(name!=="" && email!=="" && password!==""){
 try {
    dispatch(postuser(name,email,password)).then((res)=>{
       
        if(res.msg=="already registered please login"){
   toast({
    title: "User already registered Please Login" ,

    status: "error",
    duration: 1000,
    isClosable: true,
 });

        }

        if(res.msg=="Registred successfully"){
            toast({
                title: "Registred Successfully" ,
            
                status: "success",
                duration: 1000,
                isClosable: true,
             });
             navigate("/login")  
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
              Register
            </Text>
            <Input
              type={"text"}
              marginTop={"-35px"}
              width="90%"
              marginLeft={"15px"}
              placeholder="Enter Your Name"
              size="lg"
              required
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              type={"text"}
              marginTop={"-8px"}
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
              marginTop={"-10px"}
              width="90%"
              marginLeft={"15px"}
              placeholder="Enter Password"
              size="lg"
              
              onChange={(e) =>setPassword(e.target.value)}
            />
            <Flex width={"100%"}>
              {"    "}
              <Text fontSize={"12px"} color={"grey"} marginLeft={"2px"}>
                By Continuing, I agree to the
              </Text>
              <Text fontSize={"12px"} color={"#ff3e6c"} fontWeight={"bold"}>
                Terms of use & privacy policy.
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
              Register
            </Button>
          
          </Box>
        </GridItem>
      </Grid>
    </div>
  );
}

export default Register;
