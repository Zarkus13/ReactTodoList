import React from 'react';
import { useParams } from 'react-router-dom';

const TodoItem = () => {
  const params = useParams();
  const storageItems = JSON.parse(localStorage.getItem('todo-items') || '[]');

  const id = params.id && Number(params.id);
  const itemFound = storageItems[id];

  return (
    itemFound ?
      <div>{itemFound}</div> :
      <div>Invalid item id !</div>
  );
};

export default TodoItem;