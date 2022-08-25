<template>
  <flow-form v-bind:questions="questions" v-bind:language="language" />
</template>

<script>
// Import necessary components and classes
import { FlowForm, QuestionModel, QuestionType, ChoiceOption, LanguageModel } from '@ditdot-dev/vue-flow-form'

export default {
  name: 'exampleComponent',
  components: {
    FlowForm
  },
  data() {
    return {
      language: new LanguageModel({
        // Your language definitions here (optional).
        // You can leave out this prop if you want to use the default definitions.
      }),
      questions: [
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
    }
  }
}
</script>

<style>
/* Import Vue Flow Form base CSS */
@import '~@ditdot-dev/vue-flow-form/dist/vue-flow-form.css';
/* Import one of the Vue Flow Form CSS themes (optional) */
@import '~@ditdot-dev/vue-flow-form/dist/vue-flow-form.theme-minimal.css';
/* @import '~@ditdot-dev/vue-flow-form/dist/vue-flow-form.theme-green.css'; */
/* @import '~@ditdot-dev/vue-flow-form/dist/vue-flow-form.theme-purple.css'; */
</style>