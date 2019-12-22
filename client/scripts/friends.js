var Friends = {
  friendList: [],

  toggleStatus: function (username) {
    if (Friends.friendList.indexOf(username) === -1) {
      Friends.friendList.push(username);
    }
    $('.' + username).css("background-color", '#0090da');
  }
};

