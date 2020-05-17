$(function(){
  function buildHTML(message){
    let html =
      `<div class="message-box" data-message-id=${message.id}>
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
      </div>`
    return html;
  };
  $('.Form').on('submit', function(e){
    console.log(e)
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.message-list').append(html);
      $('.message-list').animate({ scrollTop: $('.message-list')[0].scrollHeight});
      $('.Form')[0].reset();
      $(".Form__submit").prop("disabled",false);
    })
    .fail(function(){
      alert("メッセージ送信に失敗しました");
      $('.Form__submit').prop("disabled", false);
    });
  });
});