<template>
  <div v-for="question in questions" :key="question.value">
  <div>{{ question.value }}</div>
  <div v-for="option in question.options" :key="question.value + option">{{ option }}</div>
  </div>
</template>

<script setup lang="ts">
const questions: Array<Question> = [
  {
    value: 'Do you like dogs?',
    options: ['yes', 'no']
  }
]
</script>

<style>
</style>