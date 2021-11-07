import React from 'react';
import styled from 'styled-components';

const Viewers = () => {
  return (
    <View>
      <ViewWrap>
        <img src="/images/viewers-disney.png" alt="disney" />
      </ViewWrap>
      <ViewWrap>
        <img src="/images/viewers-marvel.png" alt="marvel" />
      </ViewWrap>
      <ViewWrap>
        <img src="/images/viewers-national.png" alt="national" />
      </ViewWrap>
      <ViewWrap>
        <img src="/images/viewers-pixar.png" alt="pixar" />
      </ViewWrap>
      <ViewWrap>
        <img src="/images/viewers-starwars.png" alt="starwars" />
      </ViewWrap>
    </View>
  );
};

export default Viewers;

const View = styled.div`
padding: 30px 0 26px;
 display: grid;
 grid-gap: 25px;
 grid-template-columns: repeat(5,minmax(0,1fr));
 z-index: 1;
`
const ViewWrap = styled.div`
cursor: pointer;
border-radius: 10px;
box-shadow: rgba(0 0 0 /69%) 0 26px 30px -10px,rgba(0 0 0 /73%) 0 16px 10px -10px;
 border: 3px solid rgba(249,249,249,0.1);
 transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
 img{
   object-fit: cover;
 }
 &:hover{
   transform:scale(1.05);
   border-color: rgba(249,249,249,0.8 );
   box-shadow: rgba(0 0 0 /80%) 0 40px 58px -10px,rgba(0 0 0 /73%) 0 30px 20px -10px;
 }
`