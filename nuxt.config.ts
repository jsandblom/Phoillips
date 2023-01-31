// import jsmServerFunctions from './sockets/index'

import { defineNuxtConfig } from 'nuxt/config'
import functions from './sockets/index'

export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    'nuxt-internal-socket',
  ],
  experimental: {
    reactivityTransform: false,
    inlineSSRStyles: false,
  },
  css: [
    '@unocss/reset/tailwind.css',
  ],
  colorMode: {
    classSuffix: '',
  },
  socketIO: {
    /** Required */
    socketFunctions: functions,
    /** Optional - these are the defaults
     * managerOptions is of type ManagerOptions from the socket.io-client library
     */
    clientOptions: {
      uri: '/', // If you want to connect to a different server than the one created by this plugin
      managerOptions: {},
    },
  },
})
