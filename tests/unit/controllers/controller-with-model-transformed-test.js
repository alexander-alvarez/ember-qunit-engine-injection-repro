import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { run } from '@ember/runloop';
import engineResolverFor from 'ember-engines/test-support/engine-resolver-for';

const resolver = engineResolverFor('my-engine');


module('Unit | Controller | controller with model transformed', function(hooks) {
  setupTest(hooks, {
    resolver
  });

  // Replace this with your real tests.
  test('it exists', function(assert) {
    
    const store = this.owner.lookup('service:store');

    run(() => {
      let controller = this.owner.factoryFor('controller:controller-with-model').create({
        store
      });
      assert.ok(controller);
    });
  });
});
