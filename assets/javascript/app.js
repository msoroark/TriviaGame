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
    time: 10,

    //reset game
    reset: function() {
        clock.time = 10;

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
            var unanswered = (correctTally + inCorrectTally - 10); 
            clock.stop();
            $('.hideQuestion').addClass('hidden');
            $('.result').removeClass('hidden');
            $('#msg').text('Time\'s Up!');
            $("#right").text(correctTally);
            $("#wrong").text(inCorrectTally);
            $('#unanswered').text(unanswered);
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
    }
}
$('.btn-success').on('click', clock.start);
$('.correct').on('click', function(){
    correctTally++;

});
$('.incorrect').on('click', function(){
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