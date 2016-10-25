/**
 * Toolkit JavaScript
 */
var $ = require('jquery');

'use strict';

var bgColor,
    index = 0;

var sounds =  ['chime1.m4a','chime2.m4a','quack2.mp3'];

var soundclip = document.createElement('audio');
soundclip.setAttribute('src', '/assets/toolkit/sounds/' + sounds[0]);

$(document).ready(function(){
    $('.soundbutton').click(function(){
        $('.soundbutton').find('img').attr('src','/assets/toolkit/images/speaker-off.gif');
        $('.soundbutton').css({'color':'#fff'});

        //this prevents the browser from caching the animated GIF and not reloading it
        var d = new Date();
        $(this).find('img').attr('src','/assets/toolkit/images/animated-speaker.gif?'+d.getTime());

        index = $(this).index();
        if(index === 2) {
            index = 1;
        } else if (index === 4) {
            index = 2;
        }
        soundclip.setAttribute('src', '/assets/toolkit/sounds/' + sounds[index]);
        soundclip.play();
    });
    $('.checkbutton').click(function(e){
        $('.soundbutton').find('img').attr('src','/assets/toolkit/images/speaker-off.gif');
        $('.soundbutton, .checkbutton').removeClass('activated');
        $(this).addClass('activated');
        $(this).prev('.soundbutton').addClass('activated');

    });
});
