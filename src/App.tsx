import React from 'react';
import AddToDo from './components/AddToDo';
import ToDoList from './components/ToDoList';

const App: React.FC = () => {
  const todos = [{ id: '1', title: 'text' }];
  return (
    <div className="App">
      <AddToDo />
      <ToDoList todos={todos} />
    </div>
  );
};

export default App;
