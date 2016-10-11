/**
 * Toolkit JavaScript
 */
var $ = require('jquery');

'use strict';

var bgColor,
    active = false;

$(document).ready(function(){
    $('.soundbutton').click(function(){
        $(this).find('img').attr('src','/assets/toolkit/images/animated-speaker.gif');
    });
    $('.checkbutton').click(function(){
        if(!active) {
            $(this).css({'backgroundColor':'#bddbf0','border':'3px solid #fff'});
            $('.soundbutton').css({'backgroundColor':'#bddbf0'});
            active = true;
        } else {
            $(this).css({'backgroundColor':'#fff','border':'3px solid #bddbf0'});
            $('.soundbutton').css({'backgroundColor':'#fff'});
            active = false;
        }

    });
});
