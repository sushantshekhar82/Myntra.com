import React from 'react'
import {Flex, Grid,GridItem,Img,Text} from "@chakra-ui/react"
function Footer() {
  return (
    <div style={{backgroundColor:" #f1f1f1",height:"auto"}}>
      <Grid
  h='200px'
  templateRows='repeat(1, 1fr)'
  templateColumns='20%  20% 30% 30%'
  width={"80%"}
  height={"auto"}
  margin={"auto"}
  marginTop={"200px"}
>
  <GridItem    bg=' #f1f1f1' >
    <div  style={{margin:"10px"}}>
    <Text fontSize='lg'  as='b'> ONLINE SHOPPING</Text>
    <Text  fontSize='md'>Men</Text>
    <Text  fontSize='md'>Women</Text>
    <Text  fontSize='md'>Kids</Text>
    <Text  fontSize='md'>Home & Living</Text>
    <Text  fontSize='md'>Gift Cards</Text>
    <Text  fontSize='md'>Myntra Insider</Text>
    
    </div>
    <div  style={{margin:"10px"}}>
    <Text fontSize='lg'  as='b'>USEFUL LINKS</Text>
    <Text  fontSize='md'>Blog</Text>
    <Text  fontSize='md'>Careers</Text>
    <Text  fontSize='md'>Site Map</Text>
    <Text  fontSize='md'>Corporate Information</Text>
    <Text  fontSize='md'>Whitehat</Text>
  
    
    </div>
    

  </GridItem>
  <GridItem  bg='#f1f1f1' > <div  style={{margin:"10px"}}>
  <Text fontSize='lg'  as='b'> CUSTOMER POLICIES</Text>
    <Text  fontSize='md'>Contact us</Text>
    <Text  fontSize='md'>FAQ</Text>
    <Text  fontSize='md'>T&C</Text>
    <Text  fontSize='md'>Terms of Use</Text>
    <Text  fontSize='md'>Shipping</Text>
    <Text  fontSize='md'>Cancellation</Text>
    <Text  fontSize='md'>Returns</Text>
    <Text  fontSize='md'>Privacy policy</Text>
    <Text  fontSize='md'>Grievance Officer</Text>
</div>
  </GridItem>
  <GridItem  bg='#f1f1f1' >
  <div  style={{margin:"10px"}}>
  <Text fontSize='lg'   as='b'> EXPERIENCE MYNTRA APP ON MOBILE </Text>
  <Img  src="https://p.kindpng.com/picc/s/790-7908713_download-from-app-store-icons-png-transparent-png.png" alt='myntra'/>
  
  </div>
  <div  style={{margin:"10px"}}>
  <Text fontSize='lg'   as='b'> KEEP IN TOUCH </Text>
  <Img  src="https://www.pngitem.com/pimgs/m/379-3797385_facebook-twitter-instagram-png-log-audraday-youtube-transparent.png" alt='myntra'/>
  
  </div>
  </GridItem>
  <GridItem  bg='#f1f1f1' >
  <div  style={{margin:"10px"}}>
  <Flex> <Img  src="https://t3.ftcdn.net/jpg/01/04/61/26/360_F_104612683_PmSA33T0neVJW2npTpNXY0cS1Fg1bYzq.jpg" width="100px" borderRadius="50%" alt='myntra'/>
   <Text fontSize='lg'   as='b'> 100% ORIGINAL guarantee for all products at myntra.com</Text> </Flex>
  </div>
  </GridItem>
</Grid>
    </div>
  )
}

export default Footer
