import React,{useEffect} from "react";
import styled from "styled-components";
import Detail from "./Detail";
import {useSelector} from "react-redux"
import {loadCardFB} from "./redux/modules/card"
import { useDispatch } from "react-redux";

const Card = (props) =>{
    const data = useSelector((state)=>state.card.list);
    const dispatch = useDispatch();
    
        dispatch(loadCardFB());
    
    return(
        <Emp>
            {data.map((list,index)=>{
                return(
            <Cardbox className="Cardbox" key={index}>
            <Word_text>단어</Word_text>
            <Word_p>{list.word}</Word_p>
            <Word_text>설명</Word_text>
            <Word_p>{list.explain}
            </Word_p>
            <Word_text>예시</Word_text>
            <Word_p1>{list.example}</Word_p1>
            </Cardbox>
                )
            })}
        </Emp>
    )
}
const Emp = styled.div`
height: 50vh;
overflow-y: auto;
max-height: 80vh;
`
const Cardbox = styled.div`
width: 300px;
height: 260px;
background-color: white;

`
const Word_text = styled.h6`
text-decoration: underline;
text-align: left;
`
const Word_p = styled.p`
text-align: left;
`
const Word_p1 = styled.p`
text-align: left;
color: blue;
`

export default Card;