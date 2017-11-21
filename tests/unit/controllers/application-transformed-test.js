import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

import engineResolverFor from 'ember-engines/test-support/engine-resolver-for';

const resolver = engineResolverFor('my-engine');


module('Unit | Controller | application-2', function(hooks) {
  setupTest(hooks, {
    resolver
  });

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:application');
    assert.ok(controller);
  });
});
