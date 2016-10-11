/**
 * Toolkit JavaScript
 */
var $ = require('jquery');

'use strict';

$(document).ready(function(){
    $('.soundbutton').click(function(){
        console.log('sound button called');
        $(this).find('img').attr('src','/assets/toolkit/images/animated-speaker.gif');
    });
});
