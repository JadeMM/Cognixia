import React, {useState, useEffect} from 'react';
import GalleryItem from './galleryItem'
import ScrollWatcher from 'scroll-watcher'
import Section from './section';
const watcher = new ScrollWatcher()

function Gallery(props) {
    const imageHeight = 200
    const [imageList, updateImageList] = useState(props.images.slice(0,6))
    const maxRange = props.images.length

    //change images in array based on scroll
    const updateScroll = function(e) {
        const row = Math.floor(e.scrollY / (imageHeight * .6)) * 3
        if (e.scrollingDown) {
            const inc = (row + 9) < maxRange ? (row + 9) : maxRange
            updateImageList(props.images.slice(0, inc))
        }  
    }

    useEffect(() => watcher.on("scrolling", updateScroll), [])

    return (
        <div style={props.style}>
            {imageList.map( (image) => {
                return <div id={image.id} key={image.id}><GalleryItem image={image.src} /></div>
            })}
            </div>
    )
}
export default Section(Gallery)