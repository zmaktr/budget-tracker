// Imports
import React, { createContext, useReducer } from "react";

// Reducer funtion (current state, action)
export const AppReducer = (state, action) => {
    switch(action.type) {
        default:
            return state
    }
}

// Initial values of variables
const initialState = {
    budget : 2000,
    expenses : [
        {id : 1, name: 'Shopping',          cost : 40},
        {id : 2, name: 'Holiday',           cost : 50},
        {id : 3, name: 'Transportation',    cost : 40},
        {id : 4, name: 'Fuel',              cost : 90},
        {id : 5, name: 'Child Care',        cost : 10}
    ]
};

// Create Context
export const AppContext = createContext();

// Create Context Provider (It wraps the components we want to pass the value down)
export const AppProvider = (props) => {
    // const [initial state, dispatch function] = useReducer(reducer function, initial state value)
    const [state, dispatch] = useReducer(AppReducer, initialState)

  return (
    <AppContext.Provider value={ {
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
    }}>
        {props.children}
    </AppContext.Provider>
  )
}
