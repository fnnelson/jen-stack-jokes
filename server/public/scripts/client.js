// console.log('client.js sourced');

$(document).ready(onReady);

function onReady() {
    // console.log('jQuery ready');

    // handler
    $('#addJokeButton').on('click', handleJokeButton)

}

function handleJokeButton(event) {
    event.preventDefault();
    let jokeTeller = $('#whoseJokeIn').val();
    let jokeSetUp = $('#questionIn').val();
    let jokePunchLine = $('#punchlineIn').val();
    if (!jokeTeller || !jokeSetUp || !jokePunchLine) {
        alert('Please complete all inputs!')
    } else {
        let jokeObject = {
            whoseJoke: jokeTeller,
            jokeQuestion: jokeSetUp,
            punchLine: jokePunchLine
        }
    }
}