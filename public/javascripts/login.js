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
