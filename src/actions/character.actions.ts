import { Action, ActionCreator, ThunkAction } from "@reduxjs/toolkit";
import { findCharacterAPI} from "../services/character.services";
import { IRootState, useSelector } from "../store/store";
import Character from "../types/character.types";


interface FetchCharactersPendingAction extends Action {
  type: "FETCH_CHARACTERS_PENDING";
  query: string;
}

interface FetchCharactersSuccessAction extends Action {
  type: "FETCH_CHARACTERS_SUCCESS";
  characters: Character[];
  pagenumber: number
}

interface FetchCharactersFailedAction extends Action {
  type: "FETCH_CHARACTERS_FAILED";
  error: string;
}

const fetchCharactersPending: ActionCreator<FetchCharactersPendingAction> = (
  query: string
) => {
  return {
    type: "FETCH_CHARACTERS_PENDING",
    query: query
  };
};

const fetchCharactersSuccess: ActionCreator<FetchCharactersSuccessAction> = (
  characters: Character[],pagenumber
) => {
  return {
    type: "FETCH_CHARACTERS_SUCCESS",
    characters: characters,
    pagenumber: pagenumber
  };
};

const fetchCharactersFailure: ActionCreator<FetchCharactersFailedAction> = (
  error: string
) => {
  return {
    type: "FETCH_CHARACTERS_FAILED",
    error: error
  };
};

export type CharacterActions =
  | ReturnType<typeof fetchCharactersPending>
  | ReturnType<typeof fetchCharactersSuccess>
  | ReturnType<typeof fetchCharactersFailure>;

interface FetchCharactersThunkAction
  extends ThunkAction<void, IRootState, unknown, CharacterActions> {}

interface findPropsFetch{
  query?:string,
  page?:number
}



export const fetchCharactersThunk = ({query,page}:findPropsFetch): FetchCharactersThunkAction => {
  
  
  return async (dispatch, getState) => {
    // Marcamos el state como loading
    dispatch(fetchCharactersPending(query));

    try {
      const characters: Character[] = await (await findCharacterAPI({name:query,page:page})).characters;
      const pagenumber: number= await (await findCharacterAPI({name:query,page:page})).lastpage;
      dispatch(fetchCharactersSuccess(characters,pagenumber));
    } catch (e) {
      dispatch(fetchCharactersFailure(e));
    }
  };
};
