$(function(){
  function buildHTML(message){
    let html =
      `<div class="message-box"  data-message-id=${message.id}>
        <div class="message-info">
          <div class="message-info__user-name">
            ${message.user_name}
            <div class="message-info__date">
              ${message.created_at}
              <div class="message-text">
                ${message.message}
              </div>
              ${message.image_url? `<img class="message__image" src="${message.image_url}">`:``}
            </div>
          </div>
        </div>
      </>`
      return html;
    };
let reloadMessages = function(){
  let last_message_id = $('.message-box:last').data("message-id");
  $.ajax({
    url: "api/messages",
    type: 'GET',
    detaType: 'json',
    data: {id: last_message_id}
  })
  .done(function(messages){
    if (messages.length !== 0) {
      console.log(messages)
      let insertHTML = '';
      console.log(insertHTML)
      $.each(messages, function(i,message){
        console.log(buildHTML(message))
        insertHTML += buildHTML(message)
      });
      $('.message-list').append(insertHTML);
      $('.message-list').animate({ scrollTop: $('.message-list')[0].scrollHeight});
    }
  })
  .fail(function(){
    alert('error');
  });
};
setInterval(reloadMessages, 7000);
});