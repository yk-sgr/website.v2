<template>
  <NuxtLink
    class="group text-white transition-all duration-200 ease-in-out"
    :to="props.to"
  >
    <span
      class="bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all duration-200 ease-out group-hover:bg-[length:100%_2px]"
    >
      <slot />
    </span>
  </NuxtLink>
</template>

<script lang="ts" setup>
interface Props {
  to: string;
}
const props = defineProps<Props>();
</script>
