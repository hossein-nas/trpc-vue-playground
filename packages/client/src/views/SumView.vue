<template>
  <div>
    <div>
      <input type="text" v-model="a" />
    </div>
    <div>
      <input type="text" v-model="b" />
    </div>
    <div>
      <!-- Show Result of two numbers here (note: You should display result when data is ready)-->
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useQuery } from "@tanstack/vue-query";
import { ref, computed } from "vue";
import useTRPC from "../composables/useTRPC";
const { injectTRPC } = useTRPC();
const trpc = injectTRPC();

const a = ref<number>();
const b = ref<number>();

/**
 * TODO 3: Send and object containing `a` and `b` field as input to `sum` API
 * and then display result in UI
 */
const res = useQuery({
  /* Create query object according to what you have learn so far */
});
</script>
