export type appState = {
    searchValue: string;
    characters: number[];
}

export type Action =
| { type: 'updateSearch', data: string }
| { type: 'updateCharacter', data: number[] }
| { type: 'clearFilters' }

export const reducer = (state:appState, action:Action) => {
    switch (action.type) {
      case "updateSearch":
        return {
          ...state,
          searchValue: action.data
        }

        case "updateCharacter":
            return {
            ...state,
            characters: [...action.data]
          }

        case "clearFilters":
            return {
                ...state,
                characters: []
              }
  
      default:
        return state
    }
  }
  
  export const initialState:appState = {
    searchValue: "",
    characters: []
  }