import React from 'react'
import { Grid, GridItem, Img,Text,Flex} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { ArrowRightIcon } from '@chakra-ui/icons'
function EmptyCartPage() {
  return (
    <div>
      <Grid templateColumns='100%' gap={6}>
  <GridItem w='100%' h='87vh' bg='wheat' justifyContent={"center"} alignItems={"center"}  >
    <div style={{width:"250px",height:"300px" ,margin:"auto"}}>
    <Img src='https://constant.myntassets.com/checkout/assets/img/empty-bag.webp' width={"250px"} height={"250px"} margin={"auto"} alignItems={"center"} />
<Text width={"200px"}  style={{display:"flex",alignItems:"center",marginLeft:"100px"} }as="b">Hey, it feels so light!</Text>
<Link to="/men"><Flex width={"300px"} justifyContent={"center"} alignItems={"center"}><Text width={"300px"}  style={{display:"flex",alignItems:"center",marginLeft:"100px"} }as="b">Continue Shopping<ArrowRightIcon/></Text></Flex></Link>
    </div>

  </GridItem>
 
</Grid>
    </div>
  )
}

export default EmptyCartPage
