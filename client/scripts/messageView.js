var MessageView = {
  renderMessage: _.template(
    "<div class='chat'>" +
      "<div class='username'>" +
        "<%= username %>:" +
      "</div>" +
      "<div class='message'>" +
        "<%= text %>" +
      "</div>" +
    "</div>"
  ),

  renderRoom: _.template(
    "<div class='room'>" +
      "<%= room &>" +
    "</div>"
  )
};
