import "./styles.css";

import { useContext, useState } from "react";

import BarPaginationBar from "./BoardPaginationBar";
import BoardHeader from "./BoardHeader";
import ComicCard from "../../components/ComicCard";
import { ComicItemProps } from "./ComicsBoard.props";
import { GetComics } from "../../services/MarvelServices"
import { SearchAndFilterProviderContext } from "../../contexts/MarvelApp";
import { useQuery } from 'react-query';

const ComicsBoard = () => {
    const [state, dispatch] = useContext(SearchAndFilterProviderContext);
    const [page, setPage] = useState(1);

    const {
        data,
        error,
        status,
    } = useQuery(['Comics', { titleStartsWith: state.searchValue, characters: state.characters }, page], GetComics, {

        keepPreviousData: true,
        retry: 0
    });
    const comicsData: ComicItemProps[] = data?.results ? transformComicData(data?.results) : [];
    const onPaginationUpdate = (currentIndex: number) => {
        setPage(currentIndex);
    }

    const onClearFilters = () => {
        dispatch({ type: "clearFilters" });
    }

    return status === 'loading' ?
        (<div>Loading data ...</div>) :
        status === 'error' ?
            <div>{error.message}</div> :
            <div className="comics-board-container">
                <BoardHeader
                    title={state.searchValue ? "search results" : "comics"}
                    searchEnabled={!!state.searchValue}
                    isFilterEnabled={!!state.characters.length}
                    onClear={onClearFilters}
                />
                <div className="comics-container">
                    {comicsData && comicsData.map(comicData => <ComicCard key={comicData.id} {...comicData} />)}
                </div>
                <BarPaginationBar
                    totalCount={data?.total}
                    onPaginationButtonClick={onPaginationUpdate}
                    currentIndex={page}
                />
            </div>
};

export function transformComicData(responseData: any) {
    return responseData.map((comicData: any) => {
        const {
            id,
            title,
            issueNumber,
            thumbnail
        } = comicData;

        return {
            id,
            title,
            issueNumber,
            thumbnail: thumbnail.path + "." + thumbnail.extension,
        }
    });

}

export default ComicsBoard;