const url = "localhost:4000/discord";

$(document).ready(function(){
    $validator = $("#sign-form").validate({
        rules: {
            discord: {
                minlength: 5,
                required: true
            },
            magic: {
                minlength: 1,
                required: true
            }
        },
        messages: {
            discord: {
                required: "Ezt a mezőt kötelező kitölteni!",
                minlength: "Legalább 5 karakterből kell állnia a mezőnek!"
            },
            magic: {
                minlength: "Ez a mező nem lehet üres!",
                required: "Ezt a mezőt kötelező kitölteni!"
            }
        },

        highlight: function() {
            $("#submit").attr("disabled", "disabled");
        },
        success: function (){
            $("#submit").removeAttr("disabled");
        }
    })
});

function sendToBot(data){
    var request = $.post(`${url}`, data, function(){
        alert("Sikeresen beadtad a jelentkezésed.")
    }).fail(function(){
        alert("Valami hiba történt, kérlek próbáld meg később");
    });
}


$("#submit").click(function(){
    console.log($("#sign-form").valid())
    if ($("#sign-form").valid()){
        alert("Sikeresen kitöltötted a lapot!")
    }
});
