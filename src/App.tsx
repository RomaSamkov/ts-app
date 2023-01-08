import React, { useState } from 'react';
import AddToDo from './components/AddToDo';
import ToDoList from './components/ToDoList';
import { IItem } from './types/todo';

const App: React.FC = () => {
  const [todos, setTodos] = useState<IItem[]>([]);

  function addTodoHandler(todo: IItem) {
    setTodos(prevTodos => {
      return [
        ...prevTodos,
        {
          id: Math.random().toString(),
          title: todo.title,
        },
      ];
    });
  }
  function removeTodoHandler(id: string): void {
    setTodos(prevTodos => {
      return prevTodos.filter(item => {
        return item.id !== id;
      });
    });
  }

  return (
    <div className="App">
      <AddToDo onAddTodo={addTodoHandler} />
      <ToDoList onRemoveTodo={removeTodoHandler} todos={todos} />
    </div>
  );
};

export default App;
