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