$(document).ready(function() {
    $('.menu-toggle').click(function() {
        $('.nav').toggleClass('showing')
    });

    var comments = [];

    if (!window.localStorage.commentsData) {
      window.localStorage.commentsData = [];
    } else {
      comments = JSON.parse(window.localStorage.commentsData);
    }

    comments.forEach(showComments);

    $("#addComment").click(function() {
      addComment(comments);
    });
});

function addComment(comments) {
  var addObj = {
    "name": $("#name").val(),
    "email": $("#email").val(),
    "date": today(),
    "text": $("#text").val()
  };
  comments.push(addObj);
  window.localStorage.commentsData = JSON.stringify(comments);
  showComments(addObj);
  cleanParameters();
}

function showComments(data) {
  var html = "<div class='comment-box clearfix'><img src='https://via.placeholder.com/100' alt=''><div class='comment-content'><span class='comment-name'>"+data.name+"</span>&nbsp;<span class='comment-date'>"+data.date+"</span><p class='comment-text'>"+data.text+"</p></div></div>";
  $(".comments").append(html);
}

function today() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0');
  var yyyy = today.getFullYear();
  
  return dd + '/' + mm + '/' + yyyy;
}

function cleanParameters() {  
  $("#name").val("");
  $("#email").val("");
  $("#text").val("");
}