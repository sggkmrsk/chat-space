$(function(){
  function reloadMessages() {
    last_message_id = $('.messages__message:last').attr('data-message-id')
    $.ajax({
      url: "api/messages",
      type: 'GET',
      dataType: 'json',
      data: {id: last_message_id}
    })
    .done(function(messages) {
      var insertHTML = '';
      $.each(messages, function(i, message) {
        insertHTML += buildHTML(message)
      });
      $('.messages').append(insertHTML);
      $('.main_chat').animate({scrollTop:$('.messages')[0].scrollHeight});
    })
    .fail(function() {
      alert("自動更新の際にエラーが発生しました。\n情報を取得できませんでした。");
    });
  };

  function buildHTML(message){
    if (message.image) {
      var html = `<div class="messages__message" data-message-id = ${message.id}>
                    <div class="messages__message--name">
                      ${message.user_name}
                    </div>
                    <div class="messages__message--date">
                      ${message.created_at}
                    </div>
                      <p class="messages__message--text">
                        ${message.body}
                      </p>
                      <img class="messages__message--image" src="${message.image}" alt="">
                    </div>`
    } else {
      var html = `<div class="messages__message" data-message-id = ${message.id}>
                    <div class="messages__message--name">
                      ${message.user_name}
                    </div>
                    <div class="messages__message--date">
                      ${message.created_at}
                    </div>
                    <p class="messages__message--text">
                      ${message.body}
                    </p>
                    </div>`
    }
    return html;
  }
  $(function(){
    $('#new_message').on('submit', function(e){
      e.preventDefault()
      var formData = new FormData(this)
      var url = $(this).attr('action');
      $.ajax({
        url: url,
        type: 'POST',
        data: formData,
        dataType: 'json',
        processData: false,
        contentType: false
      })
      .done(function(message){
        var html = buildHTML(message);
        $('.messages').append(html);
        $('.messages').animate({scrollTop:$('.messages')[0].scrollHeight});
        $('.new_message')[0].reset();
        $('.form__new_message--send_btn').attr('disabled', false)
      })
      .fail(function(){
          alert("メッセージ送信に失敗しました");
          $('.form__new_message--send_btn').attr('disabled', false);
      });
    })
  })
  $(window).bind("load", function(){
    if(document.URL.match('/messages')) {
    setInterval(reloadMessages, 7000);
  };
  });
});
