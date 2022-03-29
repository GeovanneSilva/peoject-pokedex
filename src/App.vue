<template>
  <v-app>
    <v-app-bar
      app
      :color="getPage()"
      dark
      elevation="0"
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
/* import home from './views/home.vue'; */
import route from './router';

export default {
  name: 'App',

  /*   components: {
    home,
  }, */

  data: () => ({
    color: '',
  }),
  methods: {
    getPage() {
      const cor = route.history.current.name;
      if (cor === 'home') {
        this.color = 'yellow';
      } else {
        this.color = 'white';
      }
      return this.color;
    },
  },
};
</script>
