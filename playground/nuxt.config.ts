import { sha256 } from 'crypto-hash';

export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@nuxtjs/apollo'],

  colorMode: {
    preference: 'light',
    storageKey: 'na-color-scheme'
  },

  apollo: {
    clients: {
      default: './apollo/default.ts',
      apq: {
        httpEndpoint: './apollo/default.ts',
        persisting: {
          sha256,
          useGETForHashedQueries: true
        },
      },
      github: {
        httpEndpoint: 'https://api.github.com/graphql',
        tokenStorage: 'localStorage'
      },
      todos: {
        httpEndpoint: 'https://nuxt-gql-server-2gl6xp7kua-ue.a.run.app/query',
        wsEndpoint: 'wss://nuxt-gql-server-2gl6xp7kua-ue.a.run.app/query',
        httpLinkOptions: {
          headers: {
            'X-CUSTOM-HEADER': 123
          }
        }
      }
    }
  }
})
