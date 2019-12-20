var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    MessagesView.$chats.toggle();
  },

  renderMessage: function(message) {
    let result;
    result = MessageView.renderMessage(message);
    $('#chats').append(result);
  }

};