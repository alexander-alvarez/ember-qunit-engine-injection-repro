import { moduleFor, test } from 'ember-qunit';
import { run } from '@ember/runloop';

moduleFor('controller:controller-with-model', 'Unit | Controller | controller with model', {
  // Specify the other units that are required for this test.
  needs: ['model:user']
});

// Replace this with your real tests.
test('it exists', function(assert) {
  const store = this.container.lookup('service:store');
  
  run(() => {
    let controller = this.subject({
      store
    });
    assert.ok(controller);
  });
});
