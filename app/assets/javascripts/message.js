$(function(){
  $('.Form').on('submit', function(e){
    // Formに関しては検証ツールを確認するとわかる！submitというイベントに発火している
    e.preventDefault()
    // デフォルトのフォーム送信というアクションはされなくなっている
    let formData = new FormData(this);
    let url = $(this).attr('action');
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
  });
});