<template>
  <FlowForm v-bind:questions="questions" />
</template>

<script setup>
// Import necessary components and classes
import { FlowForm, QuestionModel, QuestionType, ChoiceOption } from '@ditdot-dev/vue-flow-form'

 const questions = [
        // QuestionModel array
        new QuestionModel({
          title: 'Question',
          type: QuestionType.MultipleChoice,
          options: [
            new ChoiceOption({
              label: 'Answer'
            })
          ]
        })
        ,
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

          ]
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