import { moduleFor, test } from 'ember-qunit';
import { run } from '@ember/runloop';
import engineResolverFor from 'ember-engines/test-support/engine-resolver-for';

const resolver = engineResolverFor('my-engine');


moduleFor('controller:controller-with-model', 'Unit | Controller | controller with model', {
  resolver,
  needs: ['model:user', 'service:my-service']
});

// Replace this with your real tests.
test('it exists', function(assert) {

 // const store = this.container.lookup('service:store');

  run(() => {
    let controller = this.subject({
      //store
    });
    assert.ok(controller);
  });
});
