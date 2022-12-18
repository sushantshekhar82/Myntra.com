import React from 'react'
import { Grid, GridItem, Img,Text} from '@chakra-ui/react'
function EmptyCartPage() {
  return (
    <div>
      <Grid templateColumns='100%' gap={6}>
  <GridItem w='100%' h='87vh' bg='wheat' justifyContent={"center"} alignItems={"center"}  >
    <div style={{width:"250px",height:"300px" ,margin:"auto"}}>
    <Img src='https://constant.myntassets.com/checkout/assets/img/empty-bag.webp' width={"250px"} height={"250px"} margin={"auto"} alignItems={"center"} />
<Text width={"200px"}  style={{display:"flex",alignItems:"center",marginLeft:"100px"} }as="b">Hey, it feels so light!</Text>

    </div>

  </GridItem>
 
</Grid>
    </div>
  )
}

export default EmptyCartPage
