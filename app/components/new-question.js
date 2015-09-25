import Ember from 'ember';

export default Ember.Component.extend({
  isFormShowing: false,
  actions: {
    showForm: function() {
      this.set('isFormShowing', true);
    },
    saveQuestion: function() {
      var params = {
        title: this.get('title'),
        body: this.get('body'),
        user: this.get('user'),
        notes: this.get('notes')
      };
      this.set('isFormShowing', false);
      this.sendAction('saveQuestion', params);
    }
  }
});
