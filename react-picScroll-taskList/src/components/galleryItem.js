import React from 'react';
import Image from './image'
function GalleryItem(props) {
    return (
        <div style={props.style}>
            <Image image={props.image} />
        </div>
    )
}
export default GalleryItem