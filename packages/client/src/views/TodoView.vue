<template>
  <div>
    <!-- TODO 5: Uncomment this -->
    <!--     <div v-if="isFetched && allTodos && allTodos.length">
      <div v-for="(todo, ind) in allTodos" :key="todo.key">
        {{ ind + 1 }}. {{ todo.text }}
      </div>
    </div>
    <div v-if="isFetched && allTodos && !allTodos.length">
      You have not created any Todo yet.
    </div> -->

    <div>
      <h2>Create new Todo</h2>
      <div>
        <input type="text" v-model="text" />
      </div>
      <button type="submit">Create</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useMutation, useQuery, useQueryClient } from "@tanstack/vue-query";
import { ref } from "vue";
import useTRPC from "../composables/useTRPC";
const { injectTRPC } = useTRPC();
const trpc = injectTRPC();
// Uncomment this in case you need this
// const queryClient = useQueryClient();

const text = ref<string>("");

const {} = useQuery({
  /* TODO 4: hit `allTodos` api and fetch all todos */
});

const {} = useMutation({
  /* TODO 6: hit 'addTodo' api and add new todo in backend */
});

const onCreate = () => {
  /* TODO 7: Implement this */
};

const {} = useMutation({
  /* TODO 8: hit 'toggleTodoCompletion' api and toggle todo completion state in backend */
});

const toggleTodo = () => {
  /* TODO 9: Implement this */
};

/* TODO 10: on @click="toggleTodo" event to each rendered todo in UI 
and show any signifier that specific todo is completed using css 
*/
</script>
