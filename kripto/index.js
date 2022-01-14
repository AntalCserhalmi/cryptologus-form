const url = "localhost:4000/discord";

$(document).ready(function(){
    $validator = $("#sign-form").validate({
        rules: {
            discord: {
                minlength: 5,
                required: true
            },
            q1: {
                minlength: 1,
                required: true
            },
            q2: {
                minlength: 1,
                required: true
            },
            q3: {
                minlength: 1,
                required: true
            },
            q4: {
                minlength: 1,
                required: true
            },
            q5: {
                minlength: 1,
                required: true
            },
            q6: {
                minlength: 1,
                required: true
            },
            q7: {
                minlength: 1,
                required: true
            },
            q8: {
                minlength: 1,
                required: true
            },

        },
        messages: {
            discord: {
                required: "Ezt a mezőt kötelező kitölteni!",
                minlength: "Legalább 5 karakterből kell állnia a mezőnek!"
            },
            q1: {
                minlength: "Ez a mező nem lehet üres!",
                required: "Ezt a mezőt kötelező kitölteni!"
            },
            q2: {
                minlength: "Ez a mező nem lehet üres!",
                required: "Ezt a mezőt kötelező kitölteni!"
            },
            q3: {
                minlength: "Ez a mező nem lehet üres!",
                required: "Ezt a mezőt kötelező kitölteni!"
            },
            q4: {
                minlength: "Ez a mező nem lehet üres!",
                required: "Ezt a mezőt kötelező kitölteni!"
            },
            q5: {
                minlength: "Ez a mező nem lehet üres!",
                required: "Ezt a mezőt kötelező kitölteni!"
            },            q1: {
                minlength: "Ez a mező nem lehet üres!",
                required: "Ezt a mezőt kötelező kitölteni!"
            },
            q6: {
                minlength: "Ez a mező nem lehet üres!",
                required: "Ezt a mezőt kötelező kitölteni!"
            },
            q7: {
                minlength: "Ez a mező nem lehet üres!",
                required: "Ezt a mezőt kötelező kitölteni!"
            },
            q8: {
                minlength: "Ez a mező nem lehet üres!",
                required: "Ezt a mezőt kötelező kitölteni!"
            },

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
