$(function(){
  function buildHTML(message){
    if (message.image) {
      var html = `<div class="messages__message">
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
      var html = `<div class="messages__message">
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
      .done(function(){
      })
      .fail(function(){
      });
    })
  })
});