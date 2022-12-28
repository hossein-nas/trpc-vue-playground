import { createTRPCReact } from "@trpc/react-query";
import type { AppRouter } from '@my-app/server';

export const trpc = createTRPCReact<AppRouter>()