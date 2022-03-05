import { Model as BaseModel } from 'vue-api-query';

export default class Model extends BaseModel {
// configura a url

  // eslint-disable-next-line class-methods-use-this
  baseURL() {
    return 'https://api.sheety.co/540781f1679157fddd1c9f7061c73ca3/list/pokemons';
  }

  request(config) {
    return this.$http.request(config);
  }
}
