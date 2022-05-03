import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addTodoItem } from '../../reducers/todoListReducer';

const TodoList = () => {
  const itemsList = useSelector((state) => state.todoList.list);
  const [itemToAdd, setItemToAdd] = useState('');

  const dispatch = useDispatch();
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const onAddItem = useCallback(() => {
    dispatch(addTodoItem(itemToAdd));
    setItemToAdd('');
  }, [dispatch, addTodoItem, itemToAdd, setItemToAdd]);

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