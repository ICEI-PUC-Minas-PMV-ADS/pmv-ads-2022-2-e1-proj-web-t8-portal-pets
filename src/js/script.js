$(document).ready(function() {
    $('.menu-toggle').click(function() {
        $('.nav').toggleClass('showing')
    });

    $('.post-wrapper').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2250,
        nextArrow: $('.next'),
        prevArrow: $('.prev'),
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      });
});

$(document).ready(function() {  
  var comments = [
    {"name":"Pedro", "date":"31/10/2022", "text":"Esse é o melhor post que já vi!"},
    {"name":"Tiago", "date":"01/11/2022", "text":"Muito educativo!"},
    {"name":"João", "date":"01/11/2022", "text":"Muito obrigado por postar isso!"},
    {"name":"Lucas", "date":"03/11/2022", "text":"Precisava disso!"},
  ];

    for (var i = 0; i < comments.length; i++) {
      console.log(comments[i]);
      showComments(comments[i]);
    }
});

function showComments(data) {
  var html = "<div class='comment-box clearfix'><img src='https://via.placeholder.com/100' alt=''><div class='comment-content'><span class='comment-name'>"+data.name+"</span>&nbsp;<span class='comment-date'>"+data.date+"</span><p class='comment-text'>"+data.text+"</p></div></div>";
  $(".comments").append(html);
}