import React from 'react';
// import CardGroup from 'react-bootstrap/CardGroup';
// import Card from 'react-bootstrap/Card';
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

    componentDidMount = () => {
        let arr = [];
        for(let i = 1; i<this.state.max+1; i++){
            arr.push('https://picsum.photos/400?random' + i);
        }
        this.setState({photos: arr}); 

        document.addEventListener('keydown', this.arrowHandler, false);
    }

    componentWillUnmount = () => {
        document.removeEventListener('keydown', this.arrowHandler, false);
    }

    arrowHandler = (e) => {
        if(e.keyCode === 37)
            this.clickHandler('left');
        if(e.keyCode === 39)
            this.clickHandler('right');
    }

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

const ImageSlide = ({url}) => {
    const styles = {
        backgroundSize: 'cover'
    }

    return (
        <span style={styles} ><img src={url} /></span>
    )
}

const Arrow = ({dir, clickHandler, glyph}) => (
    <Button style={{margin: '10px'}} onClick={() => clickHandler(dir)}>
        {glyph}
    </Button>
)