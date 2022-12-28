import express from "express";
import cors from 'cors';
import * as trpcExpress from '@trpc/server/adapters/express';
import { appRouter, createContext, AppRouter } from './server';
export { AppRouter, Context } from './server'

const app = express();
const port = 8080;
app.use(cors())

app.get("/", (req, res) => {
  res.send("Hello from server");
});

app.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext
  })
)


app.listen(port, () => {
  console.log(`server listening at http://localhost:${port}`);
});
