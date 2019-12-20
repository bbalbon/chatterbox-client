var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  },

  renderRoom: function(room) {
    let result;
    result = MessageView.renderRoom(room);
    $('#rooms select').append(result);
  }

};
