import React from 'react'
import  { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Grid, GridItem,Text,bgGradient, Img } from '@chakra-ui/react'
import { useEffect } from 'react';
import "../project.css";
import Footer from './Footer';
function Home() {
const [data,setData]=useState([])
  const [data1,setData1]=useState([])
  const [data2,setData2]=useState([])
    const [index, setIndex] = useState(0);
  const [loading,setLoading]=useState(false)
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
  const getData=async()=>{
    setLoading(true)
  let res=await fetch('https://render-mock-server-7ng4.onrender.com/home1');
 let data=await res.json();
    setData(data)
    setLoading(false)
  }
  const getData1=async()=>{
    setLoading(true)
    let res=await fetch('https://render-mock-server-7ng4.onrender.com/home2');
   let data=await res.json();
      setData1(data)
      setLoading(false)
    }
    const getData2=async()=>{
      setLoading(true)
      let res=await fetch('https://render-mock-server-7ng4.onrender.com/home3');
     let data=await res.json();
        setData2(data)
        setLoading(false)
      }
  useEffect(()=>{
  getData()
  getData1()
  getData2()
  },[])
  console.log(data)
  if(loading){
    return <img style={{display:"flex",alignItems:"center",justifyContent:"center",margin:"auto"}} width="300px" height="300px"  src="https://www.appcoda.com/learnswiftui/images/animation/swiftui-animation-4.gif" alt="progress"/>
  }
  return (
    <>  
    <div style={{width:"100%",height:"400px"}}> <Carousel activeIndex={index} onSelect={handleSelect}>
    
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://www.bandhanbank.com/sites/default/files/2021-04/Bandhan_Myntra_Offer_Banner_02.jpg"
        alt="Second slide"
      />

      
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://www.paytrigo.com/wp-content/uploads/2020/08/myntra-coupon-detail.jpg"
        alt="Third slide"
      />

     
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://www.gyftr.com/blog/wp-content/uploads/2019/04/banners21554285340.jpg"
        alt="First slide"
      />
     
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/b656a7f4-4688-4997-bb7c-54b78793981e1658752386588-Western-Wear_Desk.jpg
        "
        alt="First slide"
      />
     
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/9be788ff-39a4-4214-99d0-fc97505aae5a1658752545685-USPA_Desk_Banner.jpg
        "
        alt="First slide"
      />
     
    </Carousel.Item>
    </Carousel>
</div>
<div className='homegrid' >
  <div>
  <div style={{display:"grid",alignItems:"center",justifyContent:"center",marginTop:"25px"}} >
  <Text
  bgGradient='linear(to-l, #7928CA, #FF0080)'
  bgClip='text'
  fontSize='4xl'
  fontWeight='extrabold'
>
  Lowest price Ever
</Text>
  </div>
 
  <Grid templateColumns='repeat(10, 1fr)' gap={6}>
    {
      data?.map(({link})=>(

     <GridItem style={{display:"grid",alignItems:"center",justifyContent:"center"}} w='100%' h='10'  ><img src={`${link}`} width="200px" height="300px" style={{marginTop:"10px"}}/> </GridItem>
     
      ))
    }
  
</Grid>
<Grid templateColumns='repeat(10, 1fr)' gap={6} style={{marginTop:"120px"}}>
    {
      data?.map(({link})=>(

     <GridItem style={{display:"grid",alignItems:"center",justifyContent:"center"}} w='100%' h='10'  ><img src={`${link}`} width="200px" height="300px" style={{marginTop:"10px"}}/> </GridItem>
     
      ))
    }
  
</Grid>

</div>
<div>
  <div style={{display:"grid",alignItems:"center",justifyContent:"center",marginTop:"25px"}} >
  <Text
  bgGradient='linear(to-l,rgb(21, 219, 21),  rgb(73, 143, 73))'
  bgClip='text'
  fontSize='4xl'
  fontWeight='extrabold'
>
 SUPER SAVING ZONE
</Text>
  </div>
 
  <Grid templateColumns='repeat(10, 1fr)' gap={6}>
    {
      data1?.map(({link})=>(

     <GridItem style={{display:"grid",alignItems:"center",justifyContent:"center"}} w='100%' h='10'  ><img src={`${link}`} width="200px" height="300px" style={{marginTop:"10px"}}/> </GridItem>
     
      ))
    }
  
</Grid>
<Grid templateColumns='repeat(10, 1fr)' gap={6} style={{marginTop:"120px"}}>
    {
      data1?.map(({link})=>(

     <GridItem style={{display:"grid",alignItems:"center",justifyContent:"center"}} w='100%' h='10'  ><img src={`${link}`} width="200px" height="300px" style={{marginTop:"10px"}}/> </GridItem>
     
      ))
    }
  
</Grid>

</div>
<div>
  <div style={{display:"grid",alignItems:"center",justifyContent:"center",marginTop:"25px"}} >
  <Text
  bgGradient='linear(to-l,  orange, blue)'
  bgClip='text'
  fontSize='4xl'
  fontWeight='extrabold'
>
  SHOP BY CATEGORY
</Text>
  </div>
 
  <Grid templateColumns='repeat(7, 1fr)' gap={2}>
    {
      data2?.map(({link})=>(

     <GridItem style={{display:"grid",alignItems:"center",justifyContent:"center"}} w='100%' h='10'  ><img src={`${link}`} width="200px" height="300px" style={{marginTop:"10px"}}/> </GridItem>
     
      ))
    }
  
</Grid>
<Grid templateColumns='repeat(7, 1fr)' gap={2} style={{marginTop:"120px"}}>
    {
      data2?.map(({link})=>(

     <GridItem style={{display:"grid",alignItems:"center",justifyContent:"center"}} w='100%' h='10'  ><img src={`${link}`} width="200px" height="300px" style={{marginTop:"10px"}}/> </GridItem>
     
      ))
    }
  
</Grid>
</div>
</div>

 <Footer/>
   </>
  )
}

export default Home
