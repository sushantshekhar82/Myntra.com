import React from 'react'
import { Divider, Flex, Grid, GridItem, Img, useSlider } from '@chakra-ui/react'
import { Text,Box } from '@chakra-ui/react'
import { ChevronRightIcon} from '@chakra-ui/icons'
import { Button} from '@chakra-ui/react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
  } from '@chakra-ui/react';
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Cart from './Cart'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from './AppContextProvider'
import { useToast } from '@chakra-ui/react'
import Footer from './Footer'
import FooterRes from './FooterRes'
import {useDispatch,useSelector} from 'react-redux'
import { addCart, getCart } from '../Redux/cart/action'
const getLocalItems=()=>{
 
  let cart=localStorage.getItem("cart")
  if(cart){
    return JSON.parse(localStorage.getItem("cart"))
  }else{
  return  []
  }
}

const url="https://strange-crab-getup.cyclic.app/Product"
function SingleProductPage() {
  const toast = useToast();
   const {length,Length,userid}=useContext(AppContext)
   const {loading,cart,totallength}=useSelector((store)=>store.cart)
    const [data,setData]=useState([])
    const [duplicate,setDuplicate]=useState()
    const [count,setCount]=useState(0)
    const param=useParams()
   
  const [item,setItem]=useState(getLocalItems())
  const [cartdata,setCartdata]=useState([])
  const [size,setSize]=useState("")
  const dispatch=useDispatch()
    const getData=async(id)=>{
        //setLoading(true)
      let res=await fetch(`${url}/${id}`);
        let data=await res.json();
        setData(data);
     // setLoading(false)
     
    }
    useEffect(()=>{
      getData(param.id)
      
    },[param.id])
    useEffect(()=>{
      console.log("before",cart)
    dispatch(getCart(userid))
    console.log("after",cart)
    },[count])
// useEffect(()=>{
//   let localcart=JSON.parse( localStorage.getItem("cart"))
//   if(localcart){
//     setCartdata(localcart)
//   }
// },[])
//     useEffect(()=>{

//       localStorage.setItem("cart",JSON.stringify(item))
    
//     },[item])

    if(loading){
        return <img style={{display:"flex",alignItems:"center",justifyContent:"center",margin:"auto"}} width="300px" height="300px"  src="https://www.appcoda.com/learnswiftui/images/animation/swiftui-animation-4.gif" alt="progress"/>
      }
   
    function Bag(){
       return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-bag"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
    }
    function Heart(){
        return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
    }

  const handleCart=()=>{
 let token=localStorage.getItem('token')
 var duplicate=cart.filter((el)=>el._id===data._id);
 if(token){
  if(size==""){
    toast({
      title: 'Select Size First',
      
      status: 'warning',
      duration: 2000, 
      isClosable: true,
    });
  }else{
   
    console.log(duplicate)
    if(duplicate.length>0){
      toast({
        title: 'Item already in Cart',
        
        status: 'warning',
        duration: 2000,
        isClosable: true,
      });
    }else {
      dispatch(addCart({...data,size,quantity:1}))
      setCount(count=>count+1)
      toast({
        title: 'Added to cart',
        
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
    }
   
 }
  
 
    
  
   

  }else{
    toast({
      title: 'Login First',
      
      status: 'warning',
      duration: 2000, 
      isClosable: true,
    });
  }


  
  // console.log(data)
  //  setDuplicate(cartdata.find(el => el._id == data._id))
  //  console.log("duplicate",duplicate)
  //   if (duplicate) {
  //     alert('Item already present');
  //   }else{

  //     setItem([...item,data])
  //     Length(item.length);
      
  //     toast({
  //       title: 'Item added',
        
  //       status: 'success',
  //       duration: 5000,
  //       isClosable: true,
  //     });
   // }
   
  }
//   const addToCart = (newProduct) => {
//   const prevProduct = cart[newProduct._id];
//   const prevQuatity = prevProduct.quantity || 0;
//   setCart((prev) => ({
//     ...prev,
//     [newProduct.Id]: {
//       ...newProduct,
//       quantity: prevQuatity + 1,
//     },
//   }));
// };

console.log("totlalllll",totallength)
  return (
    <div>
        <div><Breadcrumb marginLeft={"15px"} spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
  <BreadcrumbItem>
  <Link to="/">Home</Link>
  </BreadcrumbItem>

  <BreadcrumbItem>
  <Link to="/men">Men</Link>
  </BreadcrumbItem>

  <BreadcrumbItem isCurrentPage>
    <BreadcrumbLink ><Text as="b">{data.brand}</Text></BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb></div>

<Divider marginTop={"30px"} marginBottom={"30px"}/>
    <Box className='singleproduct'>
  <GridItem   >
  <Grid className='singleinner'>
  <GridItem   >
    <Img  height={"auto" } marginLeft={"10px"} src={data.imageLink} alt='myntra'/>
  </GridItem>
  <GridItem display={{ base: "none", lg: "block" }} ><Img  height={"auto" } src={data.imageLink} alt='myntra'/>
 </GridItem>
  
</Grid>
  </GridItem>
  <GridItem   >
  <Text fontSize='3xl' as="b">{data.brand}</Text>
  <Text fontSize='2xl' color={"grey"} marginTop={"-5px"}>{data.productName}</Text>
  <Box w="10%" p="0" border={"1px solid grey"}> <Flex alignItems={"center"}><Text as="b" margin={"5px"}>{data.rating}</Text> <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="blue" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></Flex> 
    </Box>
    <Divider margin={"5px"} color={"grey"}/>
    <Flex> <Text fontSize='3xl' as={"b"}>Rs {data.price}</Text><Text color={"orange"} marginLeft={"5px"} fontSize='3xl'>({data.discount}% OFF)</Text></Flex>
    <Text fontSize='sm' as={"b"} color={"green.300"}>inclusive all text</Text>
    <Flex><Text as={"b"} color={"blackAlpha.800"}>SELECT SIZE</Text><Flex alignItems={"center"}><Text marginLeft={"10px"} as={"b"} fontSize={"sm"}  color={'pink.400'}>{size?size:"SIZE CHART"}</Text><ChevronRightIcon/></Flex></Flex>
    <Flex marginTop={"20px"}><Button marginTop={"10px"} borderRadius={"50%"} backgroundColor={"white"} color={"black"} border={"1px"} variant='solid' onClick={()=>setSize("S")}>S</Button>
    <Button marginTop={"10px"} marginLeft={"5px"} borderRadius={"50%"} backgroundColor={"white"} color={"black"} border={"1px"} variant='solid' onClick={()=>setSize("M")}>M</Button>
    <Button marginTop={"10px"} marginLeft={"5px"} borderRadius={"50%"} backgroundColor={"white"} color={"black"} border={"1px"} variant='solid' onClick={()=>setSize("L")}>L</Button>
    <Button marginTop={"10px"} marginLeft={"5px"} borderRadius={"50%"} backgroundColor={"white"} color={"black"} border={"1px"} variant='solid' onClick={()=>setSize("XL")}>XL</Button>
    <Button marginTop={"10px"}  marginLeft={"5px"} borderRadius={"50%"} backgroundColor={"white"} color={"black"} border={"1px"} variant='solid' onClick={()=>setSize("XXL")}>XXL</Button></Flex>
   <Flex marginTop={"20px"}> <Button leftIcon={<Bag />} onClick={handleCart}  backgroundColor={"#ff3e6c"} color={"white"}  variant='solid'>
        ADD TO BAG
  </Button>
  <Button leftIcon={<Heart />} className='btn' backgroundColor={"skyblue"} color={"white"}   marginLeft={"10px"} variant='solid'>
   ADD TO WISHLIST
  </Button>
  </Flex>
  </GridItem>
  
</Box>
<FooterRes/>
    </div>
  )
}

export default SingleProductPage
