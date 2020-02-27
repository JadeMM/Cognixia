import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormSection from './formSection/FormSection'
import PhotoSection from './photoSection/PhotoSection'

class App extends React.Component {

  render() {
    return (
      <div>
        <FormSection/>
        <PhotoSection/>
      </div>
    );
  }
}

export default App;
