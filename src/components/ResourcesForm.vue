<template>
  <flow-form>
    <question type="text" title="Hello, what is your name?" v-model="name" ></question>
    <question type="number" title="What is your age?" v-model="age"></question>
    <!-- name and age are stored in the FlowForm component's data and can be used in the following question -->
    <question v-if="age < 18" type="sectionbreak" title="Sorry, you are under 18"></question>
    <question v-else type="sectionbreak" :title="'Nice to meet you, ' + name + '. Welcome to our site!'"></question>
  </flow-form>
</template>

<script setup>
// Import necessary components and classes
import { FlowForm, Question } from '@ditdot-dev/vue-flow-form'
import {ref} from "vue";

const age = ref(0);
const name = ref('');

// function doStuff() {
//   console.log(age);
// }

// const location = ref(null);
//  const questions = [
//         // QuestionModel array
//         new QuestionModel({
//           title: 'Question',
//           type: QuestionType.MultipleChoice,
//           options: [
//             new ChoiceOption({
//               label: 'Answer'
//             })
//           ]
//         })
//         ,
//         new QuestionModel({
//           title: 'Location',
//           type: QuestionType.Dropdown,
//           options: [
//             new ChoiceOption({
//               value: 'Canada',
//             }),
//             new ChoiceOption({
//               value: 'United States of America'
//             })
//           ],
//           answer: location,
//         })]

</script>

<style>
/* Import Vue Flow Form base CSS */
@import '~@ditdot-dev/vue-flow-form/dist/vue-flow-form.css';
/* Import one of the Vue Flow Form CSS themes (optional) */
@import '~@ditdot-dev/vue-flow-form/dist/vue-flow-form.theme-minimal.css';
/* @import '~@ditdot-dev/vue-flow-form/dist/vue-flow-form.theme-green.css'; */
/* @import '~@ditdot-dev/vue-flow-form/dist/vue-flow-form.theme-purple.css'; */
</style>