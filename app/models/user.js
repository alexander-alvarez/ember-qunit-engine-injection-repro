import DS from 'ember-data';
import { inject } from '@ember/service';

export default DS.Model.extend({
  myService: inject()
});
