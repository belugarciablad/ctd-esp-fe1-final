import { Action, ActionCreator } from "@reduxjs/toolkit";
import Character from "../types/character.types";

interface AddFavoriteAction extends Action {
    type: "ADD_FAVORITE",
    character: Character;
}

interface RemoveFavoriteAction extends Action {
    type: "REMOVE_FAVORITE",
    character: Character;
}

interface CleanAllFavoritesAction extends Action {
    type: "CLEAN_FAVORITES",
}

const addFavorite: ActionCreator<AddFavoriteAction> = (character:Character) => {
return {
    type: "ADD_FAVORITE",
    character: character
};
};

const removeFavorite: ActionCreator<RemoveFavoriteAction> = (character:Character) => {
return {
    type: "REMOVE_FAVORITE",
    character: character
};
};

const cleanAllFavorites: ActionCreator<CleanAllFavoritesAction> = () => {
    return {
        type: "CLEAN_FAVORITES",
    };
    };

export type FavoritesActions = ReturnType<typeof addFavorite>| ReturnType<typeof removeFavorite>| ReturnType<typeof cleanAllFavorites>;
  
export {addFavorite,removeFavorite,cleanAllFavorites};

