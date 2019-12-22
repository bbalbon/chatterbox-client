var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner, RoomsView.initialize);

    FormView.initialize();
    MessagesView.initialize();

  },

  fetch: function(callback = ()=>{}, callbacktwo = ()=>{}) {
    Parse.readAll(function (data) {

      MessagesView.pulledData = [];
      MessagesView.pulledData.push(data.results);

      callback();
      callbacktwo();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
