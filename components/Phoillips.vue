<script setup lang="ts">
const { $io } = useNuxtApp()
const count = useState<number>('count', () => $io.emit('count'))

watchEffect(() => $io.emit('count', { data: 'count' }))
</script>

<template>
  <button @click="count++">
    +
  </button>
  <button @click="count--">
    -
  </button>
  <p>Count: {{ count }}</p>
</template>
