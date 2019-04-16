import { computed } from '@ember/object';
import Controller from '@ember/controller';

export default Controller.extend({
  queryParams: [
    'autocompleteCount',
    'inputFormCount',
    'cardCount'
  ],

  autocompleteCount: 2,
  inputFormCount: 4,
  cardCount: 16,

  autocompletes: computed(function() {
    return new Array(this.autocompleteCount);
  }),

  inputForms: computed(function() {
    return new Array(this.inputFormCount);
  })
});
