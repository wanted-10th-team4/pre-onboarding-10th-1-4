import React, { useState, useRef } from 'react';
import { Todo } from '@type/constants';

export interface TodoItemProps {
  todo: Todo;
  handleDelete: (id: number) => Promise<void>;
  handleUpdate: (updatedTodo: Todo) => Promise<void>;
}

export default function TodoItem(props: TodoItemProps) {
  const { todo, handleDelete, handleUpdate } = props;
  const inputRef = useRef<HTMLInputElement>(null);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);

  const updateTodoHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleUpdate({ ...todo, todo: inputRef.current ? inputRef.current.value : todo.todo });
    setIsEditMode(false);
  };

  return (
    <li className="flex w-full h-12 bg-bright my-2 p-3 items-center">
      <input
        type="checkbox"
        defaultChecked={todo.isCompleted}
        id="todo-check"
        onChange={event => {
          handleUpdate({ ...todo, isCompleted: event.target.checked });
        }}
      />
      {!isEditMode ? (
        <div className="flex w-full justify-between">
          <span className="ml-2 whitespace-nowrap text-ellipsis overflow-hidden w-80">{todo.todo}</span>
          <div>
            <button type="button" data-testid="modify-button" className="" onClick={() => setIsEditMode(true)}>
              수정
            </button>
            <button
              type="button"
              data-testid="delete-button"
              className="ml-2"
              onClick={() => {
                if (window.confirm('정말 삭제하시겠습니까?')) handleDelete(todo.id);
              }}>
              삭제
            </button>
          </div>
        </div>
      ) : (
        <form className="flex w-full justify-between" onSubmit={updateTodoHandler}>
          <input
            data-testid="modify-input"
            defaultValue={todo.todo}
            ref={inputRef}
            className="ml-2 text-primary py-1"
          />
          <div>
            <button type="submit" data-testid="submit-button">
              제출
            </button>
            <button type="button" data-testid="cancel-button" onClick={() => setIsEditMode(false)} className="ml-2">
              취소
            </button>
          </div>
        </form>
      )}
    </li>
  );
}
