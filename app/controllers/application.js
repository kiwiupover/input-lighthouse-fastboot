import { computed } from '@ember/object';
import Controller from '@ember/controller';

export default Controller.extend({

  autocompletes: computed(function() {
    return new Array(10);
  })
});
