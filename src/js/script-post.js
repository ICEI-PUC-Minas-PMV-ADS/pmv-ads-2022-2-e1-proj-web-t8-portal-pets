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
  if (validateSubmit()) {
    var comment = {
      name: $("#name").val(),
      email: $("#email").val(),
      text: $("#text").val(),
      date: getToday(),
      img: getImage()
    };
    comments.push(comment);
    window.localStorage.commentsData = JSON.stringify(comments);
    showComments(comment);
    cleanParameters();
  }
  else {
    invalidateSubmit();
  }
}

function showComments(data) {
  var html = "<div class='comment-box clearfix'><img src="+data.img+" alt=''><div class='comment-content'><span class='comment-name'>"+data.name+"</span><span class='comment-date'>"+data.date+"</span><p class='comment-text'>"+data.text+"</p></div></div>";
  $(".comments").append(html);
}

function getToday() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0');
  var yyyy = today.getFullYear();
  
  return dd + '/' + mm + '/' + yyyy;
}

function getImage() {
  var images = ["../../img/avatar/avatar1.jpg", "../../img/avatar/avatar2.jpg", "../../img/avatar/avatar3.jpg", "../../img/avatar/avatar4.jpg", "../../img/avatar/avatar5.jpg"
  , "../../img/avatar/avatar6.jpg", "../../img/avatar/avatar7.jpg", "../../img/avatar/avatar8.jpg", "../../img/avatar/avatar9.jpg", "../../img/avatar/avatar10.jpg"];
  return images[Math.floor(Math.random() * images.length)];
}

function cleanParameters() {  
  $("#name").val("");
  $("#email").val("");
  $("#text").val("");
}

function validateSubmit() {
  if (validateName() && validateEmail() && validateText()) {
    document.getElementById("button-error").innerHTML = "";
    return true;
  }
  return false;
}

function validateName() {
  var name = $("#name").val();
  if (name.length == 0) {
    invalidateInput("name", "name-error", "* campo obrigatório");
    return false;
  } 
  if (!name.match(/^[a-zA-ZÀ-ÿ]+ [a-zA-ZÀ-ÿ]+$/)) {
    invalidateInput("name", "name-error", "* nome e sobrenome");
    return false;
  }
    validateInput("name", "name-error");
    return true;
}

function validateEmail() {
  var email = $("#email").val();
  if (email.length == 0) {
    invalidateInput("email", "email-error", "* campo obrigatório");
    return false;
  }
  if (!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
    invalidateInput("email", "email-error", "* email inválido");
    return false;
  }
  validateInput("email", "email-error");
  return true;
}

function validateText() {
  var text = $("#text").val();
  if (text.length == 0) {
    invalidateInput("text", "text-error", "* campo obrigatório");
    return false;
  }
  validateInput("text", "text-error");
  return true;
}

function invalidateInput(inputId, inputErrorId, inputErrorMessage) {
  var input = document.getElementById(inputId);
  input.style.borderColor = "red";
  input.style.borderWidth = "2px";
  input.style.borderStyle = "solid";
  document.getElementById(inputErrorId).innerHTML = inputErrorMessage;
}

function invalidateSubmit() {
  document.getElementById("button-error").style.display = "block";
  document.getElementById("button-error").innerHTML = "* preencha os campos corretamente";
}

function validateInput(input, inputError) {
  document.getElementById(input).style.borderStyle = "none";
  document.getElementById(inputError).innerHTML = "";
}