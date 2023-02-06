<template>
  <div class="flex flex-col gap-4">
    <h3 class="text-2xl text-white underline">Technologies</h3>
    <div class="flex flex-col gap-10 text-white sm:flex-row">
      <HomeStack v-for="stack in stacks" :key="stack.name" :stack="stack" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Stack } from "~~/lib/types";

const stacks: Stack[] = [
  {
    name: "Backend",
    technologies: ["TypeScript", "Go", "Kotlin"],
  },
  {
    name: "Frontend",
    technologies: ["NuxtJS", "NextJS", "Flutter"],
  },
  {
    name: "Databases",
    technologies: ["PostgreSQL", "MongoDB", "Redis"],
  },
];
</script>
