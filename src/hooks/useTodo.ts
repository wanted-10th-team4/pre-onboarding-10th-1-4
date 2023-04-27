import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Todo } from '@type/constants';
import { createTodo, deleteTodo, getTodos, updateTodo } from '@api/todo';

export default function useTodo() {
  const navigate = useNavigate();
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await getTodos();
        setTodos(response);
      } catch (e) {
        setError('할 일 목록을 불러오는 데 실패하였습니다.');
      }
    };
    fetchTodos();
  }, []);
  const handleNewTodoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(event.target.value);
  };
  /* 새로운 todo 추가 핸들러 */
  const handleNewTodoSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await createTodo({ todo: newTodo });
      setTodos(todo => [...todo, response]);
      setNewTodo('');
    } catch (e) {
      setError('할 일을 추가하는데 실패하였습니다.');
    }
  };

  /* TODO: 삭제 */
  const handleDeleteTodo = async (id: number) => {
    try {
      await deleteTodo(id);
      setTodos(todo => todo.filter(todoItem => todoItem.id !== id));
    } catch (e) {
      setError('할 일을 삭제하는 데 실패하였습니다.');
    }
  };

  const handleUpdateTodo = async (updatedTodo: Todo) => {
    try {
      const response = await updateTodo(updatedTodo.id, {
        todo: updatedTodo.todo,
        isCompleted: updatedTodo.isCompleted,
      });
      setTodos(todo => todo.map(todoItem => (todoItem.id === response.id ? { ...todoItem, ...response } : todoItem)));
    } catch (e) {
      setError('할 일을 수정하는 데 실패하였습니다.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/signin');
  };

  return {
    todos,
    newTodo,
    handleNewTodoChange,
    handleNewTodoSubmit,
    handleDeleteTodo,
    handleUpdateTodo,
    handleLogout,
    error,
  };
}
