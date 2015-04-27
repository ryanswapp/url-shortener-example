/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
Template.Home.events({
  'click .shorten': function(e, tmpl) {
    e.preventDefault();

    // Grab the url from the input it is stored in and put it into
    // an object to pass in to the url-shortener/shorten method
    var url = $('.url-to-shorten').val();

    UrlShortener.shorten(url, function(err, res) {
      if (err) {
        sAlert.error("That is a bad url");
        console.log(err);
      } else {
        Session.set('shortUrl', res.path);
        $('.url-to-shorten').val('');
      }
    });


  }
});

/*****************************************************************************/
/* Home: Helpers */
/*****************************************************************************/
Template.Home.helpers({
  shortUrl: function() {
    return Session.get('shortUrl');
  }
});

/*****************************************************************************/
/* Home: Lifecycle Hooks */
/*****************************************************************************/
Template.Home.created = function () {
};

Template.Home.rendered = function () {
  Session.set('shortUrl', '');
};

Template.Home.destroyed = function () {
};
