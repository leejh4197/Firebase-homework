import React from "react";
import styled from "styled-components"
import {useHistory, useParams} from "react-router-dom"
import {useSelector, useDispatch} from "react-redux"
import {createCard, createCardFB} from "./redux/modules/card"


const Detail = (props) => {
    
    const history = useHistory();
    const my_word = React.useRef(null);
    const my_explain = React.useRef(null);
    const my_example = React.useRef(null);
    const dispatch = useDispatch();
    
    
    const addList = ()=> {
    const word = my_word.current.value;
    const explain = my_explain.current.value;
    const example = my_example.current.value;
    const total = {word,explain,example};
    dispatch(createCardFB(total));
    }
    
    return(
        <>
        <Word_add>단어 추가하기</Word_add>
        <div>
        <Word>
            <Word_text>단어</Word_text>
                <Input type="text" ref={my_word}/>
            
        </Word>
        <Word>
            <Word_text>설명</Word_text>
                <Input type="text" ref={my_explain}/>
        </Word>
        <Word>
            <Word_text>예시</Word_text>
                <Input type="text" ref={my_example}/>
        </Word>
        <Add onClick={()=>{addList(); history.push('/');}}>추가하기</Add>
        </div>
        </>
    );
};

const Word_add = styled.h3`
text-align: left;
color: white;
`
const Word = styled.div`
width: 330px;
height: 80px;
background-color: white;
`
const Word_text = styled.h6`
text-decoration: underline;
text-align: left;
`
const Input = styled.input`
width: 280px;
height: 30px;
margin-left: 5px;
`

const Add = styled.button`
cursor: pointer;
margin-top:20px; 
width: 100% ;
background-color: white;
border : none ;
border-radius: 10px; 
padding: 1rem;
color : black;

`



export default Detail;