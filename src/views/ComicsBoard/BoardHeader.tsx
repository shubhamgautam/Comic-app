import { BoardHeaderProps } from "./ComicsBoard.props";
const Boardheader = (props: BoardHeaderProps) => {
    const {
        searchEnabled,
        title,
        isFilterEnabled,
        onClear
    } = props;

    return <div className="comic-board-header">
        {searchEnabled && <div className="comic-board-header-wrapper">

        </div>}
        <div className="comic-board-header-body">
            <div>{title}</div>
            {isFilterEnabled && <button onClick={onClear}>clear all filters</button>}
        </div>
    </div>
}

export default Boardheader;