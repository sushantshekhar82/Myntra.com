import React from "react";
import {
  Divider,
  Flex,
  Grid,
  GridItem,
  Stack,
  Radio,
  RadioGroup,
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
import { Link } from "react-router-dom";
import { useEffect } from "react";
import FooterRes from "./FooterRes";
const getLocalItems = () => {
  let wishlist = localStorage.getItem("wishlist");
  if (wishlist) {
    return JSON.parse(localStorage.getItem("wishlist"));
  } else {
    return [];
  }
};
function Men() {
  const [value, setValue] = useState("1");
  const [value1, setValue1] = useState("1");
  const [color, setColor] = useState(false);
  const toast = useToast();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [item, setItem] = useState(getLocalItems());
  const getData = async () => {
    setLoading(true);
    let res = await fetch(
      `https://render-mock-server-7ng4.onrender.com/Products`
    );
    let data = await res.json();
    setData(data);
    setLoading(false);
  };
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(item));
  }, [item]);
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
  console.log(data);
  const handleWishlist = (data, id) => {
    toast({
      title: "Item added in wishlist",

      status: "success",
      duration: 5000,
      isClosable: true,
    });
    setItem([...item, data]);
  };

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

      <Divider marginTop={"30px"} />
      <Grid templateColumns="23% 73%" gap={2}>
        <GridItem w="100%" h="auto">
          <Text as="b" marginLeft={"15px"}>
            FILTERS
          </Text>
          <Divider />

          <div style={{ marginLeft: "15px", marginTop: "10px" }}>
            <Text as={"b"}>CATEGORIES</Text>
            <br />
            <RadioGroup onChange={setValue1} value={value1}>
              <Stack direction="column">
                <Radio value="1">All</Radio>
                <Radio value="2">Tshirt</Radio>
                <Radio value="3">Jeans</Radio>
                <Radio value="4">Shoes</Radio>
                <Radio value="5">Kurtas & Kurta sets</Radio>
                <Radio value="6">Boxers</Radio>
              </Stack>
            </RadioGroup>
          </div>
          <Divider margin={"5px"} />

          <div style={{ marginLeft: "15px", marginTop: "10px" }}>
            <Text as={"b"}>BRAND</Text>
            <br />
            <Checkbox size="md" colorScheme="pink">
              Roadster
            </Checkbox>
          </div>
          <div style={{ marginLeft: "15px", marginTop: "2px" }}>
            <Checkbox size="md" colorScheme="pink">
              Manyavar
            </Checkbox>
          </div>
          <div style={{ marginLeft: "15px", marginTop: "2px" }}>
            <Checkbox size="md" colorScheme="pink">
              WROGN
            </Checkbox>
          </div>
          <div style={{ marginLeft: "15px", marginTop: "2px" }}>
            <Checkbox size="md" colorScheme="pink">
              Puma
            </Checkbox>
          </div>
          <div style={{ marginLeft: "15px", marginTop: "2px" }}>
            <Checkbox size="md" colorScheme="pink">
              U.S Polo Assn.
            </Checkbox>
          </div>
          <div style={{ marginLeft: "15px", marginTop: "2px" }}>
            <Checkbox size="md" colorScheme="pink">
              Tommy Hilfiger
            </Checkbox>
          </div>
          <div style={{ marginLeft: "15px", marginTop: "2px" }}>
            <Checkbox size="md" colorScheme="pink">
              Huetrap
            </Checkbox>
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
        <GridItem w="100%" h="auto" className="poductgrid">
          {data?.map((el) => (
            <div
              style={{ width: "250px", height: "300px", marginTop: "100px" }}
              key={el.id}
            >
              <div
                style={{
                  position: "relative",
                  width: "250px",
                  height: "300px",
                }}
              >
                <div className="zoom">
                  <Img width={"210px"} height={"290px"} src={el.imageLink} />
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
                      width="24"
                      height="24"
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
              <Link to={`/Products/${el.id}`}>
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
        </GridItem>
      </Grid>
      <FooterRes />
    </div>
  );
}

export default Men;
