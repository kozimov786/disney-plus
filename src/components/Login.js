import React from 'react';
import styled from 'styled-components';

const Login = () => {
  return (
    <div>
      <Container>
        <Content>
          <img src="/images/cta-logo-one.svg" alt="cta logo" />
          <SignUp>Get All There</SignUp>
          <Info>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem fugit saepe optio ut odio! Doloremque quisquam perspiciatis maxime maiores facilis aliquid atque saepe et deleniti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, eum!</Info>
          <img src="/images/cta-logo-two.png" alt="cta logo" />
        </Content>
      </Container>
    </div>
  );
};

export default Login;
const Container = styled.div`
    max-width: 1440px;
    min-height: calc(100vh - 100px);
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-left: 25px;
    padding-right: 25px;
    background-image: url("/images/login-background.jpg");
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 650px;
  margin: 0 auto;
  padding-top: 100px;

`

const SignUp = styled.a`
 width: 100%;
 font-weight: bold;
 padding: 17px;
 text-align: center;
 letter-spacing: 1.5px;
 text-transform: uppercase;
 background-color: #0063e5;
 color: #f9f9f9;
 border-radius: 4px;
 font-size: 18px;
 cursor: pointer;
 transition: all 250ms;
 margin-bottom: 12px;
 margin-top: 12px;
 &:hover{
   background-color: #fff;
   color: #0063e5;
 }
`
const Info = styled.p`
  font-size: 13px;
 letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.5;
`
