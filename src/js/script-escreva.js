$(document).ready(function() {
    $('.menu-toggle').click(function() {
        $('.nav').toggleClass('showing')
    });

    var posts = [];

    if (!window.localStorage.postData) {
      window.localStorage.postData = [];
    } else {
      posts = JSON.parse(window.localStorage.postsData);
    }

    var ongs = [];

    if (!window.localStorage.ongsData) {
      window.localStorage.ongsData = [];
    } else {
      ongs = JSON.parse(window.localStorage.ongsData);
    }

    $("#sendPublish").click(function() {
      addPost(posts);
    });
    
    $("#sendPublishOng").click(function() {
      addOng(ongs);
    });
});

function addPost(posts) {
  if (validateSubmit()) {
    var post = {
      name: $("#name").val(),
      email: $("#email").val(),
      title: $("#title").val(),
      text: $("#text").val(),
      date: getToday()
    };
    posts.push(post);
    window.localStorage.postsData = JSON.stringify(posts);
    sendSucess("button-error");
    cleanParameters();
  }
  else {
    invalidateSubmit("button-error");
  }
}

function addOng(ongs) {
  if (validateSubmitOng()) {
    var ong = {
      name: $("#name-ong").val(),
      email: $("#email-ong").val(),
      site: $("#site-ong").val(),
      text: $("#text-ong").val(),
      date: getToday()
    };
    ongs.push(ong);
    window.localStorage.ongsData = JSON.stringify(ongs);
    sendSucess("button-ong-error");
    cleanParametersOng();
  }
  else {
    invalidateSubmit("button-ong-error");
  }
}

function getToday() {
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
  $("#title").val("");
}

function cleanParametersOng() {  
  $("#name-ong").val("");
  $("#email-ong").val("");
  $("#text-ong").val("");
  $("#site-ong").val("");
}

function sendSucess(button) {
  document.getElementById(button).style.display = "block";
  document.getElementById(button).style.color = "green";
  document.getElementById(button).innerHTML = "* enviado para avaliação, retorno em até 7 dias";
}

function validateSubmit() {
  var name = $("#name").val();
  var email = $("#email").val();
  var title = $("#title").val();
  var text = $("#text").val();
  if (validateName(name) && validateEmail(email) && validateTitle(title) && validateText(text)) {
    document.getElementById("button-error").innerHTML = "";
    return true;
  }
  return false;
}

function validateSubmitOng() {
  var name = $("#name-ong").val();
  var email = $("#email-ong").val();
  var site = $("#site-ong").val();
  var text = $("#text-ong").val();
  if (validateName(name) && validateEmail(email) && validateTitle(site) && validateText(text)) {
    document.getElementById("button-ong-error").innerHTML = "";
    return true;
  }
  return false;
}

function validateName(name) {
  if (name.length == 0 || !name.match(/^[a-zA-ZÀ-ÿ]+ [a-zA-ZÀ-ÿ]+$/)) {
    return false;
  }
    return true;
}

function validateEmail(email) {
  if (email.length == 0 || !email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
    return false;
  }
  return true;
}

function validateTitle(title) {
  if (title.length == 0) {
    return false;
  }
  return true;
}

function validateText(text) {
  if (text.length == 0) {
    return false;
  }
  return true;
}

function invalidateSubmit(button) {
  document.getElementById(button).style.display = "block";
  document.getElementById(button).innerHTML = "* preencha os campos corretamente";
}