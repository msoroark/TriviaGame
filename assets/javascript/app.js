//from first answer clock starts.
window.onload = function() {
    $(".col-md-3").on("click", clock.start);
    $('.result').addClass('hidden');
};

var intervalId;
var clockRunning = false;

var clock = {
    time: 5,

    //reset game
    reset: function() {
        clock.time = 5;

        $("#timeLeft").html("1:00");
    },
    //START CLOCK
    start: function() {
        if (!clockRunning) {
            intervalId = setInterval(clock.count, 1000);
            clockRunning = true;
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
            clock.stop();
            $('.hideQuestion').addClass('hidden');
            getValues();
        };

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

function getValues() {
	var val = $("input[type='radio'][name='question1']:checked").val();
	console.log(val);
}



    //for every radio button selected how many are true and how many are false


    //after one minute game ends. 

    //register what is checked on game. 

    //compare correct/incorrect answers.
    //hide questions
    //page for winning.
    // page for losing.