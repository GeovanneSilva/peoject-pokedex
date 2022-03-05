<template>
  <div>
    <div
    v-for="(pokemon, key) in pokemons"
    :key="key"
    class="container"
    >
      <span > {{ pokemon.name }} </span>
      <img :src="require(`@/assets/img/${pokemon.img}.png`)" :alt="pokemon.name">
    </div>
  </div>
</template>

<script>
import PokemonModels from '../models/PokemonModels';

export default {
  name: 'HelloWorld',
  data() {
    return {
      pokemons: [],
    };
  },
  async created() {
    this.pokemons = await PokemonModels.get();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
img{
  width: 50px;
}

</style>
