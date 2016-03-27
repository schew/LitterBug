/**
 * Created by elanastroud on 3/27/16.
 */

function showModal() {
//    swal({
//        title: "HTML <small>Title</small>!",
//        text: "A custom <span style="color:#F8BB86">html<span> message.",
//        html: true
//    });
//    swal("Here's a message!")




    swal({
        title: "Challenge a neighbor!!",
        text: "Find out who can reduce the most waste week by week:<br><br>",
        html: true,
        type: "input",
        showCancelButton: true,
        closeOnConfirm: false,
        animation: "slide-from-top",
        inputPlaceholder: "Search by username or address" },
        function(inputValue){
            if (inputValue === false) return false;
            if (inputValue === "") {
                swal.showInputError("You need to write something!");
                return false   }
            swal("Nice!", "You wrote: " + inputValue, "success");
        }
    );

    $(".sa-button-container").css("margin-left", "-70px")
    $(".sa-confirm-button-container").css("margin-bottom", "30px")



}
