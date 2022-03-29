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
          class="mx-auto my-12 ma-0 pa-0 flex-column align-center d-flex justify-center"
          width="214"
          heigth="214"
          :style="`border: ${pokemon.cor} solid 2px`"
          >
            <v-card-text
            :style="`color: ${pokemon.cor}`"
            class="font-weight-normal d-flex flex-row-reverse pa-3 ma-0"
            >
              <p style="margin-top: -10px">{{pokemon.id}}</p>
            </v-card-text>
          <!-- eslint-disable max-len -->
            <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.2">
            <path
            d="M41.1189 36.9898C39.4228 41.0491 34.7571 42.9649 30.6977 41.2689C26.6384 39.5728 24.7226 34.9071 26.4187 30.8477C28.1147 26.7884 32.7804 24.8726 36.8398 26.5687C40.8991 28.2647 42.8149 32.9304 41.1189 36.9898Z"
            :fill="`${pokemon.cor}`"/>
            <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20.8705 64.7892C36.4224 71.2871 54.0934 65.1626 62.484 51.0965L44.4035 43.5421C40.4403 47.9218 34.0014 49.5558 28.2409 47.1489C22.4804 44.7421 19.118 39.013 19.4488 33.1155L1.36834 25.5611C-2.74246 41.4155 5.3185 58.2913 20.8705 64.7892ZM23.134 24.2954L5.05357 16.741C13.4442 2.67488 31.1151 -3.4496 46.6671 3.04833C62.219 9.54626 70.28 26.4221 66.1692 42.2764L48.0887 34.722C48.4195 28.8246 45.0571 23.0954 39.2966 20.6886C33.5361 18.2817 27.0972 19.9157 23.134 24.2954ZM41.1189 36.9898C39.4228 41.0491 34.7571 42.9649 30.6977 41.2689C26.6384 39.5728 24.7226 34.9071 26.4187 30.8477C28.1147 26.7884 32.7804 24.8726 36.8398 26.5687C40.8991 28.2647 42.8149 32.9304 41.1189 36.9898Z"
            :fill="`${pokemon.cor}`"/>
            </g>
            </svg>
            <!-- eslint-enable max-len -->
            <v-img
            :src="require(`@/assets/img/${pokemon.img}.png`)"
            width="142"
            heigth="142"
            >
            </v-img>
            <v-sheet
              :color='`${pokemon.cor}`'
              width="214"
              height="35"
              class="d-flex justify-center ma-0 pa-0"
            >
              <p
                class="font-weight-medium mt-2 white--text"
              >{{ pokemon.name }}</p>
            </v-sheet>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  name: 'pokemons',
  data: () => ({
    pokemons: [],
  }),
  created() {
    this.pokemons = axios.get('https://apipokemons1.herokuapp.com/pokemons')
      .then((res) => {
        this.pokemons = res.data;
      });
  },
};
</script>

<style scoped>
  svg{
    position: absolute;
    margin-top: -50px;
    margin-left: 110px;
  }
</style>
