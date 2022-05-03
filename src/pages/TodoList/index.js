import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const TodoList = () => {
  const storageItems = JSON.parse(localStorage.getItem('todo-items') || '[]');

  const [itemsList, setItemsList] = useState(storageItems);
  const [itemToAdd, setItemToAdd] = useState('');

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const onAddItem = useCallback(() => {
    const newItemsList = itemsList.concat([itemToAdd]);

    setItemToAdd('');
    setItemsList(newItemsList);

    localStorage.setItem('todo-items', JSON.stringify(newItemsList));
  }, [itemsList, itemToAdd]);

  return (
    <>
      <div>
        <input
          type="text"
          value={itemToAdd}
          onChange={(event) => onItemToAddChange(event, setItemToAdd)}
          ref={inputRef}
        />

        <button onClick={() => onAddItem()}>
          Add item
        </button>
      </div>

      <ul>
        {itemsList.map((item, id) =>
          <li key={id}>
            <Link to={`/item/${id}`}>{item}</Link>
          </li>
        )}
      </ul>
    </>
  );
};

const onItemToAddChange = (event, setItemToAdd) =>
  setItemToAdd(event.target.value);

export default TodoList;