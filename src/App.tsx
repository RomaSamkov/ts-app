import React from 'react';
import ToDoList from './components/ToDoList';

const App: React.FC = () => {
  const todos = [{ id: '1', title: 'text' }];
  return (
    <div className="App">
      <ToDoList todos={todos} />
    </div>
  );
};

export default App;
