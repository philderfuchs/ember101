import Ember from 'ember';

export default Ember.Controller.extend({
    errorMessage: Ember.computed('this.isValid',
        function () {
            if (this.get('isValid')) {
                return 'errthing aight';
            } else {
                return 'better fill out description';
            }
        }
    ),

    isValid: Ember.computed.notEmpty('model.description'),

    actions: {
        save: function () {
            console.log('+- save action in articles new controller');

            if (!this.get('isValid')) {
                this.set('errorMessage', 'You have to fill all the fields');
                return false;
            } else {
                return true;
            }
        }
    }
});
