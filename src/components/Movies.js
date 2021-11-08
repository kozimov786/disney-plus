import React from 'react';
import styled from 'styled-components';

const Movies = () => {
  return (
    <MoviesWrapper>
      <h4>Recommended For You</h4>
      <Content>
        <Wrap>
          <img src="https://lumiere-a.akamaihd.net/v1/images/hb_thesimpsons_disneyplus_mobile_19363_593baf22.jpeg?region=0,0,640,400" alt="" />
        </Wrap>
        <Wrap>
          <img src="https://lumiere-a.akamaihd.net/v1/images/hb_thesimpsons_disneyplus_mobile_19363_593baf22.jpeg?region=0,0,640,400" alt="" />
        </Wrap>
        <Wrap>
          <img src="https://lumiere-a.akamaihd.net/v1/images/hb_thesimpsons_disneyplus_mobile_19363_593baf22.jpeg?region=0,0,640,400" alt="" />
        </Wrap>
        <Wrap>
          <img src="https://lumiere-a.akamaihd.net/v1/images/hb_thesimpsons_disneyplus_mobile_19363_593baf22.jpeg?region=0,0,640,400" alt="" />
        </Wrap>
      </Content>
    </MoviesWrapper>
  );
};

export default Movies;

const MoviesWrapper = styled.div``

const Content = styled.div`
  display: grid;
  grid-gap:25px;
  grid-template-columns: repeat(4, minmax(0,1fr));
`
const Wrap = styled.div`
border-radius: 10px;
overflow:hidden;
cursor: pointer;
box-shadow: rgba(0 0 0 /69%) 0 26px 30px -10px,rgba(0 0 0 /73%) 0 16px 10px -10px;
 border: 3px solid rgba(249,249,249,0.1);
 transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
img{
  display: block;
  object-fit: cover;
}
&:hover{
   transform:scale(1.05);
   border-color: rgba(249,249,249,0.8 );
   box-shadow: rgba(0 0 0 /80%) 0 40px 58px -10px,rgba(0 0 0 /73%) 0 30px 20px -10px;
 }
`