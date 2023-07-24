const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 5000;

// use bodyParser.urlencoded throughout the app with this:
app.use(bodyParser.urlencoded({ extended: true }));

// serve back static files
app.use(express.static('server/public'));

let jokes = [
  {
    whoseJoke: "Danny",
    jokeQuestion: "Why do scuba divers fall backwards out of boats?",
    punchLine: "If they fell forwards they’d still be in the boat!"
  },
  {
    whoseJoke: "Luke",
    jokeQuestion: "Two fish are in a tank. What did one fish say to the other?",
    punchLine: "Do you know how to drive this thing?"
  },
  {
    whoseJoke: "Millie",
    jokeQuestion: "What do you call a pile of cats?",
    punchLine: "A meowntain!"
  },
  {
    whoseJoke: "dEv",
    jokeQuestion: "Why should you not play cards in the forest?",
    punchLine: "Too many Cheetahs!"
  },
  {
    whoseJoke: "Scott",
    jokeQuestion: "I went to the zoo the other day, it had one dog...",
    punchLine: "It was a shih tzu."
  }
];

app.post('/joke', (req, res) => {
  res.send('req.body made it to the server!')
  console.log('at joke, req.body:', req.body)
  let newJoke;
  let jokeTeller = req.body.joker;
  let jokeSetUp = req.body.question;
  let jokePunchLine = req.body.answer;
  if (req.body == undefined) {
    // here, me trying to not push an empty object onto the array
  } else {
    // new short-hand object assignment Key just taught us
    newJoke = {
      whoseJoke: jokeTeller,
      jokeQuestion: jokeSetUp,
      punchLine: jokePunchLine
    };
  }
  // console.log("new joke bundled into new object at server:", newJoke);
  jokes.push(newJoke);
  console.log('jokes array is now:', jokes);

  // res.sendStatus(201);
})













app.listen(PORT, () => {
  console.log('server running on: ', PORT);
}); // end spin up server
