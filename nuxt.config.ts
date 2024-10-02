import { defineNuxtConfig } from 'nuxt/config';


export default defineNuxtConfig({
  ssr: false,
  modules: ['@blokkli/editor'],

  imports: {
    autoImport: false,
  },

  app: {
    rootId: 'nuxt-root',
    head: {
      viewport:
        'width=device-width, height=device-height, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0',
    },
  },

  //@ts-ignore
  blokkli: {
    itemEntityType: 'block',
  },
})