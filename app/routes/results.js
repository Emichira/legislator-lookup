import Ember from 'ember';


export default Ember.Route.extend({
  model: function(params) {
    var url = 'http://congress.api.sunlightfoundation.com/legislators/locate?apikey=[QFEREB7oxK3C5QjLd4lV2altLyrmPUmj3xxgcd4M]&zip=' + params.zip;
    return Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON.results;
    });
  }
});
