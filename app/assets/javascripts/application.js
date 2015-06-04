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

// Jellyvision

var app = angular.module("myApp", []);

app.controller('MainController',
['$scope', function($scope) {
  $scope.title = 'Jellyvision Cover Letter';
  $scope.phase = 0;
  $scope.reasonOneTold = false;
  $scope.reasonTwoTold = false;
  $scope.reasonThreeTold = false;
  $scope.reasonCountTold = 0;
  $scope.textSections = [
  {
    textPhase: 0,
    image: 'http://i.giphy.com/YlQQYUIEAZ76o.gif',
    text: 'Hi, I’m DJ DeWitt, and I’m from the future.',
    responses: [
      { phaseTo: 1, responseText: 'Whoa, the future!? What’s that like?' },
      { phaseTo: 2, responseText: 'Pfft, prove it.' },
      { phaseTo: 3, responseText: 'I don’t have time for lovingly crafted, compelling cover letter narratives! Get to the point!' }
    ]
  },
  {
    textPhase: 1,
    image: 'http://i.giphy.com/iv9Fw2gIZ4V3O.gif',
    text: 'It’s amazing! The Cubs won the World Series! Oh – also – Jellyvision’s bold vision of interactive storytelling has propelled the quirky interactive marketing company into becoming an intergalactic mega-corporation.',
    responses: [
      { phaseTo: 4, responseText: 'w00t! Go cubs! Wait – what was that about an intergalactic mega-corporation?' },
      { phaseTo: 5, responseText: 'Please, I’m a White Sox fans. Tell me more about mega-corporation thing – Do we make Terminator cyborgs now or something?' }
    ]
  },
  {
    textPhase: 2,
    image: 'http://i.giphy.com/QObgfkPx5Id0Y.gif',
    text: 'Fine, you asked for it: Hodor wins the Game of Thrones. Also, Jellyvision’s now an intergalactic mega-corporation thanks to its bold vision of interactive storytelling.',
    responses: [
      { phaseTo: 4, responseText: 'Augh! Spoiler Warning next time! Wait, intergalactic mega-corporation?' },
      { phaseTo: 5, responseText: 'Unless Hodor wins The Bachelorette, I couldn’t care less. Wait…are you telling me Jellyvision – humble, interactive marketing company – now makes killer robots?' }
    ]
  },
  {
    textPhase: 3,
    image: 'http://i.giphy.com/WjSD2SNQmO1Pi.gif',
    text: 'Okay, okay. You want to know why I think I should be Jellyvision’s new Jr. Full Stack Developer. Here’s three reasons:',
    responses: [
      { phaseTo: 9, responseText: '1. Jellyvision is my one true love.' },
      { phaseTo: 14, responseText: '2. This isn’t my first “code-eo” (My jokes get better, I swear)' },
      { phaseTo: 20, responseText: '3. I’m a seed – that helps its environment grow.' }
    ]
  },
  {
    textPhase: 4,
    image: 'http://i.giphy.com/muVfdK4fmamek.gif',
    text: 'Don’t worry, Jellyvision ain’t The Empire! Let me explain. Technology is everywhere, and with it comes the Jellyvision philosophy: That interacting with tech should be like having a conversation, not fuddling with forms and deciphering commands.',
    responses: [
      { phaseTo: 6, responseText: 'In the future, those touchscreen coke machines must actually be easy to use!' },
      { phaseTo: 6, responseText: 'That’s what I’ve been saying all along!' }
    ]
  },
  {
    textPhase: 5,
    image: 'http://i.giphy.com/YoB1eEFB6FZ1m.gif',
    text: 'No killer robots, sorry! Let me explain. Technology is everywhere, and with it comes the Jellyvision philosophy: That interacting with tech should be like having a conversation, not fuddling with forms and deciphering commands.',
    responses: [
      { phaseTo: 6, responseText: 'I’m bummed about the robots, but that sounds pretty cool too.' },
      { phaseTo: 6, responseText: 'This sounds like a future I want to live in!' }
    ]
  },
  {
    textPhase: 6,
    image: 'http://i.giphy.com/DlItrKrtLcSmA.gif',
    text: 'It’s radical! With it came a brilliant new idea: Asynchronous conversations. Using data about how people interact, Jellyvision provides blueprints for commonly repeated conversations: first dates, awkward family gatherings…even job interviews! One person can set up their dialogue for the other to engage with at their convenience. No more waiting for the other person to respond.',
    responses: [
      { phaseTo: 7, responseText: 'Whoa. So you brought this “async convo” tech back in time to apply to Jellyvision? Won’t that disrupt the space-time continuum or something?' }
    ]
  },
  {
    textPhase: 7,
    image: 'http://i.giphy.com/lLMigykTGPUwU.gif',
    text: 'I’m counting on it! You see, in the future…I don’t work for Jellyvision. Also, the Earth is going to explode. I don’t know if those two facts are linked, but I thought I’d give the whole “changing the future” thing a shot anyway.',
    responses: [
      { phaseTo: 8, responseText: 'Woof. Alright, so let’s get to it: Why do you think you should be our next Jr. Full Stack Developer?' },
      { phaseTo: 8, responseText: '“Saving the world” is a pretty good reason to hire you as our next Jr. Full Stack Developer, but do you have any other reasons we should give you the gig?' }
    ]
  },
  {
    textPhase: 8,
    image: 'http://i.giphy.com/WjSD2SNQmO1Pi.gif',
    text: 'I think I should be your next junior developer for three simple reasons:',
    responses: [
      { phaseTo: 9, responseText: '1. Jellyvision is my one true love.' },
      { phaseTo: 14, responseText: '2. This isn’t my first “code-eo” (My jokes get better, I swear)' },
      { phaseTo: 20, responseText: '3. I’m a seed – that helps its environment grow.' }
    ]
  },
  {
    textPhase: 9,
    image: 'http://i.giphy.com/XWCgxDghEkHBu.gif',
    text: 'I remember where I was when I first saw you, through the digital window of the Internet. Back when I was studying English Literature and International Studies at Northwestern University. Back before I became the first employee of Tempesta Media, a startup freshly graduated from 1871’s incubator program. Back before I left Tempesta to learn how to make technology of my own at Dev Bootcamp.',
    responses: [
      { phaseTo: 10, responseText: 'Wait, you studied the Humanities and then became a web developer? What’s that about?' },
      { phaseTo: 10, responseText: 'From bookworm to code monkey – how does that math add up? ' }
    ]
  },
  {
    textPhase: 10,
    image: 'http://i.giphy.com/X6khhaYwoYW1W.gif',
    text: 'Well, to me, technology and the humanities are inseparable. People write books (and poems, songs, films, games, etc.) to articulate the problems they face in their culture, and people make technology to solve those problems. Without an intimate understanding and appreciation of both, you can’t communicate issues and create solutions.',
    responses: [
      { phaseTo: 11, responseText: 'Interesting philosophy. What does it have to do with Jellyvision?' },
      { phaseTo: 11, responseText: 'Our technology is great, but writing is at the core of what we do. Is that what you’re talking about?' }
    ]
  },
  {
    textPhase: 11,
    image: 'http://i.giphy.com/3p7rRDTuq7ovS.gif',
    text: 'I’m wagering that Jellyvision – and the people that work there – think a little like I do. My reasoning? Y’all deconstructed You Don’t Know Jack and took out its most valuable idea: Technology that acts human. Technology that communicates. The ultimate marriage of The Humanities and Engineering. You saw that this idea was so powerful that it could be applied to all technology. If we’re on the same page…Alex is just the tip of the iceberg.',
    responses: [
      { phaseTo: 12, responseText: 'We are on the same page. Now, where do you see yourself in this story?' },
      { phaseTo: 12, responseText: 'You clearly stole our top-secret roadmap for becoming an intergalactic mega-corporation. What should we do with you?' }
    ]
  },
  {
    textPhase: 12,
    image: 'http://i.giphy.com/c5eqVJN7oNLTq.gif',
    text: 'Hire me, and you’ll get an employee that understands your mission on a fundamental level and will be loyal to a fault. Can I tell you my greatest weakness? I just can’t bring myself to work for a company unless I believe in it. I joined Tempesta Media because they were making a platform that would save journalism by helping online writers make a living wage – at a time when the Internet has made it nearly impossible to survive as an online writer. I applied to Jellyvision because I want to help create a future where technology is accessible because its conversational.',
    responses: [
      { phaseTo: 13, responseText: 'Wow, you’re clearly passionate about what we’re trying to do! However, a company is more than its mission – any other reasons we should hire you?' }
    ]
  },
  {
    textPhase: 13,
    image: 'http://i.giphy.com/4xqrlpYIayHAc.gif',
    text: '',
    responses: [
      { phaseTo: 9, responseText: '1. Jellyvision is my one true love.' },
      { phaseTo: 14, responseText: '2. This isn’t my first “code-eo” (My jokes get better, I swear)' },
      { phaseTo: 20, responseText: '3. I’m a seed – that helps its environment grow.' }
    ]
  },
  {
    textPhase: 14,
    image: 'http://i.giphy.com/GoTALlgLm338s.gif',
    text: 'Jellyvision isn’t the only one who got its start making games. Back when I was in middle school, I discovered the game development program GameMaker, an IDE with its own built-in scripting language (a mash-up of Python & JavaScript). For the past decade+, I’ve been a hobbyist video game developer. I got into it because I loved playing games, and making them meant I could combine all my creative interests into one project (I write, I compose music, I draw, I design, I program).',
    responses: [
      { phaseTo: 15, responseText: 'A cool introduction to coding! You make more than games though, right?' },
      { phaseTo: 15, responseText: 'You’ve got a lot of creative hobbies! You must really like making stuff, huh?' }
    ]
  },
  {
    textPhase: 15,
    image: 'http://i.giphy.com/scEmJ6yaTmhrO.gif',
    text: 'Definitely! Since I studied the humanities in college, it’s probably not a surprise I care deeply about the things people make to communicate their beliefs, ideas, and experiences. And any good media understudy knows the ol’ Marshall McLuhan saying: “The medium is the message.” Well, I think code is an artistic medium – I would argue, even, the defining medium of the 21st century. I want to master coding, and use that skill to create new experiences of tangible value. Not just games, but all types of applications.',
    responses: [
      { phaseTo: 16, responseText: 'Sounds great! Alex isn’t made in GameMaker though. Do you have any more applicable skills?' },
      { phaseTo: 16, responseText: 'I also happen to believe code in an art form. Any programming experience outside games?' }
    ]
  },
  {
    textPhase: 16,
    image: 'http://i.giphy.com/wpoLqr5FT1sY0.gif',
    text: 'My full skillset and accomplishments are in my resume, but here’s the gist of it: I learned Ruby (Rails & Sinatra), CSS (Sass & Less), and JavaScript (jQuery + AJAX) at Dev Bootcamp. When I was Team Lead for Horizon (www.djdewitt.com/projects/horizon), our final project, we practiced revision control, test-driven development, and pair programming. I’ve been working my way through JS Frameworks since graduation: This interactive cover letter was built from scratch using Angular, and my main side project – www.abetterfeed.com - also employs Angular.',
    responses: [
      { phaseTo: 17, responseText: 'We don’t expect you to know everything going in. Can you handle all the learning you’re going to have to do?' },
      { phaseTo: 17, responseText: '*Yoda voice* Learn more, you must.' }
    ]
  },
  {
    textPhase: 17,
    image: 'http://i.giphy.com/qKltgF7Aw515K.gif',
    text: 'You could accurately describe me as a voracious learner. Selfishly, I want to work at Jellyvision because I know it’ll expose me to smart people, exciting technology, and game-changing ideas. I loved DevBootcamp because it was a super intense – but immensely supportive – learning environment. From what I’ve learned from my friend Emily (Hi Emily!), Jellyvision is the same way. On top of that, I love learning new things, and then sharing that knowledge with others. It’s why Twitter won’t let me follow any more people.',
    responses: [
      { phaseTo: 18, responseText: 'Wait, what? Twitter won’t let you follow any more people?' }
    ]
  },
  {
    textPhase: 18,
    image: 'http://i.giphy.com/wM1gZSIdIJCE0.gif',
    text: 'Yeah, I hit their follow limit: 2,000 users. I follow journalists, activists, oddballs, academics, artists, and innovators from every industry and walk of life, exposing myself to new perspectives that help me develop a broader and more empathetic sense of the world. More importantly…',
    responses: [
      { phaseTo: 19, responseText: '…Go on…' }
    ]
  },
  {
    textPhase: 19,
    image: 'http://i.giphy.com/uUfbtweIW3A7S.gif',
    text: '…I feel like we have a moral obligation to share what we’ve learned, helping those around us grow too. If you want someone who has digested 15 different takes on the latest breaking news story, someone with far-too-intimate knowledge of the Marvel cinematic universe, someone who always has a recommendation for interesting podcasts to listen to (99% Invisible, Song Exploder, StartUp) or publications to check out (Paleofuture, Brain Pickings, Kottke.org)…well, I’m your guy!',
    responses: [
      { phaseTo: 13, responseText: 'Sounds like you’ve learned a lot and like to learn! An employee is more than a list of skills, though – any other reasons we should hire you?' }
    ]
  },
  {
    textPhase: 20,
    image: 'http://i.giphy.com/S9C2vmzuK0dRm.gif',
    text: 'The environment I’m talking about is Jellyvision. The truth is, I’d be hard-pressed to find a company more exciting than Jellyvision: an institution with a twenty-five year history that still pulses with the unbridled energy of a startup. A diverse group of future friends that are fun, motivated, and kind.',
    responses: [
      { phaseTo: 21, responseText: 'So you like working with others?' },
      { phaseTo: 22, responseText: 'Do you think you’re a culture fit for Jellyvision?' }
    ]
  },
  {
    textPhase: 21,
    image: 'http://i.giphy.com/l41lWaKMHEiZXlZFS.gif',
    text: 'Culture is the key to success in any group, and Jellyvision’s culture sounds perfect. There’s yoga, the massage chair, volunteering events, and foosball tournaments – those are definitely signs of an exciting place that works hard, plays hard, and cares about the well being of those within and without the company. My personal favorite, though? Emily told me you have a little library (reminder: English Lit major here). If you don’t think I’m ready to be your next Jr. Full Stack Developer, let me be your librarian?',
    responses: [
      { phaseTo: 25, responseText: 'We’ll see! Think you could get along with your coding collaborators?' }
    ]
  },
  {
    textPhase: 22,
    image: 'http://i.giphy.com/AYKv7lXcZSJig.gif',
    text: 'I’ll be honest, while working as the first fulltime employee at a startup taught me a lot, not having co-workers is lonely – especially for an extroverted person like me. I need people around that want to toss the pigskin, play board games, go for a run, do arts and crafts, and theorize what will happen next on Game of Thrones.',
    responses: [
      { phaseTo: 23, responseText: 'You’re definitely describing the people who work at Jellyvision.' }
    ]
  },
  {
    textPhase: 23,
    image: 'http://i.giphy.com/fv8KclrYGp5dK.gif',
    text: 'That’s just it! I love that Jellyvisionaries have a license to be quirky and multi-interested. Emily told me that there are more than a few pop culture fiends in the office, with Serial, Going Clear, and The Jinx on the menu. The thought of going to work every day with people who are well read and love to talk about culture curiosities and news energizes me. I don’t even know if I’d ever leave!',
    responses: [
      { phaseTo: 24, responseText: 'We do love our mysteries. Speaking of piecing together clues, think you’d fit into our culture?' }
    ]
  },
  {
    textPhase: 24,
    image: 'http://i.giphy.com/l41lWaKMHEiZXlZFS.gif',
    text: 'Culture is the key to success in any group, and Jellyvision’s culture sounds perfect. There’s yoga, the massage chair, volunteering events, and foosball tournaments – those are definitely signs of an exciting place that works hard, plays hard, and cares about the well being of those within and without the company. My personal favorite, though? Emily told me you have a little library (reminder: English Lit major here). If you don’t think I’m ready to be your next Jr. Full Stack Developer, let me be your librarian?',
    responses: [
      { phaseTo: 27, responseText: 'We could use a librarian! So tell me, how does the seed help the environment grow?' }
    ]
  },
  {
    textPhase: 25,
    image: 'http://i.giphy.com/AYKv7lXcZSJig.gif',
    text: 'I’ll be honest, while working as the first fulltime employee at a startup taught me a lot, not having co-workers is lonely – especially for an extroverted person like me. I need people around that I can throw the pigskin around with, play board games, and theorize what will happen next on Game of Thrones.',
    responses: [
      { phaseTo: 26, responseText: 'You’re definitely describing the people who work at Jellyvision.' }
    ]
  },
  {
    textPhase: 26,
    image: 'http://i.giphy.com/fv8KclrYGp5dK.gif',
    text: 'That’s just it! I love that Jellyvisionaries have a license to be quirky and multi-interested. Emily told me that there are more than a few pop culture fiends in the office, with Serial, Going Clear, and The Jinx on the menu. The thought of going to work every day with people who are well read and love to talk about culture curiosities and news energizes me. I don’t even know if I’d ever leave!',
    responses: [
      { phaseTo: 27, responseText: 'We do love our mysteries! So how about you tell us the solution to that riddle: The seed helps the environment grow?' }
    ]
  },
  {
    textPhase: 27,
    image: 'http://i.giphy.com/yr5082UYJJ0Wc.gif',
    text: 'Well, the seed in the metaphor is me. Jellyvision is a creative environment that can help me grow to become a better coder and a better person. If I work there, I want to do the same for my coworkers. An entertaining, edifying presence.',
    responses: [
      { phaseTo: 13, responseText: 'Well, it sounds like you’d fit right in. Any other reasons we should hire you?' }
    ]
  },
  {
    textPhase: 28,
    image: 'http://i.giphy.com/AeWoyE3ZT90YM.gif',
    text: 'You’ve reached the end of DJ DeWitt’s interactive cover letter. It was made entirely using Angular.JS, and lives on my website, created using Ruby on Rails. Thank you again for reading!',
    responses: [
    ]
  }
  ];
  $scope.checkReasonCompletion = function(phaseTo) {
    if ((phaseTo == 9) && ($scope.reasonOneTold == true)) {
      return false;
    } else if ((phaseTo == 14) && ($scope.reasonTwoTold == true)) {
      return false;
    } else if ((phaseTo == 20) && ($scope.reasonThreeTold == true)) {
      return false;
    } else {
      return true;
    };
  };
  $scope.changePhase = function(textPhase) {
    $scope.phase = textPhase;
    // Lock off each reason route that has already been explored
    if (textPhase == 9) {
      $scope.reasonOneTold = true;
      $scope.reasonCountTold += 1;
    };
    if (textPhase == 14) {
      $scope.reasonTwoTold = true;
      $scope.reasonCountTold += 1;
    };
    if (textPhase == 20) {
      $scope.reasonThreeTold = true;
      $scope.reasonCountTold += 1;
    };
  };
  $scope.restartLetter = function() {
    $scope.reasonCountTold = 0;
    $scope.reasonOneTold = false;
    $scope.reasonTwoTold = false;
    $scope.reasonThreeTold = false;
    $scope.phase = 0;
  };
}]);