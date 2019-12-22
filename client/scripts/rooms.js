var Rooms = {

  add: function (roomName) {
    $('#rooms select').append(`<option id="${roomName}">${roomName}</option>`);
  }

};