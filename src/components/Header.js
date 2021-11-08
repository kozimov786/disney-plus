import React from 'react';
import styled from 'styled-components';


const Header = () => {
  return (
    <Container>
      <Logo src="/images/logo.svg" />
      <NavMenu>
        <a href="blank_html">
          <img src="/images/home-icon.svg" alt="home icon" />
          <span>Home</span>
        </a>
        <a href="blank_html">
          <img src="/images/search-icon.svg" alt="search icon" />
          <span>Search</span>
        </a>
        <a href="blank_html">
          <img src="/images/watchlist-icon.svg" alt="watchlist icon" />
          <span>Watchlist</span>
        </a>
        <a href="blank_html">
          <img src="/images/original-icon.svg" alt="original icon" />
          <span>Originals</span>
        </a>
        <a href="blank_html">
          <img src="/images/movie-icon.svg" alt="movie icon" />
          <span>movies</span>
        </a>
        <a href="blank_html">
          <img src="/images/series-icon.svg" alt="series icon" />
          <span>series</span>
        </a>
      </NavMenu>
      <UserImg src='/images/me.jpg' />
    </Container>
  );
};

export default Header;

const Container = styled.div`
 padding: 25px;
 max-width: 1440px;
 width: 100%;
 margin-left: auto;
 margin-right: auto;
 background-color: #090b13;
 color: #FFF;
 display: flex;
 align-items: center;
`
const Logo = styled.img`
 width: 80px;
`
const NavMenu = styled.div`
display: flex;
align-items: center;
flex-grow: 1;
margin-left: 20px;
 a{
   display: flex;
   align-items: center;
   padding: 0 10px;
   cursor: pointer;

   img{
     width: 20px;
   }
   span{
     font-size: 13px;
     letter-spacing:1.41px;
     text-transform: uppercase;
     position: relative;
     &::after{
       content: '';
       height: 2px;
       display: block;
       background-color: white;
       position: absolute;
       left: 0;
       right: 0;
       bottom: -6px;
       opacity: 0;
       transform: scaleX(0);
       transform-origin: left center;
       transition: transform 0.3s ease-in;
     }
   }
   &:hover{
     span::after{
       transform: scaleX(1);
       opacity: 1;
     }
   }
 }
`
const UserImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
`