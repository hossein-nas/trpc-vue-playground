import * as trpc from "@trpc/server";
import * as trpcExpress from "@trpc/server/adapters/express";
import { z } from "zod";
import { v4 as uuid } from "uuid";

import { publicProcedure, router } from "./trpc";
import { inferAsyncReturnType } from "@trpc/server";

export type Todo = {
  key: string;
  text: string;
  completed: boolean
};
let todos: Todo[] = [];

export const appRouter = router({
  greeting: publicProcedure
    .input(
      z
        .object({
          name: z.string(),
        })
        .optional()
    )
    .query(async ({ input }) => {
      if (input && input.name) {
        return `Hello dear ${input.name}.`;
      }

      return "Hello from tRPC v10!!!";
    }),
  sum: publicProcedure
    .input(
      z.object({
        a: z.number(),
        b: z.number(),
      })
    )
    .query(({ input }) => {
      return input.a + input.b;
    }),

  allTodos: publicProcedure.query(() => {
    return [...todos];
  }),

  addTodo: publicProcedure
    .input(
      z.object({
        text: z.string(),
      })
    )
    .mutation(({ input }) => {
      if (input.text) {
        todos.push({
          key: uuid(),
          text: input.text,
          completed: false
        });
      }
    }),
  getTodo: publicProcedure
    .input(
      z.object({
      key: z.string().uuid()
      })
    )
    .query(({ input }) => {
      const foundTodo = todos.find((todo) => todo.key === input.key);
      if (foundTodo) {
        return foundTodo;
      }
      return undefined;
    }),

    toggleTodoCompletion: publicProcedure.input(z.object({
      key: z.string().uuid()
    })).mutation(({input}) => {
      let done = false;
      todos = todos.map((todo) => {
        if( todo.key === input.key){
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      });

      return done
    })
});

export const createContext = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => ({});

export type AppRouter = typeof appRouter;
export type Context = inferAsyncReturnType<typeof createContext>;
