import Ember from 'ember';

export default Ember.Controller.extend({
  errorMessage: Ember.computed('this.isValid', function() {
      if(this.get('isValid')) {
        return 'errthing aight'
      } else {
        return 'better fill out all fields'
      };
    }
  ),
  isValid: Ember.computed(
    'model.email',
    'model.firstName',
    'model.lastName',
    'model.twitter',
    function() {
      return !Ember.isEmpty(this.get('model.email'))
      && !Ember.isEmpty(this.get('model.firstName'))
      && !Ember.isEmpty(this.get('model.lastName'))
      && !Ember.isEmpty(this.get('model.twitter'));
    }
  ),
  actions: {
    save: function() {
      console.log('+- save action in friends edit controller');

      if (this.get('isValid')) {
        var _this = this;
        this.get('model').save().then(function(friend) {
          _this.transitionToRoute('friends.show', friend.id);
        });
      } else {
        this.set('errorMessage', 'You have to fill all the fields');
      }
      return false;
    },
    cancel: function() {
      return true;
    }
  }
});