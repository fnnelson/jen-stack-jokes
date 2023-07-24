// console.log('client.js sourced');

$(document).ready(onReady);

let jokeHistory;

function onReady() {
    // console.log('jQuery ready');
    $('#addJokeButton').on('click', handleJokeButton)
    updateJokesOnDom();
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
        updateJokesOnDom();
        console.log('POST was successful, response:', response)
    }).catch((error) => {
        console.log('error on POST:', error);
        alert("ERROR on POST!");
    })
}

function updateJokesOnDom() {
    $.ajax({
        method: 'GET',
        url: '/jokes'
    }).then((response) => {
        jokeHistory = response;
        // console.log('in GET at client - joke history updated!', jokeHistory); (didn't show more than 5 items in Chrome so will do another)
        render(jokeHistory);
    }).catch((error) => {
        console.log('error on GET:', error);
        alert("ERROR on GET!")
    })
}

function render(array) {
    $('#outputDiv').empty();

    for (let joke of array) {
        $('#outputDiv').append(`
        <div>
            <div>${joke.whoseJoke}'s Joke:</div>
            <div class="question">${joke.jokeQuestion}</div>
            <div class="answer">${joke.punchLine}</div>
        </div>
        `)
    }
}
