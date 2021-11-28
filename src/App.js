import './App.css';
import {Route, Switch} from "react-router-dom"
import styled from "styled-components"
import Detail from './Detail';
import Main from './Main';
import {useDispatch} from "react-redux"
import {db} from "./firebase"
import {collection, getDoc, getDocs, addDoc} from "firebase/firestore"
import React from 'react';
import { loadCardFB } from './redux/modules/card';


function App() {
  return (
    <div className="App">
      <Container>
        <Route path= '/' exact>
        <Main/>
        </Route>
        <Route path = '/detail' exact component={Detail}>
        </Route>
      </Container>
    </div>
  );
}


const Container = styled.div`
max-width: 330px;
min-height: 80vh;
background-color: coral;
padding: 16px;
margin: 20px auto;
border-radius: 5px;
border: 1px solid #ddd;
position: relative;
`;

export default App;
