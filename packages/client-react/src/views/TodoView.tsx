import React, { useState } from "react";
import { trpc } from "../utils/trpc";
import styles from "./TodoView.module.scss";

const TodoView = () => {
  const [newTodo, setNewTodo] = useState("");
  const utils = trpc.useContext();

  const {
    data: todos,
    isLoading,
    isError,
    error,
    isFetched,
    fetchStatus,
  } = trpc.allTodos.useQuery();

  const { mutate: addTodo } = trpc.addTodo.useMutation({
    onSuccess() {
      utils.allTodos.invalidate();
    },
  });
  const onCreate = () => {
    if (newTodo && newTodo.length > 3) {
      addTodo({
        text: newTodo,
      });
    } else {
      alert("Your text is too short.");
    }
  };

  const { mutate: toggleTodo } = trpc.toggleTodoCompletion.useMutation({
    onSuccess() {
      utils.allTodos.invalidate();
    },
  });

  const onToggle = (key: string) => {
    toggleTodo({ key });
  };

  return (
    <>
      {isLoading && fetchStatus === "fetching" && <div>Is Loading</div>}
      {isFetched && todos?.length && (
        <div>
          {todos.map((todo, index) => {
            return (
              <div
                className={todo.completed ? styles["line-through"] : ""}
                onClick={() => onToggle(todo.key)}
              >
                <span> {index + 1}. </span>
                <span>{todo.text}</span>
              </div>
            );
          })}
        </div>
      )}
      {isFetched && todos?.length === 0 && (
        <div>You have not created any Todo yet.</div>
      )}
      <div>
        <h2>Create New Todo </h2>
        <div>
          <input
            type="text"
            value={newTodo}
            onInput={(e) => setNewTodo(e.currentTarget.value)}
          />
        </div>
        <button type="submit" onClick={() => onCreate()}>
          Create
        </button>
      </div>
    </>
  );
};

export default TodoView;
