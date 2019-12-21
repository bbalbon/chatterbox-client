var MessageView = {
  renderMessage: _.template(
    `<div class="chat">
      <div class="username <%= username %>" onClick ='Friends.addFriend("<%= username %>")'>
        <%= username %> :
      </div>
      <div class="message">
        <%= text %>
      </div>
    </div>`
  ),
  renderFriendMessage: _.template(
    `<div class="friend">
      <div class="username <%= username %>" style="background-color: #0090da" onClick ='Friends.addFriend("<%= username %>")'>
        <%= username %> :
      </div>
      <div class="message">
        <%= text %>
      </div>
    </div>`
  )
};

{/* <div class="roomname">
Room: <%= roomname %>
</div> */}