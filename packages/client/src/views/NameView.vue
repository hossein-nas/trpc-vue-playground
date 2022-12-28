<template>
  <div>
    <!-- Display greeting message here -->
  </div>
</template>

<script lang="ts" setup>
import useTRPC from "../composables/useTRPC";
import { useQuery } from "@tanstack/vue-query";
const { injectTRPC } = useTRPC();
const trpc = injectTRPC();

/**
 * TODO 2: Send and object containing `name` field and then get greeting
 * response with your name and display it in UI
 */
const res = useQuery({
  queryKey: ["greet me"],
  queryFn: () =>
    trpc.greeting.query(/* An object containing name field with your name */),
});
</script>
