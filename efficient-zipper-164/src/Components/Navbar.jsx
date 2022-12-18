import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../project.css";
import { Search2Icon } from '@chakra-ui/icons'
import { Flex, Img, Text } from '@chakra-ui/react';
import { Badge } from '@chakra-ui/react';
import { Grid, GridItem } from '@chakra-ui/react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { AppContext } from './AppContextProvider';


function NavbarHome() {
  const [cartNum,setCartNum]=useState(0);
 const {length}=useContext(AppContext)

  const [cart,setCart]=useState(JSON.parse(localStorage.getItem('cart')))
  
  
 
 
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container fluid>
        <Navbar.Brand href="#"> <Link className='link' to="/"><Img src="https://constant.myntassets.com/web/assets/img/icon.5d108c858a0db793700f0be5d3ad1e120a01a500_2021.png" alt="myntra" width="53px" height="53px"/></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
    <div className='nav1'>
      <div>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            
          >
           <Link className='link' to="/men">MEN</Link>
           <Link className='link' to="/women">WOMEN</Link>
           <Link className='link' to="/kids">KIDS</Link>
           <Link className='link' to="/home&living">HOME&LIVING</Link>
           <Link className='link' to="/beauty">BEAUTY</Link>
           <Link className='link' style={{display:"flex"}} to="/studio">
          STUDIO
  <Badge ml='1' fontSize='0.7em' colorScheme='green'>
    New
  </Badge>

</Link>
           
           
          </Nav>
         </div>  
         <div>
          <div className='search'>
         <Search2Icon/>
          <Form className="d-flex">
           
            <Form.Control
              type="search"
              placeholder="Search for Products"
              className="me-2 form"
              aria-label="Search"
              
            />
          </Form>
          </div>
          </div>
          <div className='icon'>
          <Link className='link' to="/admin">  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          
     </Link>
         
            {/* <Button variant="outline-success">Search</Button> */}
             <Flex>
             <Link className='link' to="/wishlist">     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
           </Link>
       
          </Flex>
             <Flex>
             <Link className='link' to="/cart">  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-bag"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
             </Link>
       <Badge ml='1' fontSize='0.8em' backgroundColor={"red.400"} borderRadius={"50%"} height={"18px"} color={"white"} margin={"-8px"}>
            {length}
          </Badge>
          </Flex>
          </div>
    </div> 
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  )
}

export default NavbarHome
