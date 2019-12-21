var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

    FormView.initialize();
    MessagesView.initialize();
    setTimeout(RoomsView.initialize, 1000);

  },

  // fetch: function(callback = ()=>{}) {
  //   Parse.readAll((data) => {

  //     MessagesView.pulledData = [];
  //     MessagesView.pulledData.push(data.results);

  //     callback();
  //   });
  // },

  fetch: function(callback = ()=>{}) {
    Parse.readAll(function (data) {

      MessagesView.pulledData = [];
      MessagesView.pulledData.push(data.results);

      callback();
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
