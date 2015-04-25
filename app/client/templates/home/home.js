/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
Template.Home.events({
  'click .shorten': function(e, tmpl) {
    e.preventDefault();

    // Grab the url from the input it is stored in and put it into
    // an object to pass in to the url-shortener/shorten method
    var urlObj = {
      long_url: $('.url-to-shorten').val()
    }


    Meteor.call('url-shortener/shorten', urlObj, function(err, res) {
      if (err) {
        sAlert.error("That is a bad url");
        console.log(err);
        throw new Meteor.Error('Bad Url', 'That is a bad url');
      } else {
        Session.set('shortUrl', Meteor.absoluteUrl() + 's/' + res.path);
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
