import { Model as BaseModel } from 'vue-api-query';

export default class Model extends BaseModel {
// configura a url

  // eslint-disable-next-line class-methods-use-this
  baseURL() {
    return 'http://localhost:3000';
  }

  request(config) {
    return this.$http.request(config);
  }
}
