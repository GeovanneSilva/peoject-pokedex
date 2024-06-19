<template>
    <v-container
    fluid
    class="d-flex flex-row"
    style="background-color: #FFEB3B; height: 92vh"
    >
      <v-row>
        <v-col>
          <h1
          style="font-size: 100px; text-transform: uppercase; color: white;"
          >p<img src="../assets/img/icon-pokeball.svg" alt="pokebola" style="max-width: 70px">kedex
          </h1>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      title: 'Home mano!!!',
    };
  },
};
</script>
