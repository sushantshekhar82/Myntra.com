import React from "react";
import EmptyCartPage from "./EmptyCartPage";
import {
  Button,
  Divider,
  Grid,
  GridItem,
  Img,
  Flex,
  Text,
  Select,
  color,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../project.css";
import Footer from "./Footer";
import FooterRes from "./FooterRes";
const getLocalItems = () => {
  let wishlist = localStorage.getItem("wishlist");
  if (wishlist) {
    return JSON.parse(localStorage.getItem("wishlist"));
  } else {
    return [];
  }
};

function Wishlist() {
  const [item, setItem] = useState(getLocalItems());
  const handleWishlist = () => {};
  const handleRemove = (id) => {
    console.log(id);
    let items = JSON.parse(localStorage.getItem("wishlist"));
    items = items.filter((el) => el.id !== id);
    localStorage.setItem("wishlist", JSON.stringify(items));
    setItem(getLocalItems());
  };
  console.log(item);
  return (
    <div>
      <div className="wishlist1">
        {item?.map((el) => (
          <div
            style={{ width: "250px", height: "300px", marginTop: "100px" }}
            key={el.id}
          >
            <div
              style={{ position: "relative", width: "250px", height: "300px" }}
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
            <Link to={`/products/${el.id}`}>
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
            <Button
              marginLeft={"50px"}
              marginBottom={"10px"}
              marginTop={"10px"}
              colorScheme="red"
              width={"100px"}
              onClick={() => handleRemove(el.id)}
            >
              Remove
            </Button>
          </div>
        ))}
      </div>
      <Divider margin={"30px"} />
      <FooterRes />
    </div>
  );
}

export default Wishlist;
