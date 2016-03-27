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
        title: "BITCH eat yo f00d",
        text: "If you finished 30% more of your food, over one year you'd save (annual waste)(30%)(14.6)lbs from going to your local waste facility.",
        html: true,
        closeOnConfirm: false,
        animation: "slide-from-top", 
    }

    );

    $(".sa-button-container").css("margin-left", "-70px")
    $(".sa-confirm-button-container").css("margin-bottom", "30px")
}
