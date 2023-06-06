import React from "react";
import { store } from "../Redux/store";
import { getMensData, getMensFilterData } from "../Redux/products/action";
import {
  Divider,
  Flex,
  Grid,
  GridItem,
  Stack,
  Radio,
  RadioGroup,
  useDisclosure,
  Heading,
  CheckboxGroup,
  Box,
  grid,
} from "@chakra-ui/react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
  Checkbox,
  Img,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Footer from "./Footer";
import { useState } from "react";
import "../project.css";
import { useToast } from "@chakra-ui/react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { FaFilter } from "react-icons/fa";
import FooterRes from "./FooterRes";
import {useSelector,useDispatch} from "react-redux"
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
let wishlist=JSON.parse(localStorage.getItem("wishlist"))||[];
// const getLocalItems = () => {
//    wishlist = localStorage.getItem("wishlist");
//   if (wishlist) {
//     return JSON.parse(localStorage.getItem("wishlist"));
//   } else {
//     return [];
//   }
// };


function Men() {
  const [value, setValue] = useState("");
  const [categoryfilter, setCategoryFilter] = useState("");
  const [color, setColor] = useState(false);
 // const [brandfilter,setBrandFilter]=useState([])
  const toast = useToast();
  const [data, setData] = useState([]);
 // const [loading, setLoading] = useState(false);
  const [item, setItem] = useState(wishlist);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [searchParams, setSearchParam] = useSearchParams();
  const location = useLocation();
  const [placement, setPlacement] = React.useState("right");
   const {products,loading}=useSelector((store)=>store.product)
   const dispatch = useDispatch();
   useEffect(()=>{
    dispatch(getMensData())
   },[])
   useEffect(()=>{
    let params={}
    if(categoryfilter.length){
      params.category=categoryfilter
     
    
     
    }
    setSearchParam(params)
  },[categoryfilter])
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
   
    if (products?.length === 0 || location) {
      const getProductParam = {
        params: {
          category: searchParams.getAll("category"),
          brand:searchParams.getAll("brand")
        },
      };
      dispatch(getMensFilterData(getProductParam));
    }
  }, [location.search]);
  if (loading) {
    return (
      <img
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "auto",
        }}
        width="300px"
        height="300px"
        src="https://www.appcoda.com/learnswiftui/images/animation/swiftui-animation-4.gif"
        alt="progress"
      />
    );
  }
  //console.log(data);
  const handleWishlist = (data, id) => {
    
    let flag=false
      wishlist.map((el)=>{
       if(el.id==data.id){
        flag=true
       return;
       }
      
      
      })
      if(flag){
        toast({
                  title: "Item already in wishlist",
            
                  status: "error",
                  duration: 3000,
                  isClosable: true,
                });
      }else{
        toast({
          title: "Item added in wishlist",
    
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        setItem([...item, data]);
      }


    
    
  };
//console.log(searchParams)
  return (
    <div>
      <div>
        <Breadcrumb
          marginLeft={"15px"}
          spacing="8px"
          separator={<ChevronRightIcon color="gray.500" />}
        >
          <BreadcrumbItem>
            <Link to="/">Home</Link>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">
              <Text as="b">men</Text>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>

      <Divider marginTop={"10px"} />
      <div className="mobileview">
        <FaFilter className="filter" size={"20px"} onClick={onOpen} />

        <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth="1px">Filter By</DrawerHeader>
            <DrawerCloseButton />
            <DrawerBody>
            <Text as={"b"}>CATEGORIES</Text>
            <br />
            <RadioGroup onChange={setCategoryFilter} value={categoryfilter} >
              <Stack direction="column">
                <Radio value="">All</Radio>
                <Radio value="Tshirt">Tshirt</Radio>
                <Radio value="Jeans">Jeans</Radio>
                <Radio value="Shoes">Shoes</Radio>
                <Radio value="Kurta">Kurtas & Kurta sets</Radio>
                <Radio value="Boxer">Boxers</Radio>
              </Stack>
            </RadioGroup>
              <Heading
                size={"sm"}
                fontWeight={"bold"}
                marginBottom={"5px"}
                marginTop={"5px"}
              >
                Brands
              </Heading>

              <CheckboxGroup
                colorScheme={"green"}
                // onChange={handleChange}
                // value={categoryfilter}
              >
                <Stack direction={"column"}>
                  <Checkbox value={"roadster"} colorScheme="green">
                    Roadster
                  </Checkbox>

                  <Checkbox value={"Manyavar"} colorScheme="green">
                    Manyavar
                  </Checkbox>
                  <Checkbox value={"WROGN"} colorScheme="green">
                    WROGN
                  </Checkbox>

                  <Checkbox value={"puma"} colorScheme="green">
                    Puma
                  </Checkbox>
                 
                </Stack>
              </CheckboxGroup>
              <Heading
                size={"sm"}
                fontWeight={"bold"}
                marginBottom={"5px"}
                marginTop={"5px"}
              >
                Price
              </Heading>

              <CheckboxGroup
                colorScheme={"green"}
                // onChange={handleChange}
                // value={categoryfilter}
              >
                <Stack direction={"column"}>
                  <Checkbox value={"139"} colorScheme="green">
                    Rs 139 to Rs 5980
                  </Checkbox>

                  <Checkbox value={"chain"} colorScheme="green">
                  Rs 5981 to Rs 1089
                  </Checkbox>
                  <Checkbox value={"pearl"} colorScheme="green">
                  Rs 1090 to Rs 17899
                  </Checkbox>

                 
                </Stack>
              </CheckboxGroup>
              <Heading
                size={"sm"}
                fontWeight={"bold"}
                marginBottom={"5px"}
                marginTop={"5px"}
              >
                Discount
              </Heading>

              <CheckboxGroup
                colorScheme={"green"}
                // onChange={handleChange}
                // value={categoryfilter}
              >
                <Stack direction={"column"}>
                  <Checkbox value={"10"} colorScheme="green">
                    10% and above
                  </Checkbox>

                  <Checkbox value={"20"} colorScheme="green">
                  20% and above
                  </Checkbox>
                  <Checkbox value={"30"} colorScheme="green">
                  30% and above
                  </Checkbox>

                  <Checkbox value={"40"} colorScheme="green">
                  40% and above
                  </Checkbox>
                  
                </Stack>
              </CheckboxGroup>

            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </div>

      <Box className="productview" >
        <GridItem  h="auto" display={{ base: "none", lg: "block" }}>
          <Text as="b" marginLeft={"15px"}>
            FILTERS
          </Text>
          <Divider />

          <div style={{ marginLeft: "15px", marginTop: "10px" }}>
            <Text as={"b"}>CATEGORIES</Text>
            <br />
            <RadioGroup onChange={setCategoryFilter} value={categoryfilter} >
              <Stack direction="column">
                <Radio value="">All</Radio>
                <Radio value="Tshirt">Tshirt</Radio>
                <Radio value="Jeans">Jeans</Radio>
                <Radio value="Shoes">Shoes</Radio>
                <Radio value="Kurta">Kurtas & Kurta sets</Radio>
                <Radio value="Boxer">Boxers</Radio>
              </Stack>
            </RadioGroup>
          </div>
          <Divider margin={"5px"} />
          <div style={{ marginLeft: "15px", marginTop: "10px" }}>
          <Text as={"b"}>BRAND</Text>
            <br />
          <CheckboxGroup
                colorScheme={"green"}
                // onChange={setBrandFilter}
                // value={brandfilter}
              >
                <Stack direction={"column"}>
                  <Checkbox value={"roadster"} colorScheme="green">
                    Roadster
                  </Checkbox>

                  <Checkbox value={"Manyavar"} colorScheme="green">
                    Manyavar
                  </Checkbox>
                  <Checkbox value={"WROGN"} colorScheme="green">
                    WROGN
                  </Checkbox>

                  <Checkbox value={"puma"} colorScheme="green">
                    Puma
                  </Checkbox>
                 
                </Stack>
              </CheckboxGroup>
              </div>
          <Divider margin={"5px"} />
          <div style={{ marginLeft: "15px", marginTop: "10px" }}>
            <Text as={"b"}>PRICE</Text>
            <br />
            <Checkbox size="md" colorScheme="pink">
              Rs 139 to Rs 5980
            </Checkbox>
          </div>
          <div style={{ marginLeft: "15px", marginTop: "2px" }}>
            <Checkbox size="md" colorScheme="pink">
              Rs 139 to Rs 5980
            </Checkbox>
          </div>
          <div style={{ marginLeft: "15px", marginTop: "2px" }}>
            <Checkbox size="md" colorScheme="pink">
              Rs 11821 to Rs 17662
            </Checkbox>
          </div>
          <div style={{ marginLeft: "15px", marginTop: "2px" }}>
            <Checkbox size="md" colorScheme="pink">
              Rs 17662 to Rs 23503
            </Checkbox>
          </div>
          <Divider margin={"5px"} />
          <div style={{ marginLeft: "15px", marginTop: "10px" }}>
            <Text as={"b"}>COLOR</Text>
            <br />
            <Checkbox size="md" colorScheme="pink">
              <Flex>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="black"
                  stroke="currentColor"
                  stroke-width="0"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-circle"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                </svg>
                Black
              </Flex>
            </Checkbox>
          </div>
          <div style={{ marginLeft: "15px", marginTop: "2px" }}>
            <Checkbox size="md" colorScheme="pink">
              <Flex>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="blue"
                  stroke="currentColor"
                  stroke-width="0"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-circle"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                </svg>
                Blue
              </Flex>
            </Checkbox>
          </div>
          <div style={{ marginLeft: "15px", marginTop: "2px" }}>
            <Checkbox size="md" colorScheme="pink">
              <Flex>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="white"
                  stroke="currentColor"
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-circle"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                </svg>
                white
              </Flex>
            </Checkbox>
          </div>
          <div style={{ marginLeft: "15px", marginTop: "2px" }}>
            <Checkbox size="md" colorScheme="pink">
              <Flex>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="red"
                  stroke="currentColor"
                  stroke-width="0"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-circle"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                </svg>
                Red
              </Flex>
            </Checkbox>
          </div>

          <div style={{ marginLeft: "15px", marginTop: "2px" }}>
            <Checkbox size="md" colorScheme="pink">
              <Flex>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="green"
                  stroke="currentColor"
                  stroke-width="0"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-circle"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                </svg>
                Green
              </Flex>
            </Checkbox>
          </div>

          <div style={{ marginLeft: "15px", marginTop: "2px" }}>
            <Checkbox size="md" colorScheme="pink">
              <Flex>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="grey"
                  stroke="currentColor"
                  stroke-width="0"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-circle"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                </svg>
                Grey
              </Flex>
            </Checkbox>
          </div>
          <Divider margin={"5px"} />
          <div style={{ marginLeft: "15px", marginTop: "10px" }}>
            <Text as={"b"}>DISCOUNT</Text>
            <br />
            <RadioGroup onChange={setValue} value={value}>
              <Stack direction="column">
                <Radio value="1">10% and above</Radio>
                <Radio value="2">20% and above</Radio>
                <Radio value="3">30% and above</Radio>
                <Radio value="4">40% and above</Radio>
                <Radio value="5">50% and above</Radio>
              </Stack>
            </RadioGroup>
          </div>
        </GridItem>
        <GridItem  h="auto"  >
          <div className="poductgrid">
          {products?.map((el) => (
            <div
              className="productgridinner"
              key={el.id}
            >
              <div
                style={{
                  position: "relative",
                  
                }}
              >
                <div className="zoom">
                <Link to={`/Products/${el._id}`}>
                  <Img  src={el.imageLink} objectFit={'contain'}/>
                  </Link>
                </div>
                <div className="rating">
                  <Flex>
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="19"
                      viewBox="0 0 24 24"
                      fill="blue"
                      stroke="currentColor"
                      stroke-width="1"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-star"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                    <Text as="b">{el.rating}</Text>
                  </Flex>
                </div>
                <div className="wishlist">
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={() => handleWishlist(el, el.id)}
                  >
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill={color ? "red" : "wheat"}
                      stroke="currentColor"
                      stroke-width="0"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-heart"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <Link to={`/Products/${el._id}`}>
                {" "}
                <div>
                  <Text as={"b"}>{el.brand}</Text>
                  <Text>{el.productName}</Text>
                  <Flex>
                    {" "}
                    <Text as={"b"}>Rs {el.price}</Text>
                    <Text color={"orange"}>({el.discount}% OFF)</Text>
                  </Flex>
                </div>
              </Link>
            </div>
          ))}
        </div>
        </GridItem>
      </Box>
      <FooterRes />
    </div>
  );
}

export default Men;
