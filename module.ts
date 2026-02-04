import { addPlugin, createResolver, defineNuxtModule } from '@nuxt/kit'

export interface ModuleOptions {
  // Reserved for future options
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'vue-formik-nuxt4',
    configKey: 'vueFormik',
    compatibility: {
      nuxt: '^4.0.0',
    },
  },
  defaults: {},
  setup(_options, _nuxt) {
    const { resolve } = createResolver(import.meta.url)
    addPlugin({
      src: resolve('./runtime/plugin'),
      mode: 'all',
    })
  },
})
