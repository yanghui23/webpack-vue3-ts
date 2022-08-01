<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

console.log('router:', router)
console.log('route:', route)

console.log('current route:', router.currentRoute.value)
</script>
