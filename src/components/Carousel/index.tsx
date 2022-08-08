import "./carousel.css";

import { useEffect, useMemo, useState } from "react";

type CarouselProps = {
    children?: JSX.Element[]
}
const Carousel = (props: CarouselProps): React.ReactElement => {
    const {
        children
    } = props;
    const [currentIndex, setCurrentIndex] = useState(0)
    const [length, setLength] = useState(children?.length)

    const carouselContentStyle = useMemo(() => {
        return { transform: `translateX(-${currentIndex * 12}%)` }
    }, [currentIndex])

    const next = () => {
        if (length && currentIndex < (length - 1)) {
            setCurrentIndex(prevState => prevState + 1)
        }
    }

    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1)
        }
    }



    useEffect(() => {
        setLength(children?.length)
    }, [children])

    return <div className="carousel-container">
        <div className="carousel-wrapper">
            {currentIndex > 0 && <button className="left-arrow" onClick={prev}>
                &lt;
            </button>}
            <div className="carousel-content-wrapper">
                <div className="carousel-content" style={carouselContentStyle}>
                    {children}
                </div>
            </div>
            {
                length && currentIndex < (length - 1) &&
                <button onClick={next} className="right-arrow">
                    &gt;
                </button>
            }
        </div>
    </div>
}

export default Carousel;