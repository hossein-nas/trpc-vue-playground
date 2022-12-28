<template>
  <div>
    <div v-if="isFetching">Is fetching ...</div>
    <div v-if="isLoading">Is loading ...</div>
    <div v-else-if="greetingMessage && isFetched">
      {{ greetingMessage }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import useTRPC from "../composables/useTRPC";
import { useQuery } from "@tanstack/vue-query";
const { injectTRPC } = useTRPC();
const trpc = injectTRPC();

const {
  data: greetingMessage,
  isLoading,
  isFetched,
  isFetching,
} = useQuery({
  queryKey: ["greet me"],
  queryFn: () => trpc.greeting.query({ name: "Hossein Nasiri" }),
});
</script>
