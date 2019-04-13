import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  tagName: '',

  cards: computed(function() {
    return new Array(64);
  })
});
