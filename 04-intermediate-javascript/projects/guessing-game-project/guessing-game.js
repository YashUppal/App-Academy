let secretNumber = 0;
let numAttempts = 7;

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const askGuess = () => {

    if(numAttempts === 0) {
        console.log("");
        console.log("You Lose :(");
        console.log("Correct guess was",secretNumber);
        console.log("Game Over");
        rl.close();
        return false;
    }

    rl.question("Enter a guess: ", userInput => {
        const result = checkGuess(Number(userInput));
        if(result) {
            console.log("You Win!");
            rl.close();
        } else {
            askGuess();
        }

    })

    numAttempts--;
}


const checkGuess = (guess) => {
    if (guess === secretNumber) {

        console.log("");
        console.log("Correct!");

        return true;

    } if (guess > secretNumber) {

        console.log("Too high.");

        return false;

    } else if (guess < secretNumber) {

        console.log("Too low.");

        return false;

    }
}

const randomInRange = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

secretNumber = randomInRange(0,100);

const askRange = () => {
    rl.question("Enter a min number: ",userResponse1 => {

        if(userResponse1) {

            rl.question("Enter a max number: ",userResponse2 => {

                if(userResponse2) {
                    console.log(`I'm thinking of a number between ${userResponse1} and ${userResponse2}...`);
                    secretNumber = randomInRange(Number(userResponse1), Number(userResponse2));

                    askGuess();
                }
            })

        }
        askRange();
    })
}

const askLimit = () => {
    rl.question("Enter the number of attempts: ",userResponse => {
        if(userResponse > 0) {
            numAttempts = userResponse;
            askRange();
        } else {
            console.log("Invalid Input");
            askLimit();
        }
    })
}

askLimit();
