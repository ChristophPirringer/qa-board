import Ember from 'ember';

export default Ember.Component.extend({
  isFormShowing: false,
  actions: {
    showForm: function() {
      this.set('isFormShowing', true);
    },
    saveAnswer: function() {
      var params = {
        question: this.get('question'),
        body: this.get('body'),
        user: this.get('user')
      };
      this.set('isFormShowing', false);
      this.sendAction('saveAnswer', params);
    }
  }
});
