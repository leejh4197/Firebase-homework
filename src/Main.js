import React from "react";
import styled from "styled-components";
import Detail from "./Detail";
import {Link} from "react-router-dom"
import Card from "./Card";


const Main = (props) =>{
    return(
            <>
            <Title>MY DICTIONARY</Title>
            <Card/>
            <StyledLink to ={`/detail/`}>
            <Circle cursor={"pointer"}><h1>+</h1></Circle>
            </StyledLink>
            </>
    );
}



const Title = styled.h3`
text-align: left;
color: white;
`;



const Circle = styled.div`
background-color: red;
border-radius: 50%;
width: 50px;
height: 50px;
display: flex;
justify-content: center;
align-items: center;
position: absolute;
bottom: 10px;
right: 10px;
`;
const StyledLink = styled(Link)`
text-decoration-line : none;
`

export default Main;