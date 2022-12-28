<template>
  <div>
    <div>
      <input type="text" v-model="a" />
    </div>
    <div>
      <input type="text" v-model="b" />
    </div>
    <div v-if="isFetching">Fetching result ...</div>
    <div v-else-if="isError">{{ error }}</div>
    <div v-else-if="isFetched && result">
      {{ result }}
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

const {
  data: result,
  isFetched,
  error,
  isError,
  isFetching,
} = useQuery({
  queryKey: ["sum", a, b],
  queryFn: ({ queryKey }) =>
    trpc.sum.query({ a: Number(queryKey[1]), b: Number(queryKey[2]) }),
  retry: 0,
  enabled: computed(() => !!(a.value && b.value)),
  onError(err) {
    if (err) {
      console.log(err);
    }
  },
});
</script>
