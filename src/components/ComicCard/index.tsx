import "./styles.css";

import { ComicCardProps } from "./ComicCard.props";

const ComicCard = (props: ComicCardProps) => {
    const {
        thumbnail,
        title,
        issueNumber
    } = props;

    return <div className="card">
        <img src={thumbnail} alt={title} />
        <div className="card-body">
            <div className="comic-info">
                <span className="comic-title">{title}</span>
                <span className="comic-issue">{`#${issueNumber}`}</span>
            </div>
        </div>
    </div>
};

export default ComicCard;