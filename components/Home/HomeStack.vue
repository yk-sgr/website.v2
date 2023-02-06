<template>
  <div class="flex w-1/3 flex-col gap-2 sm:w-auto">
    <h2 class="text-xl underline">{{ props.stack.name }}</h2>
    <ul class="flex flex-col gap-2">
      <li v-for="tech in props.stack.technologies" :key="tech">{{ tech }}</li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { Stack } from "~~/lib/types";

interface Props {
  stack: Stack;
}
const props = defineProps<Props>();
</script>
