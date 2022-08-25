<template>
  <flow-form v-bind:questions="questions" @answer="doStuff">
<!--    <question type="text" title="Hello, what is your name?" v-model="name" ></question>-->
<!--    <question type="number" title="What is your age?" v-model="age"></question>-->
<!--    &lt;!&ndash; name and age are stored in the FlowForm component's data and can be used in the following question &ndash;&gt;-->
<!--    <question v-if="age < 18" type="sectionbreak" title="Sorry, you are under 18"></question>-->
<!--    <question v-else type="sectionbreak" :title="'Nice to meet you, ' + name + '. Welcome to our site!'"></question>-->
  </flow-form>
</template>

<script setup lang="ts">
// Import necessary components and classes
import {ChoiceOption, FlowForm , QuestionModel, QuestionType} from '@ditdot-dev/vue-flow-form'
import {ref} from "vue";

const age = ref<Number>(0);
const name = ref<String | null>('');
const country = ref<String | null>(null);

function doStuff(answer: any) {
  console.log(answer);
  console.log(age.value)
  console.log(country.value)
}

// const location = ref(null);
 const questions = [
        new QuestionModel({
          title: 'Hi there! What is your name?',
          type: QuestionType.text,
          answer: name,
        }),
        new QuestionModel({
          title: 'How old are you?',
          type: QuestionType.Text,
          options: [
            new ChoiceOption({
              label: 'Answer'
            })
          ],
          answer: age,
        }),
        new QuestionModel({
          title: 'Location',
          type: QuestionType.Dropdown,
          options: [
            new ChoiceOption({
              value: 'Canada',
            }),
            new ChoiceOption({
              value: 'United States of America'
            })
          ],
          answer: country,
        })]

</script>

<style>
/* Import Vue Flow Form base CSS */
@import '~@ditdot-dev/vue-flow-form/dist/vue-flow-form.css';
/* Import one of the Vue Flow Form CSS themes (optional) */
@import '~@ditdot-dev/vue-flow-form/dist/vue-flow-form.theme-minimal.css';
/* @import '~@ditdot-dev/vue-flow-form/dist/vue-flow-form.theme-green.css'; */
/* @import '~@ditdot-dev/vue-flow-form/dist/vue-flow-form.theme-purple.css'; */
</style>