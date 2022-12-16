import React from 'react'
import {Grid,GridItem} from "@chakra-ui/react"
function Men() {
  return (
    <div>
     <Grid templateColumns='25% 75%' gap={6}>
  <GridItem w='100%' h='auto' bg='blue.500' >d</GridItem>
  <GridItem w='100%' h='auto' bg='blue.500' >a</GridItem>
  
</Grid>
    </div>
  )
}

export default Men
