import type { AppRouter } from "@my-app/server";
import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import { provide, type InjectionKey, inject } from "vue";

const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:8080/trpc",
    }),
  ],
});

const TrpcKey: InjectionKey<typeof trpc> = Symbol("trpc");

export default function useTRPC() {
  return {
    key: TrpcKey,
    provider: () => provide(TrpcKey, trpc),
    injectTRPC: () => {
      const resolve = inject(TrpcKey);
      if (!resolve) {
        throw new Error(`Could not resolve ${TrpcKey.description}`);
      }
      return resolve;
    },
  };
}
