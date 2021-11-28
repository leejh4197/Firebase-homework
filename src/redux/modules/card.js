// card.js
import {db} from "../../firebase"
import {collection, getDoc, getDocs, addDoc} from "firebase/firestore"
import { async } from "@firebase/util";

// Actions
const LOAD = 'card/LOAD';
const CREATE = 'card/CREATE';

const initialState = {list: []}
    


// Action Creators
export function createCard(card) {
return { type: CREATE, card };
}
export function loadCard(card) {
return { type: LOAD, card };
}

// middlewares
export const loadCardFB = () =>{
    return async function (dispatch){
        const card_data = await getDocs(collection(db,"card"));

        let card_list = [];

        card_data.forEach((c)=>{
            card_list.push({id:c.id, ...c.data()});
        });
        dispatch(loadCard(card_list));
    }
}
export const createCardFB = (card) =>{
    return async function (dispatch) {
        const docRef = await addDoc(collection(db,"card"),card);
        const _card = await getDoc(docRef);
        const card_data = {id: _card.id, ..._card.data()}

        console.log(card_data)

        dispatch(createCard(card_data));
    }
}

// Reducer
export default function reducer(state = initialState, action = {}) {
switch (action.type) {
    case "card/LOAD":{
        return {...state,list : action.card}
    }
    case "card/CREATE":{
        const new_cards = [...state.list, action.card];
        return {list: new_cards};
    }
default: 
return state;
}
}

