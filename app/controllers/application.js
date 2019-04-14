import { computed } from '@ember/object';
import Controller from '@ember/controller';

export default Controller.extend({

  autocompletes: computed(function() {
    return new Array(2);
  }),

  inputForms: computed(function() {
    return new Array(5);
  })
});
