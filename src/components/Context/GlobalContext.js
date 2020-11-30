import React, { useState, useEffect } from "react"
import { createContext, useContext, useReducer } from "react"

const GlobalStateContext = createContext()
const GlobalDispatchContext = createContext()

//Reducer
const GlobalReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME": {
      return { ...state, currentTheme: action.theme }
    }
    case "LOAD_MOVIEDATA": {
      return { ...state, movieData: action.movieData }
    }
    case "HOVERED": {
      return { ...state, cursorStyle: action.cursorStyle }
    }
    case "POINTER": {
      return { ...state, cursorStyle: action.cursorStyle }
    }
  }
}

//Provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(GlobalReducer, {
    currentTheme:
     'dark',
    movieData: null,
    cursorStyle: "pointer",
  })

  return (
    <GlobalDispatchContext.Provider value={dispatch}>
      <GlobalStateContext.Provider value={state}>
        {children}
      </GlobalStateContext.Provider>
    </GlobalDispatchContext.Provider>
  )
}

//custom Hooks

export const useGlobalDispatchContext = () => useContext(GlobalDispatchContext)
export const useGlobalStateContext = () => useContext(GlobalStateContext)
