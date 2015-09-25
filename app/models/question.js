import DS from 'ember-data';

export default DS.Model.extend({
  body: DS.attr(),
  user: DS.attr(),
  notes: DS.attr(),
  title: DS.attr(),
  answers: DS.hasMany('answer', {async: true})
});
