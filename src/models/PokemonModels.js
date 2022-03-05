import Model from './Model';

export default class User extends Model {
  // Set the resource route of the model
  // eslint-disable-next-line class-methods-use-this
  resource() {
    return 'pokemons';
  }
}
