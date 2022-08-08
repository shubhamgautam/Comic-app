import { appState, initialState, reducer } from "./reducer"

import React from "react"

export const SearchAndFilterProviderContext = React.createContext<[appState, React.Dispatch<any>]>([
    initialState,
    () => null
])

export type SearchAndFilterProps = {
    children: React.ReactElement
}

export const SearchAndFilterProvider = (props: SearchAndFilterProps) => {
    const [state, dispatch] = React.useReducer(reducer, initialState)

    return (
        <SearchAndFilterProviderContext.Provider value={[state, dispatch]}>
            {props.children}
        </SearchAndFilterProviderContext.Provider>
    )
}
