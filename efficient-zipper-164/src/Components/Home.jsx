import React from "react";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Grid, GridItem, Text, bgGradient, Img, Box } from "@chakra-ui/react";
import { useEffect } from "react";
import "../project.css";
import Footer from "./Footer";
import { home1, home2, home3 } from "../HomeData";
import FooterRes from "./FooterRes";
function Home() {
  const [data, setData] = useState(home1);
  const [data1, setData1] = useState(home2);
  const [data2, setData2] = useState(home3);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  
 

  return (
    <>
      <div className="carousel">
        {" "}
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          className="carousel1"
        >
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.bandhanbank.com/sites/default/files/2021-04/Bandhan_Myntra_Offer_Banner_02.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.paytrigo.com/wp-content/uploads/2020/08/myntra-coupon-detail.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.gyftr.com/blog/wp-content/uploads/2019/04/banners21554285340.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/b656a7f4-4688-4997-bb7c-54b78793981e1658752386588-Western-Wear_Desk.jpg
        "
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/9be788ff-39a4-4214-99d0-fc97505aae5a1658752545685-USPA_Desk_Banner.jpg
        "
              alt="First slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="homegrid">
        <div>
          <div
            style={{
              display: "grid",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "25px",
            }}
          >
            <Text
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              bgClip="text"
              fontSize="4xl"
              fontWeight="extrabold"
            >
              Lowest price Ever
            </Text>
          </div>

          <Grid
            gridTemplateColumns={{
              base: "repeat(3,1fr)",
              md: "repeat(5,1fr)",
              lg: "repeat(9, 1fr)",
            }}
            gap="5px"
          >
            {data?.map(({ link }) => (
              <GridItem
                style={{
                  display: "grid",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "5px",
                }}
              >
                <img src={`${link}`} style={{ marginTop: "2px" }} />
              </GridItem>
            ))}
          </Grid>
          <Grid
            gridTemplateColumns={{
              base: "repeat(3,1fr)",
              md: "repeat(5,1fr)",
              lg: "repeat(9, 1fr)",
            }}
            gap="5px"
          >
            {data?.map(({ link }) => (
              <GridItem
                style={{
                  display: "grid",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "5px",
                }}
              >
                <img src={`${link}`} style={{ marginTop: "2px" }} />
              </GridItem>
            ))}
          </Grid>
        </div>
        <div>
          <div
            style={{
              display: "grid",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "25px",
            }}
          >
            <Text
              bgGradient="linear(to-l,rgb(21, 219, 21),  rgb(73, 143, 73))"
              bgClip="text"
              fontSize="4xl"
              fontWeight="extrabold"
            >
              SUPER SAVING ZONE
            </Text>
          </div>
          <Grid
            gridTemplateColumns={{
              base: "repeat(3,1fr)",
              md: "repeat(5,1fr)",
              lg: "repeat(9, 1fr)",
            }}
            gap="5px"
          >
            {data1?.map(({ link }) => (
              <GridItem
                style={{
                  display: "grid",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "5px",
                }}
              >
                <img src={`${link}`} style={{ marginTop: "2px" }} />
              </GridItem>
            ))}
          </Grid>{" "}
          <Grid
            gridTemplateColumns={{
              base: "repeat(3,1fr)",
              md: "repeat(5,1fr)",
              lg: "repeat(9, 1fr)",
            }}
            gap="5px"
          >
            {data1?.map(({ link }) => (
              <GridItem
                style={{
                  display: "grid",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "5px",
                }}
              >
                <img src={`${link}`} style={{ marginTop: "2px" }} />
              </GridItem>
            ))}
          </Grid>
        </div>
        <div>
          <div
            style={{
              display: "grid",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "25px",
            }}
          >
            <Text
              bgGradient="linear(to-l,  orange, blue)"
              bgClip="text"
              fontSize="4xl"
              fontWeight="extrabold"
            >
              SHOP BY CATEGORY
            </Text>
          </div>

          <Grid
            gridTemplateColumns={{
              base: "repeat(2,1fr)",
              md: "repeat(3,1fr)",
              lg: "repeat(6, 1fr)",
            }}
            gap="5px"
          >
            {data2?.map(({ link }) => (
              <GridItem
                style={{
                  display: "grid",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "1px",
                }}
              >
                <img src={`${link}`} style={{ marginTop: "2px" }} />
              </GridItem>
            ))}
          </Grid>
          <Grid
            gridTemplateColumns={{
              base: "repeat(2,1fr)",
              md: "repeat(3,1fr)",
              lg: "repeat(6, 1fr)",
            }}
            gap="5px"
          >
            {data2?.map(({ link }) => (
              <GridItem
                style={{
                  display: "grid",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "1px",
                }}
              >
                <img src={`${link}`} style={{ marginTop: "2px" }} />
              </GridItem>
            ))}
          </Grid>
        </div>
      </div>

      <FooterRes />
    </>
  );
}

export default Home;
