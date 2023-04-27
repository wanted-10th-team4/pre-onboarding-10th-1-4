import { authInstance } from './instance';

type Todo = {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
};

type CreateTodoRequestBody = {
  todo: string;
};

type UpdateTodoRequestBody = {
  todo: string;
  isCompleted: boolean;
};

type CreateTodoResponse = Todo;
type GetTodosResponse = Todo[];
type UpdateTodoResponse = Todo;
type DeleteTodoResponse = void;

export const createTodo = async (requestBody: CreateTodoRequestBody): Promise<CreateTodoResponse> => {
  const response = await authInstance.post(`/todos`, requestBody);
  return response.data;
};

export const getTodos = async (): Promise<GetTodosResponse> => {
  const response = await authInstance.get(`/todos`);
  return response.data;
};

export const updateTodo = async (id: number, requestBody: UpdateTodoRequestBody): Promise<UpdateTodoResponse> => {
  const response = await authInstance.put(`/todos/${id}`, requestBody);
  return response.data;
};

export const deleteTodo = async (id: number): Promise<DeleteTodoResponse> => {
  await authInstance.delete(`/todos/${id}`);
};
