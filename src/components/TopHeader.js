import React from "react";
import { Link } from 'react-router-dom'
import styled from "styled-components";

const Title = styled.h1`
  font-size: 3rem;
  text-align: center;
  color: white;
  background: black;
  padding: 20px;
`;

const Main = styled.div `
display:flex;
flex-wrap: wrap;
justify-content:space-evenly;
padding-bottom: 20px;
`

const StyledLink = styled(Link) `
background-color: #darkgray;
color: white;
padding: 14px 25px;
text-align: center;
text-decoration: none;
display: inline-block;
:hover{
  background-color: #FB8366;
}
`

export default function TopHeader() {
  return (
    <header className="ui centered">
      <Title>Buy and Customize A Car!</Title>

    <Main>
        <div>
          <StyledLink to="/car3">Tesla Roadster</StyledLink>
        </div>
        <div>
        <StyledLink to="/car1">Ford Mustang</StyledLink>
        </div>
        <div>
        <StyledLink to="/car2">Honda CRV</StyledLink>
        </div>
    </Main>
    </header>
  );
}
