<script setup lang="ts">
import type { RouterLink } from "vue-router";
import useTRPC from "./composables/useTRPC";

const { provider } = useTRPC();
provider();
</script>

<template>
  <header :class="[$style.Header]">
    <RouterLink :to="{ name: 'home' }">Greeting</RouterLink>
    <RouterLink :to="{ name: 'name' }">Greet Me</RouterLink>
    <RouterLink :to="{ name: 'sum' }">Sum</RouterLink>
    <RouterLink :to="{ name: 'todo' }">Todo</RouterLink>
  </header>
  <RouterView />
</template>

<style module lang="scss">
.Header {
  padding: 1rem 0;
  > * + * {
    margin-left: 1rem;
  }
}
</style>
