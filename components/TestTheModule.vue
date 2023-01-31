<script setup lang="ts">
const { $io } = useNuxtApp()

const getMessage = () => {
  return $io.emit('message', { data: 'hello' })
}

const message = ref(getMessage())
</script>

<template>
  <p>{{ message }}</p>
</template>
