import React, { useState } from "react";
import { trpc } from "../utils/trpc";
import styles from "./TodoView.module.scss";

const TodoView = () => {
  const [newTodo, setNewTodo] = useState("");
  const utils = trpc.useContext();

  /* 
  TODO 4: hit `allTodos` api and fetch all todos 
  const {
    data: todos,
  } = trpc.<Todo list endpoint>.useQuery();
   */

  /* 
  TODO 6: hit 'addTodo' api and add new todo in backend 
  const { mutate: addTodo } = trpc.<`addTodo` end point mutation> ...
  */

  /* 
  TODO 7: Implement this
  const onCreate = () => {
  };
  */

  /* 
  TODO 8: hit 'toggleTodoCompletion' api and toggle todo completion state in backend 
  const { mutate: toggleTodo } = trpc.<`toggleTodoCompletion` end point mutation> ...
  */

  /* 
  TODO 9: Implement this 
  const onToggle = (key: string) => {
  };
  */

  return (
    <>
      {/*       
      TODO 5: Uncomment this when you have completed TODO 4 and successfully fetched todos list

      {isLoading && fetchStatus === "fetching" && <div>Is Loading</div>}
      {isFetched && todos?.length && (
        <div>
          {todos.map((todo, index) => {
            return (
              <div
                className={todo.completed ? styles["line-through"] : ""}
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
      )} */}
      <div>
        <h2>Create New Todo </h2>
        <div>
          <input
            type="text"
            value={newTodo}
            onInput={(e) => setNewTodo(e.currentTarget.value)}
          />
        </div>
        <button type="submit">Create</button>
      </div>
    </>
  );
};

export default TodoView;
