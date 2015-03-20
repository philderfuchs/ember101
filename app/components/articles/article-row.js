import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'tr',
    article: null, // passed-in
    articleStates: null, // passed-in
    autoSave: function () {
        var article = this.get('article');
        if (!article.get('isNew')) {
            this.sendAction('saveFromComponent', article);
        }
    },
    stateChanged: function () {
        var article = this.get('article');
        if (article.get('isDirty') && !article.get('isSaving')) {
            Ember.run.once(this, this.autoSave);
        }
    }.on('init').observes('article.state')

    //actions: {
    //    saveArticle: function (article) {
    //        this.sendAction('saveFromComponent', article);
    //    }
    //}
});