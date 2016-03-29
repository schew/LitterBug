/**
 * Created by elanastroud on 3/27/16.
 */

function showChallengeNeighbor() {
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
        allowOutsideClick: true,
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

function showTips() {
    swal({
        title: "Finish your food",
        text: "If you finished 30% more of your food, over one year you'd save about 170lbs from going to your local waste facility. That's 8.5 watermelons!",
        html: true,
        imageUrl: "../stylesheets/images/melons.png",
        imageSize: "300x150",
        closeOnConfirm: false,
        allowOutsideClick: true,
        animation: "slide-from-top",
    }

    );

    $(".sa-button-container").css("margin-left", "-70px")
    $(".sa-confirm-button-container").css("margin-bottom", "30px")
}
