import React, { ReactElement, Fragment, useReducer } from 'react'
import BookablesList from "./BookablesList";
import BookableDetails from "./BookableDetails";

import reducer from "./reducer";

interface Props {
    
}

const initialState = {
    group: "Rooms",
    bookableIndex: 0,
    bookables: [],
    isLoading: false,
    error: false
  };

function BookableView({}): ReactElement {
    const [state, dispatch] = useReducer(reducer, initialState);

    const {group, bookableIndex, bookables} = state;
    const {isLoading, error} = state;

    const bookablesInGroup = state.bookables.filter(
      (b: any) => b.group === state.group
    );
    const bookable = bookablesInGroup[state.bookableIndex];

    return (
        <Fragment>
            <BookablesList 
                state={state} 
                dispatch={dispatch} 
                group={group} 
                bookableIndex={bookableIndex}
                bookables={bookables}
                isLoading={isLoading}
                error={error}  />
            <BookableDetails bookable={bookable}/>
        </Fragment>
    )
}

export default BookableView
