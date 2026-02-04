import {
  FormContentEditable,
  FormikForm,
  FormInput,
  FormSelectField,
  FormTextArea,
} from 'vue-formik'

export default defineNuxtPlugin((nuxtApp) => {
  const components = {
    FormContentEditable,
    FormikForm,
    FormInput,
    FormSelectField,
    FormTextArea,
  } as const

  for (const [name, component] of Object.entries(components)) {
    nuxtApp.vueApp.component(name, component)
  }
})
