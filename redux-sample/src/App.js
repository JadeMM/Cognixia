import React from 'react';
import Footer from './redux/components/Footer'
import AddTodo from './redux/containers/AddTodo'
import VisibleTodoList from './redux/containers/VisibleTodoList'

function App() {
  return (
    <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
  </div>
  );
}

export default App;
