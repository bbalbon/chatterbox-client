var MessagesView = {

  pulledData: [],

  $chats: $('#chats'),

  $main: $('#refresh'),

  initialize: function() {
    //automatically load most recent messages
    MessagesView.$main.on('click', MessagesView.handleRefresh);
  },

  handleRefresh: function(event) {
    App.fetch();
    MessagesView.render();
  },

  render: function () {
    $('#chats').html('');
    for (let i = 0; i < MessagesView.pulledData[0].length; i++) {
      if (MessagesView.pulledData[0][i]['username'] !== undefined && MessagesView.pulledData[0][i]['text'] !== undefined) {
        $('#chats').append(MessageView.renderMessage(MessagesView.pulledData[0][i]));
      }
    }
  },

  renderMessage: function(message) {
    let result;
    result = MessageView.renderMessage(message);
    $('#chats').append(result);
  }

};