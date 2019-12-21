var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    // on click
    //get input from text field
    App.startSpinner();
    $('#message').val();
    //push text to server
    Parse.create({'username': App.username, 'text': $('#message').val(), 'roomname': $('#rooms select').val()}, App.stopSpinner);

    App.fetch(MessagesView.render);

  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};