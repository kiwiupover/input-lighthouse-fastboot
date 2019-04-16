import { computed } from '@ember/object';
import Controller from '@ember/controller';

export default Controller.extend({
  queryParams: [
    'autocompletesCount',
    'inputFormsCount',
    'cardsCount'
  ],
  autocompletesCount: 2,
  inputFormsCount: 4,
  cardsCount: 16,

  autocompletes: computed(function() {
    return new Array(this.autocompletesCount);
  }),

  inputForms: computed(function() {
    return new Array(this.inputFormsCount);
  })
});
