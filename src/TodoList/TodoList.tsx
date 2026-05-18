import React from 'react';
import { Todo } from '../types/Todo';
import { TodoItem } from '../TodoItem/TodoItem';

type Props = {
  todos: Todo[];
  tempTodo: Todo | null;
  loadingTodoIds: number[];
  onDelete: (todoId: number) => void;
  onToggle: (todo: Todo) => void;
};

export const TodoList: React.FC<Props> = ({
  todos,
  tempTodo,
  loadingTodoIds,
  onDelete,
  onToggle,
}) => {
  return (
    <section className="todoapp__main" data-cy="TodoList">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          isProcessed={loadingTodoIds.includes(todo.id)}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}

      {tempTodo && <TodoItem todo={tempTodo} isProcessed />}
    </section>
  );
};
