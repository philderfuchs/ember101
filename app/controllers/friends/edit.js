import FriendsBaseController from './base';

export default FriendsBaseController.extend({
  actions: {
    cancel: function() {
      console.log('+- cancel action in friends new controller');

      this.transitionToRoute('friends.show', this.get('model'));
      return false;
    }
  }
});
