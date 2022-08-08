import "./Avatar.css";

import { useCallback, useState } from "react";

import { Avatar } from "./Avatar.props";

const HeroPersona = (props: Avatar): React.ReactElement => {
    const {
        id,
        name,
        thumbnail,
        onAvatarSelect,
        isSelected = false
    } = props;
    const [isChecked, setIsChecked] = useState(isSelected);

    const onAvatarClick = useCallback(() => {
        setIsChecked(() => !isChecked);
        onAvatarSelect(id, !isChecked);

    }, [isChecked, id, onAvatarSelect])

    return <div className="avatar-container" onClick={onAvatarClick}>
        <div className="hero-avatar avatar">
            <img src={thumbnail} alt={name} />
        </div>
        {isSelected && <div className="persona-checked-container avatar">
            <div className="check" />
        </div>}

    </div>

}
export default HeroPersona;