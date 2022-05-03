import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const TodoItem = () => {
  const params = useParams();

  const storageItems = useSelector((state) => state.todoList.list);

  const id = params.id && Number(params.id);
  const itemFound = storageItems[id];

  return (
    itemFound ?
      <div>{itemFound}</div> :
      <div>Invalid item id !</div>
  );
};

export default TodoItem;