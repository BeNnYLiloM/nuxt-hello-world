<template>
  <div>
    Hello {{ name }} welcome to test
  </div>
</template>

<script setup lang="ts">

defineProps<{
  name: string
}>()

</script>