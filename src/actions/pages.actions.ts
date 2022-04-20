import { Action, ActionCreator } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

interface NextPageAction extends Action {
    type: "NEXT_PAGE",
    page: number
}

interface PreviousPageAction extends Action {
    type: "PREVIOUS_PAGE",
    page: number
}

interface RestartPageAction extends Action {
    type: "RESTART_PAGE",
    page: number
}

const nextPage: ActionCreator<NextPageAction> = (page:number) => {
return {
    type: "NEXT_PAGE",
    page:page
};
};

const previousPage: ActionCreator<PreviousPageAction> = (page:number) => {
return {
    type: "PREVIOUS_PAGE",
    page:page
};
};

const restartPage: ActionCreator<RestartPageAction> = (page:number) => {
    return {
        type: "RESTART_PAGE",
        page:page
    };
    };

export type pageActions = ReturnType<typeof previousPage>| ReturnType<typeof nextPage>| ReturnType<typeof restartPage>;
  
export {nextPage,previousPage,restartPage};

