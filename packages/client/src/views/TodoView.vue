<template>
  <div>
    <div v-if="isFetched && allTodos && allTodos.length">
      <div
        v-for="(todo, ind) in allTodos"
        :key="todo.key"
        :class="{ [$style['line-through']]: todo.completed }"
        @click="() => toggleComplete(todo.key)"
      >
        <span> {{ ind + 1 }}. {{ todo.text }} </span>
      </div>
    </div>
    <div v-if="isFetched && allTodos && !allTodos.length">
      You have not created any Todo yet.
    </div>

    <div>
      <h2>Create new Todo</h2>
      <div>
        <input type="text" v-model="text" />
      </div>
      <button type="submit" @click="onCreate">Create</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useMutation, useQuery, useQueryClient } from "@tanstack/vue-query";
import { ref } from "vue";
import useTRPC from "../composables/useTRPC";
const { injectTRPC } = useTRPC();
const trpc = injectTRPC();
const queryClient = useQueryClient();

const text = ref<string>("");

const {
  data: allTodos,
  isError,
  error,
  isFetching,
  isFetched,
} = useQuery({
  queryKey: ["todos"],
  queryFn: () => trpc.allTodos.query(),
});

const { mutate: addTodo, isLoading } = useMutation({
  mutationKey: ["add-todo", text],
  mutationFn: () => trpc.addTodo.mutate({ text: text.value }),
  async onSuccess() {
    await queryClient.invalidateQueries({
      queryKey: ["todos"],
    });
  },
});

const { mutate: toggleTodo, isLoading: toggleTodoIsLoading } = useMutation({
  mutationKey: ["toggle-todo-completion"],
  mutationFn: (key: string) => {
    return trpc.toggleTodoCompletion.mutate({ key: key });
  },
  async onSuccess() {
    await queryClient.invalidateQueries({
      queryKey: ["todos"],
    });
  },
});

const onCreate = () => {
  if (text.value.length > 3) {
    addTodo();
  } else {
    alert("Your text is too short.");
  }
};

const toggleComplete = (key: string) => {
  toggleTodo(key);
};
</script>

<style module lang="scss">
.line-through {
  text-decoration: line-through;
}
</style>
