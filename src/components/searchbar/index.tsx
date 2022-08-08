import "./searchbar.css";

import { ChangeEvent, useContext } from "react";

import { SearchAndFilterProviderContext } from "../../contexts/MarvelApp"
import { SearchBarProps } from "./searchbar.props";

const SearchBar = (props: SearchBarProps) => {
    const [state, dispatch] = useContext(SearchAndFilterProviderContext)

    const {
        placeholder = "Search...",

    } = props;

    const onInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: "updateSearch", data: evt.target.value })
        if (evt.target.value) {
            dispatch({ type: "clearFilters" });
        }

    };

    return <div className="search-bar">
        <input placeholder={placeholder} value={state.searchValue} className="input-box" onChange={onInputChange} />
    </div>
};

export default SearchBar;
