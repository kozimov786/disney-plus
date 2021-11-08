import React from 'react';
import styled from 'styled-components';

const Detail = () => {
  return (
    <Container>
      <Background>
        <img src="https://www.goldderby.com/wp-content/uploads/2020/03/The-Simpsons-Homer-Simpson.jpg?w=620&h=360&crop=1" alt="" />
      </Background>
      <ImageTitle>
        <p>Disney Picture BOA</p>
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img src="/images/play-icon-black.png" alt="play icon" />
          <span>Play</span>
        </PlayButton>
        <TrailerButton>
          <img src="/images/play-icon-white.png" alt="trailer icon" />
          <span>Trailer</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img src="/images/group-icon.png" alt="group icon" />
        </GroupWatchButton>
      </Controls>
      <SubTitle>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, assumenda!</SubTitle>
      <Info>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt magni voluptatem iusto impedit veritatis amet dolore ab cumque! Labore, dolores.
      </Info>
    </Container>
  );
};

export default Detail;

const Container = styled.div`
    max-width: 1440px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-left: 25px;
    padding-right: 25px;
    position: relative;
`
const Background = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  opacity:0.8;

`
const ImageTitle = styled.div`
  height: 30vh;
  width: 35vw;
`
const Controls = styled.div`
  display: flex;
  align-items: center;
`

const PlayButton = styled.button`
   border-radius: 4px;
   font-size: 15px;
   display: flex;
   align-items: center;
   border: none;
   padding: 10px 24px;
   margin-right: 22px;
   background-color: rgb(249,249,249);
   letter-spacing: 1.8px;
   text-transform: uppercase;
   cursor: pointer;
   &:hover{
   background-color: rgb(198,198,198);

   }
`
const TrailerButton = styled(PlayButton)`
  background-color: rgba(0,0,0,0.3);
  border: 1px solid rgb(249,249,249);
  color:rgb(249,249,249);
  &:hover{

  }
`
const AddButton = styled.button`
  width: 44px;
  margin-right: 16px;
  height: 44px;
  border-radius: 50%;
  border: 2px solid #fff;
  background-color: rgba(0,0,0,0.6);
  cursor: pointer;
   span{
     font-size: 30px;
     color:#fff;
   }
`
const GroupWatchButton = styled(AddButton)`
  background-color: black;
`
const SubTitle = styled.p`
  font-size: 15px;
  margin-top: 26px;
  margin-bottom: 16px;
  color: rgba(249,249,249);
`
const Info = styled.p`
  line-height: 1.4;
  font-size: 20px;
  width: 700px;
  color: rgba(249,249,249);
`