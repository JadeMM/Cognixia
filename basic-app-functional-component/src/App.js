import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

import FormHolder from './components/form';
import ListHolder from './components/list';


function App() {
    let [value, updateValue] = useState('');
    let [list, updateList] = useState(['test']);

    const handleChange = (e) => {
        updateValue(e.target.value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        let arr = [...list];

        arr.push(value);
        updateList(arr);
        updateValue('');
    }

    const handleDelete = (item) => {
        let arr = [...list];
        const index = arr.indexOf(item);

        if(index !== -1) {
            arr.splice(index,1);
            updateList(arr);
        }
    }

    return (
        <Container>
          <FormHolder value={value} handleChange={handleChange} handleSubmit={handleSubmit} />
          <ListHolder list={list} handleDelete={handleDelete}/>
        </Container>
    );
  }
  
  export default App;
