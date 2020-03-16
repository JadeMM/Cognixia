import React from 'react';
import './App.css';
import Gallery from './components/gallery'

const numImages = 20
let images = []

//get images from external source
for (let i = 0; i < numImages; i++) {
  images.push({
    'id': 'image' + i,
    'src':'https://picsum.photos/seed/' + i  + '/200'
  })
}

//cutomize gallery 
const galleryStyle = {
  'display': 'flex',
  'justifyContent': 'space-between',
  'alignItems': 'flex-start',
  'width': '80%',
  'padding': '20px',
  'flexWrap': 'wrap',
  'margin': '0 auto'
}

function App() {
  return (
    <div className="App">
      <Gallery style={galleryStyle} images={images} />
    </div>
  );
}

export default App;
