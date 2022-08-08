//import { GetCharacters, GetComics } from "../../services/MarvelServices";

import AvatarBar from "../../components/AvatarBar";
import ComicsBoard from "../ComicsBoard";
//import { useQuery } from 'react-query';

const Comics = () => {


    // const {
    //     data,
    //     error,
    //     status,
    // } = useQuery('COMIC_CHARACTERS', GetCharacters());
    // console.log(error);

    // const {
    //     data,
    //     error,
    // } = useQuery('COMICS', GetComics({}));
    //console.log(error, data);


    return <div>
        <AvatarBar />
        <ComicsBoard />
    </div>
};

export default Comics;