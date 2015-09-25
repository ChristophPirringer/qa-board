import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },
  actions: {
    deleteQuestion: function(question) {
      if (confirm('Are you sure you want to delete this question?')) {
        question.get('answers').then(function(answers) {
          answers.forEach(function(answer) {
            answer.destroyRecord();
          });
        });
        question.destroyRecord();
        this.transitionTo('index');
      }
    },
    editQuestion: function(question, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key] !== undefined) {
          question.set(key, params[key]);
        }
      });
      question.save();
      this.transitionTo('question');
    },
    saveComment: function(params) {
      var newComment = this.store.createRecord("answer", params);
      newComment.save();
      params.question.save();
      this.tranisitionTo('question');
    }
  }
});
