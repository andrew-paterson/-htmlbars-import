import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import moduleTests from 'test-addon-2/test-support/test-functions/integration/components/my-component';

module('Integration | Component | my-component', function(hooks) {
  setupRenderingTest(hooks);

  moduleTests.forEach(item => {
    test(item.title, item.testFunction());
  });
});