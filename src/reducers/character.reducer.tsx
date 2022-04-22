import { Reducer } from "@reduxjs/toolkit";
import { CharacterActions } from "../actions/character.actions";
import Character from "../types/character.types";

export interface CharacterState {
    status: "IDLE" | "LOADING" | "COMPLETED" | "FAILED";
    characters: Character[];
    errorMessage: string | null;
    pagenumber: number 
  }
  
  const initialState: CharacterState = {
    status: "IDLE",
    characters: [],
    errorMessage: null,
    pagenumber: 0
  };
  
  const characterReducer: Reducer<CharacterState, CharacterActions> = (
    state = initialState,
    action
  ): CharacterState => {
    switch (action.type) {
      case "FETCH_CHARACTERS_PENDING":
        return {
          ...state,
          status: "LOADING",
          characters: [],
          errorMessage: null
        };
      case "FETCH_CHARACTERS_SUCCESS":
        return {
          ...state,
          status: "COMPLETED",
          characters: action.characters,
          pagenumber: action.pagenumber
        };
      case "FETCH_CHARACTERS_FAILED":
        return {
          ...state,
          status: "FAILED",
          errorMessage: action.error
        };
      default:
        return state;
    }
  };
  export default characterReducer;