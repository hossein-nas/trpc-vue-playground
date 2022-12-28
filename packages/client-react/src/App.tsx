import { useState } from "react";
import styles from "./App.module.scss";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { trpc } from "./utils/trpc";
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import { httpBatchLink } from "@trpc/client";
import HomeView from "./views/HomeView";
import NameView from "./views/NameView";
import SumView from "./views/SumView";
import TodoView from "./views/TodoView";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  const [queryClient] = useState(() => new QueryClient());

  const [trpcClient] = useState(() => {
    return trpc.createClient({
      links: [
        httpBatchLink({
          url: "http://localhost:8080/trpc",
        }),
      ],
    });
  });

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false}/>
        <BrowserRouter>
        <header className={styles.Header}>
          <Link to="/" > Greeting </Link>
          <Link to="/name" > Greet Me </Link>
          <Link to="/sum" >Sum</Link>
          <Link to="/todo" >Todo</Link>
        </header>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/name" element={<NameView />} />
          <Route path="/sum" element={<SumView />} />
          <Route path="/todo" element={<TodoView />} />
        </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </trpc.Provider>
  );
}

export default App;
