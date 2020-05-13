$(function(){
  function buildHTML(message){
    if ( message.image){
      let html =
      `<div class="message-box">
        <div class="message-info">
          <div class="message-info__user-name">
            ${message.user_name}
            <div class="message-info__date">
              ${message.created_at}
              <div class="message-text">
              ${message.message}
              </div>
              <img class="message__image" src="${message.image}">
            </div>
          </div>
        </div>
      </div>`
      return html;
    }else {
      let html =
      `<div class="message-box">
        <div class="message-info">
          <div class="message-info__user-name">
            ${message.user_name}
            <div class="message-info__date">
              ${message.created_at}
              <div class="message-text">
              ${message.message}
              </div>
            </div>
          </div>
        </div>
      </div>`
      return html;
    };
  }
  $('.Form').on('submit', function(e){
    // Formに関しては検証ツールを確認するとわかる！submitというイベントに発火している
    e.preventDefault()
    // デフォルトのフォーム送信というアクションはされなくなっている
    let formData = new FormData(this);
    console.log(formData)
    let url = $(this).attr('action');
    console.log(url)
    // $(this)はonメソッドの中で使うと、onメソッドを利用しているノードのオブジェクトが参照される
    // つまり今回はform要素自体
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false,
    })
    .done(function(data){
      console.log(data)
      let html = buildHTML(data);
      console.log(html)
      $('.message-list').append(html)
      $('.message-list').animate({ scrollTop: $('.message-list')[0].scrollHeight});
      //#下までスクロール
      $('Form')[0].reset();
      submit=$('.send-btn').prop('disabled', false);
      console.log(submit)
      .fail(function(){
        alert("メッセージ送信に失敗しました");
        // 送信に失敗したときの記述がココで良いのかわからない
        // とりあえず動いたのでこのまま進む
      });
    });
  });
});
