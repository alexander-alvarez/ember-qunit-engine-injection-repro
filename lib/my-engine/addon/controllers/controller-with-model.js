import Controller from '@ember/controller';
import { inject } from '@ember/service';

export default Controller.extend({
  store: inject(),
  init() {
    this._super(...arguments);
    this.set('sample', this.get('store').createRecord('user'));
  }
});

