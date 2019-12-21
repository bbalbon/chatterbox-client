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
    $('#message').val();
    //push text to server
    Parse.create({'username': App.username, 'text':$('#message').val()}, function () {
      MessagesView.handleRefresh();
    });
    //refresh
    $('#message').val('');
    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};