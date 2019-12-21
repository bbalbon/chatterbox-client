var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // get room names from server
    // append to room selector element
  },

  renderRoom: function(room) {
    let result;
    result = MessageView.renderRoom(room);
    $('#rooms select').append(result);
  }

};
