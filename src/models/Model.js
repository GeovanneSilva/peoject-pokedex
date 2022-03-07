import { Model as BaseModel } from 'vue-api-query';

export default class Model extends BaseModel {
// configura a url

  // eslint-disable-next-line class-methods-use-this
  baseURL() {
    return 'https://apipokemons1.herokuapp.com/pokemons';
  }

  request(config) {
    return this.$http.request(config);
  }
}
