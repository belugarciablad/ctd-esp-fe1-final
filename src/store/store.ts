import {combineReducers} from "@reduxjs/toolkit";
import { composeWithDevTools } from 'redux-devtools-extension';
import characterReducer from "../reducers/character.reducer";
import { pageReducer } from "../reducers/page.reducer";

// Importamos applyMiddleware de Redux, para poder agregar Thunk o Saga como Middleware
import { createStore, applyMiddleware } from 'redux';
import {TypedUseSelectorHook, useSelector as useReduxSelector} from "react-redux";
import thunk from "redux-thunk";
import favoriteCharacterReducer from "../reducers/favoriteCharacter.reducer";


const rootReducer = combineReducers({
   characters: characterReducer,
   page:pageReducer,
   favorites: favoriteCharacterReducer
});

export type IRootState = ReturnType<typeof rootReducer>;

// Tipamos el hook useSelector
export const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector

export const store = createStore(
    rootReducer, composeWithDevTools(applyMiddleware(thunk)) // Aqui aplicaremos los middlewares
)
