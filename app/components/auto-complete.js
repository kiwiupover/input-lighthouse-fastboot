import Component from '@ember/component';
import { later, next } from '@ember/runloop';
import { inject as service } from '@ember/service';

export default Component.extend({
  fastboot: service(),

  init() {
    this._super(...arguments);
    this.setProperties({ googleAuto: null, restrictions: { country: 'nz' } });
  },

  actions: {
    done() {
      let id = `message-${this.indexId}`;
      let messageElement = document.getElementById(id);
      messageElement.classList.add('fade-in-element');
      later(() => messageElement.classList.remove('fade-in-element'), 2000);
    },

    placeChanged(place) {
      this._refreshPrettyResponse('placeJSON', place);
      this.set('googleAuto', 'done');
      this.set('address', place.formatted_address);
    },

    placeChangedSecondInput(place) {
      this._refreshPrettyResponse('placeJSONSecondInput', place);
    }
  },

  _refreshPrettyResponse(blockProperty, placeDetails) {
    this.set(blockProperty, null);
    next(() => {
      this.set(blockProperty, JSON.stringify(placeDetails, undefined, 2));
    });
  },
});
