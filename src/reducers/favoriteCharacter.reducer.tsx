import { Reducer } from "@reduxjs/toolkit";
import { FavoritesActions } from "../actions/favoriteCharacter";
import Character from "../types/character.types";


export interface favoriteCharacterState {
 
  favoritesMap: Map<number, Character>;
}

const initialState: favoriteCharacterState = {
  favoritesMap: new Map()
};

const favoriteCharacterReducer: Reducer<favoriteCharacterState,FavoritesActions> = 
  (state = initialState, action): favoriteCharacterState => {
  switch (action.type) {
    case "ADD_FAVORITE":
      const map = new Map<number, Character>();
      state.favoritesMap.forEach((character) => {
        map.set(character.id, character);
      });

      map.set(action.character.id, action.character);

    return { 
      ...state, 
      favoritesMap: map }
    ;

    case "REMOVE_FAVORITE":
      const mapR = new Map<number, Character>();
      state.favoritesMap.forEach((character) => {
        mapR.set(character.id, character);
      });
        mapR.delete(action.character.id);

      return { 
        ...state, 
        favoritesMap: mapR 
      };

    case "CLEAN_FAVORITES":
      return { ...initialState };
   
    default:
      return state;
  }
};
export default favoriteCharacterReducer;
