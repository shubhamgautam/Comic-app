import { BoardPaginationProps } from "./ComicsBoard.props";

const BarPaginationBar = (props: BoardPaginationProps) => {
    const {
        totalCount,
        onPaginationButtonClick,
        currentIndex
    } = props;
    //const [currentIndex, updateCurrentIndex] = useState(1);

    const finalCount = totalCount - (currentIndex * 10 - 10);
    const totalPages = Math.floor(finalCount / 10);
    const isMoreButtonAvailable = totalPages > 5;

    const onPaginationItemClick = (updatedIndex: number) => {
        //updateCurrentIndex(() => updatedIndex);
        onPaginationButtonClick(updatedIndex);
    }

    const onMoreClick = () => {
        onPaginationItemClick(currentIndex + 2);
    }

    const onPrev = () => {
        onPaginationItemClick(currentIndex - 1);
    }

    const onNext = () => {
        onPaginationItemClick(currentIndex + 1);
    }

    const getPaginationButtons = (): React.ReactElement[] => {
        let btnArr: React.ReactElement[] = [];
        let totalLen = totalPages > 5 ? 5 : totalPages;
        for (let i = 0; i < totalLen; i++) {
            if (isMoreButtonAvailable && btnArr.length === 2) {
                btnArr.push(<button key={'more'} className="pagination-button" onClick={onMoreClick}>...</button>)
            } else if (btnArr.length >= 3 && totalPages > 5) {
                const updatedIndex = totalPages - (5 - btnArr.length + 1);
                const className = updatedIndex === currentIndex + 1 ? "pagination-button active" : "pagination-button";
                btnArr.push(<button key={updatedIndex} className={className} onClick={() => onPaginationItemClick(updatedIndex)}>{updatedIndex}</button>);
            } else {
                const updatedIndex = currentIndex + btnArr.length;
                const className = updatedIndex === currentIndex ? "pagination-button active" : "pagination-button";
                btnArr.push(<button key={updatedIndex} className={className} onClick={() => onPaginationItemClick(updatedIndex)}>{updatedIndex}</button>);
            }
        }

        return btnArr;
    }

    return totalCount && totalCount > 10 ? <div className="pagination-bar">
        <button disabled={currentIndex === 1} onClick={onPrev}>&lt;</button>
        {getPaginationButtons()}
        <button
            className="pagination-button"
            disabled={currentIndex === totalPages}
            onClick={onNext}
        >
            &gt;
        </button>
    </div> : <></>
};

export default BarPaginationBar;