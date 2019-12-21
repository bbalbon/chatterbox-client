var MessagesView = {

  pulledData: [],

  $chats: $('#chats'),

  $main: $('#refresh'),

  initialize: function () {
    //automatically load most recent messages
    MessagesView.$main.on('click', MessagesView.handleRefresh);
  },

  handleRefresh: function () {
    App.fetch();
    MessagesView.render();
  },

  render: function () {
    $('#chats').html('');
    if ($('#rooms select').val() === 'All Messages') {
      for (let i = 0; i < MessagesView.pulledData[0].length; i++) {
        if (MessagesView.pulledData[0][i]['username'] !== undefined && MessagesView.pulledData[0][i]['text'] !== undefined && MessagesView.pulledData[0][i]['roomname'] !== undefined && !MessagesView.escapeTester(i)) {
          if (Friends.friendList.indexOf(MessagesView.pulledData[0][i]['username']) === -1) {
            $('#chats').append(MessageView.renderMessage(MessagesView.pulledData[0][i]));
          } else {
            $('#chats').append(MessageView.renderFriendMessage(MessagesView.pulledData[0][i]));
          }
        }
      }
    } else {
      for (let i = 0; i < MessagesView.pulledData[0].length; i++) {
        if (MessagesView.pulledData[0][i]['username'] !== undefined && MessagesView.pulledData[0][i]['text'] !== undefined && MessagesView.pulledData[0][i]['roomname'] === $('#rooms select').val() && !MessagesView.escapeTester(i)) {
          if (Friends.friendList.indexOf(MessagesView.pulledData[0][i]['username']) === -1) {
            $('#chats').append(MessageView.renderMessage(MessagesView.pulledData[0][i]));
          } else {
            $('#chats').append(MessageView.renderFriendMessage(MessagesView.pulledData[0][i]));
          }
        }
      }
    }
  },

  escapeTester: function (current) {
    return ((/[%$<>]/.test(MessagesView.pulledData[0][current]['username'])) || (/[%$<>]/.test(MessagesView.pulledData[0][current]['text'])) || (/[%$<>]/.test(MessagesView.pulledData[0][current]['roomname'])));
  },

  renderMessage: function (message) {
    let result;
    result = MessageView.renderMessage(message);
    $('#chats').append(result);
  }

};
