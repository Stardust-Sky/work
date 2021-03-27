'use strict';

function learnjs(lang, callbacked){

    console.log('Я учу ' + lang);
    callbacked();
}

learnjs('javs', function(){
    console.log('3 lesson')
})