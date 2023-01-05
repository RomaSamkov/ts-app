import React, { useRef } from 'react';

const AddToDo: React.FC = () => {
  const titleInputRef = useRef<HTMLInputElement>(null);

  function submitHandler(e: React.FormEvent) {
    e.preventDefault();
    console.log(titleInputRef.current?.value);
  }
  return (
    <form onSubmit={submitHandler}>
      <div>
        <span>Add Totle</span>
        <input type="text" id="add-todo" ref={titleInputRef} />
      </div>
      <button type="submit">Add ToDo</button>
    </form>
  );
};

export default AddToDo;
