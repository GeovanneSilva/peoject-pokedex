<template>
  <Pokemons />
</template>

<script>
import Pokemons from '../components/Pokemons.vue';

export default {
  name: 'pokedex',
  components: {
    Pokemons,
  },
  data() {
    return {
      title: 'Pokedex mano!!!',
    };
  },
};
</script>
