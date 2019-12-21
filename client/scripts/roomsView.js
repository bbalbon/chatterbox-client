var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  $main: $('#roombutton'),

  initialize: function () {
    // get room names from server
    // append to room selector element
    RoomsView.$main.on('click', RoomsView.renderRoomInput());
    RoomsView.renderRoom();
  },

  renderRoom: function () {
    // event.preventDefault();
    var duplicationCheck = [];
    var pulledDataAlias = MessagesView.pulledData[0];
    for (let i = 0; i < pulledDataAlias.length; i++) {
      if ((pulledDataAlias[i]['username']) && (pulledDataAlias[i]['text']) && (pulledDataAlias[i]['roomname'])) {
        if (duplicationCheck.indexOf(pulledDataAlias[i]['roomname']) === -1) {
          duplicationCheck.push(pulledDataAlias[i]['roomname']);
          $('#rooms select').append(`<option id="${pulledDataAlias[i]['roomname']}">${pulledDataAlias[i]['roomname']}</option>`);
        }
      }
    }
    MessagesView.handleRefresh();
  },

  // Need to rename above function ^ for test 

  renderRoomInput: function () {
    // take user input .val()
    // add to room list
  }

};
