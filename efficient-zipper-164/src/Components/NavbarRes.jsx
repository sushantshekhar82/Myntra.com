import React, { ReactNode, useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Badge,
  Img,
  Text,
} from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  AddIcon,
  Search2Icon,
} from "@chakra-ui/icons";
import { AppContext } from "./AppContextProvider";
import Form from "react-bootstrap/Form";
const Links = ["Dashboard", "Projects", "Team"];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
  >
    {children}
  </Link>
);

const NavbarRes = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen1, onOpen1, onClose1 } = useDisclosure();
  const [placement, setPlacement] = React.useState("left");
  const [user,setUser]=useState("")
  const [cartNum, setCartNum] = useState(0);
  const token=localStorage.getItem("token")
  const navigate=useNavigate()
  const { length, auth, authUser, login, loginUser,UserName, name } = useContext(AppContext);

  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")));
useEffect(()=>{
  fetch("https://strange-crab-getup.cyclic.app/user/find", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("user",res[0].name);
        loginUser(true);
        UserName(res[0].name)
       
      
      })
      .catch((err) => console.log(err));
},[token])
  const handleLogout = () => {
    login(false);
    loginUser(false);
    localStorage.removeItem("token")
    navigate("/")
  };
console.log("name",name)
  return (
    <>
      <Box
        position="fixed"
        bg={useColorModeValue("gray.100", "gray.900")}
        px={4}
        width="100%"
        top={0}
        zIndex={1}
      >
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          position="static"
        >
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              {" "}
              <Link className="link" to="/">
                <Img
                  src="./Myntra-icon-logo.png"
                  alt="myntra"
                  width="40px"
                  height="30px"
                />
              </Link>
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <Link className="link" to="/men">
                MEN
              </Link>
              <Link className="link" to="/women">
                WOMEN
              </Link>
              <Link className="link" to="/kids">
                KIDS
              </Link>
              <Link className="link" to="/home&living">
                HOME&LIVING
              </Link>
              <Link className="link" to="/beauty">
                BEAUTY
              </Link>
              <Link className="link" style={{ display: "flex" }} to="/studio">
                STUDIO
                <Badge ml="1" fontSize="0.7em" colorScheme="green">
                  New
                </Badge>
              </Link>
              <Link className="link" to="/admin">
                {auth ? "Admin" : ""}
              </Link>
            </HStack>
          </HStack>
          <HStack display={{ base: "none", md: "none", lg: "flex" }}>
            <div className="search">
              <Search2Icon />
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search for Products"
                  className="me-2 form"
                  aria-label="Search"
                />
              </Form>
            </div>
          </HStack>
          <Flex alignItems={"center"} margin={"3px"}>
            {token ? (
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar size={"sm"} name={name} />
                </MenuButton>
                <MenuList>
                  <MenuItem>Hi {name}</MenuItem>
                  <MenuDivider />
                  <MenuItem>
                    <Button onClick={handleLogout}>Logout</Button>
                  </MenuItem>
                </MenuList>
              </Menu>
            ) : (
              <Link className="link" to="/login">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-user"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </Link>
            )}

            {auth || authUser ? (
              <Link className="link" to="/wishlist">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-heart"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </Link>
            ) : (
              <Link className="link" to="/login">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-heart"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </Link>
            )}
            <Link className="link" to="/cart">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-shopping-bag"
              >
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
            </Link>
            <Badge
              ml="1"
              fontSize="0.8em"
              backgroundColor={"red.400"}
              borderRadius={"50%"}
              height={"18px"}
              color={"white"}
              margin={"-8px"}
            >
              {length}
            </Badge>
          </Flex>
        </Flex>

        {isOpen ? (
          <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerHeader borderBottomWidth="1px">
                <Img
                  width={"100%"}
                  margin={"auto"}
                  src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2022/9/6/98b25e23-649a-40e2-8d86-f9b97f441c791662403123928-offer-banner-300-600x240-code-_-MYNTRA200.jpg"
                  alt="login banner"
                />
              </DrawerHeader>
              <DrawerCloseButton />
              <DrawerBody margin={"5px"}>
                <Link className="link" to="/men" marginTop={"5px"}>
                  MEN
                </Link>
                <Link className="link" to="/women">
                  <Text marginTop={"10px"}> WOMEN</Text>
                </Link>
                <Link className="link" to="/kids" marginTop={"15px"}>
                  <Text marginTop={"10px"}> KIDS</Text>
                </Link>
                <Link className="link" to="/home&living" marginTop={"15px"}>
                  <Text marginTop={"10px"}>HOME&LIVING</Text>
                </Link>
                <Link className="link" to="/beauty" marginTop={"15px"}>
                  <Text marginTop={"10px"}> BEAUTY</Text>
                </Link>
                <Link className="link" style={{ display: "flex" }} to="/studio">
                  <Text marginTop={"10px"}> STUDIO</Text>
                  <Badge ml="1" fontSize="0.7em" colorScheme="green">
                    New
                  </Badge>
                </Link>
                <Link className="link" to="/admin">
                  {auth ? "Admin" : ""}
                </Link>
                {auth || authUser ? (
                  ""
                ) : (
                  <Link to="/login">
                    <Button
                      fontSize={"sm"}
                      fontWeight={"bold"}
                      color={"white"}
                      bg={"pink.400"}
                      _hover={{
                        bg: "pink.300",
                      }}
                      marginTop={"15px"}
                    >
                      Sign In
                    </Button>
                  </Link>
                )}
                <Img
                  src="https://assets.myntassets.com/assets/images/retaillabs/2022/12/30/856cb741-8473-4d5e-b6e3-a52b3d98c99e1672386455977-PWA---App-Download-banner.png"
                  alt="enjoy myntra"
                  style={{ display: "flex", justifyContent: "flex-end" }}
                />
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        ) : null}
      </Box>
    </>
  );
};
export default NavbarRes;
