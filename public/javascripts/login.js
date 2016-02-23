/**
 * Created by elanastroud on 2/22/16.
 */

console.log("login page")

$(document).ready(function(){
    $('#login').click(function(){
//        alert("JQuery Running!");
        window.location.href = '/home';
        console.log("tried changing loc")
    });
});

$("#login-button").click(function(event){
    event.preventDefault();

    $('form').fadeOut(500);
    $('.wrapper').addClass('form-success');
    setTimeout(function() {
        window.location.href = '/home'
    }, 1500)
});
