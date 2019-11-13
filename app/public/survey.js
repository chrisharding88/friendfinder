var closeModal = $(".close, #match-name");
var html = $('html, body');

closeModal.click(function(){
    $(".bg-modal").css("display", "none");
})

html.css({overflow: 'auto', height: 'auto'});





$('#submit').click(function(){
    event.preventDefault()
    var userData = {
        name: $("#name").val(),
        photo: $("#photo").val(),
        scores: [
            $("#q1").val(),            
            $("#q2").val(),
            $("#q3").val(),
            $("#q4").val(),
            $("#q5").val(),
            $("#q6").val(),
            $("#q7").val(),
            $("#q8").val(),
            $("#q9").val(),
            $("#q10").val()
        ]

    }

    // Displays the object that is made by the user
    console.log(userData);
$.post("/api/friends", userData,  function(data){
    console.log(data);

    $("#match").text(data.name);
    $("#imageMatch").attr("src", data.photo);

    $("#resultsModal").modal("toggle");

})










});