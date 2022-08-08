import "./AvatarBar.css";

import { useCallback, useContext, useMemo } from "react";

import Avatar from "../Avatar"
import Carousel from "../Carousel";
import { GetCharacters } from "../../services/MarvelServices";
import { SearchAndFilterProviderContext } from "../../contexts/MarvelApp";
import { useQuery } from 'react-query';

const AvatarBar = () => {

    const {
        data,
        error,
        status,
    } = useQuery(['Comic_character'], GetCharacters, { retry: 0 });

    const results = data?.results;
    const finalResults = useMemo(() => results ? transformData(results) : [], [results]);
    const [state, dispatch] = useContext(SearchAndFilterProviderContext);


    const onAvatarSelect = useCallback((charId: number, isSelected: boolean) => {
        if (isSelected) {
            dispatch({ type: "updateCharacter", data: [...state.characters, charId] })

        } else {
            const filteredIds = state.characters.filter((id: number) => id !== charId);
            dispatch({ type: "updateCharacter", data: filteredIds })

        }

    }, [dispatch, state.characters])

    const getAvatarElems = useCallback(() => {
        if (!finalResults.length) {
            return [<></>]
        }

        return finalResults.map((data) => <Avatar
            key={data.id}
            {...data}
            onAvatarSelect={onAvatarSelect}
            isSelected={Boolean(state.characters.length && (state.characters.indexOf(data.id) !== -1))}
        />)
    }, [finalResults, onAvatarSelect, state.characters])

    return status === 'loading' ? (
        <p>Loading...</p>
    ) : status === 'error' ? (
        <p>Error: {error.message}</p>
    ) : (<div className="avatar-bar">
        {state.searchValue && <div className="bar-wrapper"></div>}
        <Carousel>{getAvatarElems()}</Carousel>

    </div>)
};

function transformData(responseData: any[]) {
    return responseData.map(item => {
        const {
            id,
            name,
            thumbnail
        } = item;
        return {
            id,
            name,
            thumbnail: thumbnail.path + '.' + thumbnail.extension
        }
    })
}

export default AvatarBar;