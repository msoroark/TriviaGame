//from first answer clock starts.
window.onload = function() {

    $('.result').addClass('hidden');
    $('.hideAtStart').addClass('hidden');
    $('.hideQuestion').addClass('hidden');
};

var intervalId;
var clockRunning = false;
var correctTally = 0;
var inCorrectTally = 0;





var clock = {
    time: 30,

    //reset game
    reset: function() {
        clock.time = 30;

        $("#timeLeft").html("1:00");
    },
    //START CLOCK
    start: function() {
        if (!clockRunning) {
            intervalId = setInterval(clock.count, 1000);
            clockRunning = true;
            $('.hideQuestion').removeClass('hidden');
            $('.hideAtStart').removeClass('hidden');
            $('.btn-success').addClass('hidden')
        }
    },

    stop: function() {
        clearInterval(intervalId);
        clockRunning = false;
    },

    //time runs down from one minute
    count: function() {

        clock.time--;
        var converted = clock.timeConverter(clock.time);
        console.log(converted);
        console.log(clock.time);
        $("#timeLeft").html(converted);

        if (clock.time === 0) {
            var unanswered = (correctTally + inCorrectTally - 6);
            clock.stop();
            $('.hideQuestion').addClass('hidden');
            $('.result').removeClass('hidden');
            $('#msg').text('Time\'s Up!');
            $("#right").text(correctTally);
            $("#wrong").text(inCorrectTally);
            $('#unanswered').text(unanswered);
            if (correctTally === 6) {
                $("#resultMsg").text("Perfect Score! You haven't even begun to peak.");
                $("#video").html('<iframe width="560" height="315" src="https://www.youtube.com/embed/gdWAhP8rYKA?rel=0&autoplay=1 " frameborder="0" allowfullscreen></iframe>');
            } 
            if (correctTally < inCorrectTally){
                $("#resultMsg").text("Hmm, do you have such a certificate?");
                $("#video").html('<iframe width="560" height="315" src="https://www.youtube.com/embed/RWc8JKVm28E?rel=0&autoplay=1 " frameborder="0" allowfullscreen></iframe>');
            } 
            if (unanswered > correctTally + inCorrectTally){
                $("#resultMsg").text("Try again! Can I offer you an egg in this trying time?");
                $("#video").html('<iframe width="560" height="315" src="https://www.youtube.com/embed/g8c9HvcDDHI?rel=0&autoplay=1 " frameborder="0" allowfullscreen></iframe>');
            }
        }

    },

    timeConverter: function(t) {

        var minutes = Math.floor(t / 60);
        var seconds = t - (minutes * 60);

        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        if (minutes === 0) {
            minutes = "0";
        } else if (minutes < 10) {
            minutes = "0" + minutes;
        }

        return minutes + ":" + seconds;
    },

    // playVideo: function() {
        // if (correctTally === 10) {
        //     $("#resultMsg").text("<h3> Perfect Score! You haven't even begun to peak.</h3>");
        //     $("#video").html('<iframe width="560" height="315" src="https://www.youtube.com/embed/gdWAhP8rYKA" frameborder="0" allowfullscreen></iframe>');
        // } else if (correctTally < inCorrectTally){
        //     $("#resultMsg").text("<h3>Hmm, do you have such a certificate?");
        //     $("#video").html('<iframe width="560" height="315" src="https://www.youtube.com/embed/RWc8JKVm28E" frameborder="0" allowfullscreen></iframe>');
        // } else if (unanswered > correctTally + inCorrectTally){
        //     $("#resultMsg").text("<h3>Try again! Can I offer you an egg in this trying time?</h3>");
        //     $("#video").html('<iframe width="560" height="315" src="https://www.youtube.com/embed/g8c9HvcDDHI" frameborder="0" allowfullscreen></iframe>');
        // }

    // }
}
$('.btn-success').on('click', clock.start);
$('.correct').on('click', function() {
    correctTally++;

});
$('.incorrect').on('click', function() {
    inCorrectTally++;
});

// function check() {
//     var answered = $('input[type=radio]:checked');
//     console.log(answered)
//     // loop over the selected answers
//     for(var i=0; i < answered.length; i++) {
//         var isCorrect = answered[i].attributes['data-answer']
//         console.log(isCorrect)
//         if (isCorrect === 'data-answer="1"'){
//             correctTally++;
//             console.log(correctTally);
//         }
//     }
// }



//for every radio button selected how many are true and how many are false


//after one minute game ends. 

//register what is checked on game. 

//compare correct/incorrect answers.
//hide questions
//page for winning.
// page for losing.