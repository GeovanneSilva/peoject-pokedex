<template>
  <v-container>
    <v-row class="text-center">
      <v-col
        v-for="(pokemon, key) in pokemons"
        :key="key"
        cols="3"
        class="d-flex justify-center"
      >
        <v-card
          class="mx-auto my-12 flex-column align-center d-flex justify-center"
          width="214"
          heigth="214"
          :style="`border: ${pokemon.cor} solid 2px`"
          >
            <v-img
            :src="require(`@/assets/img/${pokemon.img}.png`)"
            width="142"
            heigth="142"
            ></v-img>
            <v-card-title
            :style="`background-color: ${pokemon.cor}; width: 214px; color: white`"
            >{{ pokemon.name }}</v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  name: 'HelloWorld',

  data: () => ({
    pokemons: [],
  }),
  created() {
    this.pokemons = axios.get('https://apipokemons1.herokuapp.com/pokemons')
      .then((res) => {
        this.pokemons = res.data;
        console.log(this.pokemons);
      });
  },
};
</script>
