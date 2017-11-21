import { moduleFor, test } from 'ember-qunit';

import engineResolverFor from 'ember-engines/test-support/engine-resolver-for';

const resolver = engineResolverFor('my-engine');


moduleFor('controller:application', 'Unit | Controller | application', {
  resolver
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let controller = this.subject();
  assert.ok(controller);
});
