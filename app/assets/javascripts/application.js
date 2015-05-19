// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

// Social Media Icons Control (Hover and Click)
function hover(element) {
    element.setAttribute('src', 'twitter_button_hover.svg');
}
function unhover(element) {
    element.setAttribute('src', 'twitter_button.svg');
}

function djHomeClass() {
    window.location.href = '/';
}

function socialTwitter() {
    window.location.href = 'https://twitter.com/djdewitt';
}

function socialLinkedIn() {
    window.location.href = 'https://linkedin.com/in/djdewitt';
}

function socialGitHub() {
    window.location.href = 'https://github.com/DJDeWitt';
}

function socialMail() {
    window.location.href = 'mailto:djdewitt@gmail.com';
}

// MOBILE NAVBAR
$(document).ready(function(){
  $('.right.menu.open').on("click",function(e){
        e.preventDefault();
    $('.ui.vertical.menu').toggle();
  });

  $('.ui.dropdown').dropdown();
});

// CMS Tabbing
$(document).ready(function() {

  $("#viewPreview").hide();

  $("#buttonHTML").click(function( event ) {
    event.preventDefault();
    // Get text from HTML
    var text = $('.mytextarea').val();
    $("#viewHTML").show();
    $("#viewPreview").hide();

    // Replace Post Body
    var text_area_value = $("#post_body").val();
    $("div.demo-container").html(text_area_value);
  });

  $("#buttonPreview").click(function( event ) {
    event.preventDefault();
    // Get text from HTML
    var text = $('.mytextarea').val();
    $("#viewHTML").hide();
    $("#viewPreview").show();

    // Replace Post Title
    var text_area_value = $("#post_title").val();
    $("span.title-container").html(text_area_value);
    // Replace Post Dek
    var text_area_value = $("#post_dek").val();
    $("span.dek-container").html(text_area_value);
    // Replace Image Src
    var text_area_value = $("#post_image").val();
    $("img.image_container").attr("src",text_area_value);
    // Replace Post Body
    var text_area_value = $("#post_body").val();
    $("div.body-container").html(text_area_value);
  });

});