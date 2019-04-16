import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  tagName: '',

  cards: computed('count', function() {
    console.log('this.count', this.count);
    return new Array(this.count);
  })
});
