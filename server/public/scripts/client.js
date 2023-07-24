// console.log('client.js sourced');

$(document).ready(onReady);

function onReady() {
    // console.log('jQuery ready');

    $('#addJokeButton').on('click', handleJokeButton)

}

function handleJokeButton(event) {
    event.preventDefault();
    let jokeObject;
    let jokeTeller = $('#whoseJokeIn').val();
    let jokeSetUp = $('#questionIn').val();
    let jokePunchLine = $('#punchlineIn').val();
    // I'm doing it this way so that an object is only created when all inputs were used for a complete object
    if (!jokeTeller || !jokeSetUp || !jokePunchLine) {
        alert('Please complete all inputs!')
    } else {
        jokeObject = {
            joker: jokeTeller,
            question: jokeSetUp,
            answer: jokePunchLine
        }
    }
    console.log('new joke object is:', jokeObject);

    $.ajax({
        method: 'POST',
        url: '/joke',
        data: jokeObject
    }).then((response) => {
        // likely want to add a function here to run the GET when it's back
        console.log('POST was successful, response:', response)
    }).catch((error) => {
        console.log('error caught:', error);
        alert("ERROR!");
    })


}

