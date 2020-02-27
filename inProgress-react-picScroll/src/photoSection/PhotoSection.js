import React from 'react';
import Container from 'react-bootstrap/Container';
import Gallery from './components/gallery';


class FormSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: []
        }
    }

    componentDidMount() {
        let arr = [];
        for(let i = 1; i<30; i++){
            arr.push('https://picsum.photos/200?grayscale&random' + i);
        }
        this.setState({photos: arr});
    }
    
    render() {
        return (
            <Container>
                <Gallery photos={this.state.photos} />
            </Container>
        );
    }
}

export default FormSection;
