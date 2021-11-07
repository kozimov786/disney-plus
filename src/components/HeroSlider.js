import React from 'react';
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const heroSlider = () => {
  let settings = {
    dots: true,
    infinity: true,
    speed: 500,
    slideToShow: 1,
    slideToScroll: 1,
    autoplay: true
  }
  return (
    <Carousel {...settings}>
      <Wrap>
        <img src="/images/slider-badging.jpg" alt="badging" />
      </Wrap>
      <Wrap>
        <img src="/images/slider-badag.jpg" alt="badag" />
      </Wrap>
      <Wrap>
        <img src="/images/slider-scale.jpg" alt="scale" />
      </Wrap>
      <Wrap>
        <img src="/images/slider-scales.jpg" alt="scales" />
      </Wrap>
    </Carousel>
  );
};

export default heroSlider;
const Carousel = styled(Slider)`
   margin-top: 20px;
   margin-bottom: 40px;
   .slick-list{
     overflow: visible;
   }
   li button::before{
     color: #f2f2f2;
   }
   li.slick-active button::before{
     color: #fff;
   }
   button{
     z-index: 1;
   }
`
const Wrap = styled.div`
cursor: pointer;
  img{
    width: 100%;
    border-radius: 4px;
     border: 4px solid transparent;
     transition-duration: 300ms;
    box-shadow: rgba(0 0 0 /69%) 0 26px 30px -10px,rgba(0 0 0 /73%) 0 16px 10px -10px;
    &:hover{
    border: 4px solid rgba(269,269,269,0.8);
    }
  }
`