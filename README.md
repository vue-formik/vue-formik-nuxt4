# vue-formik-nuxt4

Nuxt 4 module for [vue-formik](https://www.npmjs.com/package/vue-formik). Registers Formik components globally so you can use them without importing.

## Installation

```bash
pnpm add vue-formik vue-formik-nuxt4
# or
npm i vue-formik vue-formik-nuxt4
# or
yarn add vue-formik vue-formik-nuxt4
```

## Setup

Add the module to `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  modules: ['vue-formik-nuxt4'],
})
```

## Usage

Components `FormikForm`, `FormInput`, `FormTextArea`, `FormSelectField`, and `FormContentEditable` are registered globally. Use `useFormik` and `useFieldArray` from `vue-formik` where needed:

```vue
<template>
  <FormikForm>
    <FormInput name="email" label="Email" type="email" />
    <FormInput name="name" label="Name" />
  </FormikForm>
</template>

<script setup lang="ts">
import { useFormik } from 'vue-formik'
// ...
</script>
```

## License

LGPL-3.0-or-later
