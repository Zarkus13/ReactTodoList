import { createSlice } from '@reduxjs/toolkit';

const todoListReducer = createSlice({
  name: 'todoList',
  initialState: {
    list: JSON.parse(localStorage.getItem('todo-items') || '[]')
  },
  reducers: {
    addTodoItem: (state, action) => {
      const newTodoList = state.list.concat([ action.payload ]);

      localStorage.setItem('todo-items', JSON.stringify(newTodoList));

      return {
        ...state,
        list: newTodoList
      };
    }
  }
});

export const { addTodoItem } = todoListReducer.actions;

export default todoListReducer.reducer;