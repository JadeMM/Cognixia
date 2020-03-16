import React from 'react';
import Button from 'react-bootstrap/Button';

export default class PictureCarousel extends React.Component {
    constructor() {
        super();
        this.state = {
          photos: [],
          current: 0,
          max: 30
        }
    }

    //create array of image addresses and add keydown listener
    componentDidMount = () => {
        let arr = [];
        for(let i = 1; i<this.state.max+1; i++){
            arr.push('https://picsum.photos/400?random' + i);
        }
        this.setState({photos: arr}); 

        document.addEventListener('keydown', this.arrowHandler, false);
    }

    //remove keydown listener
    componentWillUnmount = () => {
        document.removeEventListener('keydown', this.arrowHandler, false);
    }

    //move images left or right according to which arrow key was pressed
    arrowHandler = (e) => {
        if(e.keyCode === 37)
            this.clickHandler('left');
        if(e.keyCode === 39)
            this.clickHandler('right');
    }

    //move images left or right according to which arrow button was pressed
    clickHandler = (dir) => {
        if (dir === 'right') {
            if(this.state.current+1<this.state.max) {
                this.setState({current: this.state.current + 1});
            } else {
                this.setState({current: 0});
            } 
        } else {//if(dir === 'left') 
            if(this.state.current-1>-1) {
                this.setState({current: this.state.current - 1});
            } else {
                this.setState({current: this.state.max-1});
            }
        }
    }

    //render arrow buttons and image holder
    render() {
        return (
            <div style={{padding: '30px', position: 'center'}}>
                <Arrow 
                    dir={'left'} 
                    clickHandler={this.clickHandler} 
                    glyph='<'
                />
                <ImageSlide url={this.state.photos[this.state.current]} />
                <Arrow 
                    dir={'right'} 
                    clickHandler={this.clickHandler} 
                    glyph='>'
                />
            </div>
        )
    }
}

//holds image given by url
const ImageSlide = ({url}) => {
    const styles = {
        backgroundSize: 'cover'
    }

    return (
        <span style={styles} ><img src={url} /></span>
    )
}

//create arrow buttons
const Arrow = ({dir, clickHandler, glyph}) => (
    <Button style={{margin: '10px'}} onClick={() => clickHandler(dir)}>
        {glyph}
    </Button>
)