import React from 'react'
import  { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';


function Home() {
  
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
  
  return (
    <> <Carousel activeIndex={index} onSelect={handleSelect}>
    
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
  </Carousel>
    </>
  )
}

export default Home
