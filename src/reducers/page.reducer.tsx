import {pageActions} from '../actions/pages.actions';
import {Reducer} from '@reduxjs/toolkit';

export interface PageState {
    page: number;
}

const initialState: PageState = {
    page: 0
};

export const pageReducer: Reducer<PageState,pageActions> =(state = initialState, action): PageState =>{
    switch (action.type) {
        case "NEXT_PAGE":
            return {
                ...state,
                page: state.page+1
            }
        case "PREVIOUS_PAGE":
            return {
                ...state,
                page: state.page-1
            }
        case "RESTART_PAGE":
            return{
                ...state,
                page:0
            }    
    
        default:
            return state;
    }
}