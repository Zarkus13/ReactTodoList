import React from 'react';
import { Route, Routes } from 'react-router-dom';
import TodoList from './pages/TodoList';
import TodoItem from './pages/TodoItem';

const Routing = () =>
  <Routes>
    <Route path="/" element={<TodoList />} />
    <Route path="/item/:id" element={<TodoItem />} />
  </Routes>;

export default Routing;