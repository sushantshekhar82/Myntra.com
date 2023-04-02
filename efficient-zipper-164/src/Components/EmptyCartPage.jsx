import React from "react";
import { Grid, GridItem, Img, Text, Flex, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "@chakra-ui/icons";
import "../project.css";
function EmptyCartPage() {
  return (
    <div>
      <Box width={"100%"} height={"90vh"} bg={"wheat"}>
        <Box className="emptyres">
          <Img
            src="https://constant.myntassets.com/checkout/assets/img/empty-bag.webp"
            alignItems={"center"}
          />

          <Text
            style={{
              display: "flex",
              alignItems: "center",
            }}
            as="b"
          >
            Hey, it feels so light!
          </Text>
          <Link to="/men">
            <Flex justifyContent={"center"} alignItems={"center"}>
              <Text
                width={"300px"}
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
                as="b"
              >
                Continue Shopping
                <ArrowRightIcon />
              </Text>
            </Flex>
          </Link>
        </Box>
      </Box>
    </div>
  );
}

export default EmptyCartPage;

// <Box width={"100%"} height={"85vh"} bg={"wheat"}>
// <Box className="emptyres">
//   <Img
//     src="https://constant.myntassets.com/checkout/assets/img/empty-bag.webp"
//     alignItems={"center"}
//   />
//   <Text
//     style={{
//       display: "flex",
//       alignItems: "center",
//     }}
//     as="b"
//   >
//     Hey, it feels so light!
//   </Text>
//   <Link to="/men">
//     <Flex justifyContent={"center"} alignItems={"center"}>
//       <Text
//         width={"300px"}
//         style={{
//           display: "flex",
//           alignItems: "center",
//         }}
//         as="b"
//       >
//         Continue Shopping
//         <ArrowRightIcon />
//       </Text>
//     </Flex>
//   </Link>
// </Box>
// </Box>
