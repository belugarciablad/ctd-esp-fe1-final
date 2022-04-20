import { Action, ActionCreator, ThunkAction } from "@reduxjs/toolkit";
import { findCharacterAPI} from "../services/character.services";
import { IRootState } from "../store/store";
import Character from "../types/character.types";
import {pageReducer} from '../reducers/page.reducer'
import {pageActions} from '../actions/pages.actions'

interface FetchCharactersPendingAction extends Action {
  type: "FETCH_CHARACTERS_PENDING";
  query: string;
}

interface FetchCharactersSuccessAction extends Action {
  type: "FETCH_CHARACTERS_SUCCESS";
  characters: Character[];
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
  characters: Character[]
) => {
  return {
    type: "FETCH_CHARACTERS_SUCCESS",
    characters: characters
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


export const fetchCharactersThunk = (query: string, page?:number): FetchCharactersThunkAction => {
  return async (dispatch, getState) => {
    // Marcamos el state como loading
    dispatch(fetchCharactersPending(query));
    // dispatch(page);
    //
    try {
      const characters: Character[] = await (await findCharacterAPI(query,page)).characters;
      dispatch(fetchCharactersSuccess(characters));
    } catch (e) {
      dispatch(fetchCharactersFailure(e));
    }
  };
};
