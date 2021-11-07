import React from 'react';
import styled from 'styled-components';
import ImgSlider from './HeroSlider';
import Viewers from './Viewers';

const Home = () => {
  return (
    <Main>
      <Container>
        <ImgSlider />
        <Viewers />
      </Container>
    </Main>
  );
};

export default Home;

const Main = styled.main`
  padding: 20px 0;
  min-height: 100vh;
  overflow-x: hidden;
  position: relative;
  &::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    background: url("/images/home-background.png") center center / cover no-repeat fixed;
  }
`
const Container = styled.div`
 max-width: 1440px;
 width: 100%;
 margin-left: auto;
 margin-right: auto;
 padding-left: 25px;
 padding-right: 25px;
`
