import React, {useEffect, useState} from 'react';

//get image from source
function Image(props) {

    let [src, updateSrc] = useState('');

    useEffect( () => {
        updateSrc(props.image)
    }, [props.image])

    return (
        <img alt='' src={src} style={props.style}></img>
    )
}
export default Image