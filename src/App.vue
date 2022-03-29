<template>
  <v-app>
    <v-app-bar
      app
      :color="getPage()"
      dark
      elevation="0"
    >
      <v-spacer></v-spacer>
        <v-tabs
            right
            :color="getCor()"
            class="mr-2"
            >
           <v-tab
           :class="`${colortabs}--text`"
           >Inicio</v-tab>
           <v-tab
           :class="`${colortabs}--text`"
           >Pokedex</v-tab>
        </v-tabs>
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
    colortabs: '',
  }),
  methods: {
    getPage() {
      const cor = route.history.current.name;
      if (cor === 'home') {
        this.color = 'yellow';
      } else {
        this.color = 'transparent';
      }
      return this.color;
    },
    getCor() {
      const nome = route.history.current.name;
      if (nome === 'home') {
        this.colortabs = 'white';
      } else if (nome === 'pokedex') {
        this.colortabs = 'yellow';
      }
      return this.colortabs;
    },
  },
};
</script>

<style>
  *{
    font-family: Arial, Helvetica, sans-serif;
  }
</style>
