import React, {useState} from 'react';
import { LazyLoadImage, trackWindowScroll } from 'react-lazy-load-image-component';

import Container from 'react-bootstrap/Container';

const Gallery = (props) => {
    //let [arrPointer, updateArrPointer] = useState(0); 
    let scrollPosition = useState(window.pageYOffset);

    return (
        <Container>
                {props.photos.map( (item) => {
                    return (
                        // <LazyLoadImage
                        //     src={item}
                        //     scrollPosition={scrollPosition}
                        // />
                        <img alt="random" src={item}/>
                    )
                })}
        </Container>
    )
}

export default trackWindowScroll(Gallery);