import React, { useState } from 'react';
import { IItem } from '../types/todo';

type OnlyTitle = Pick<IItem, 'title'>;

interface IProps {
  onAddTodo: (todo: IItem) => void;
}

const AddToDo: React.FC<IProps> = props => {
  const [todo, titleTodo] = useState<Partial<OnlyTitle>>({});

  function titleHandler(e: React.ChangeEvent<HTMLInputElement>) {
    titleTodo({
      title: e.target.value,
    });
  }

  function submitHandler(e: React.FormEvent) {
    e.preventDefault();
    if (!todo.title) {
      return;
    }
    props.onAddTodo(todo as IItem);
  }
  return (
    <form onSubmit={submitHandler}>
      <div>
        <span>Add Totle</span>
        <input type="text" id="add-todo" onChange={titleHandler} />
      </div>
      <button type="submit">Add ToDo</button>
    </form>
  );
};

export default AddToDo;
