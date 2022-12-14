const form = document.forms.magic8ball;

function ask(event) {
    event.preventDefault();
    form.style.display = 'none';
    let answerNum = Math.floor((Math.random() * 20) + 1);
    console.log(answerNum);
    let answers = document.getElementById('imageid');
    if (answerNum == 1) {
        answers.src="./img/magic8ball_1.png";
        answers.alt="an image of a magic 8 ball that reads'It is certain'";
    } else if (answerNum == 2) {
        answers.src="./img/magic8ball_2.png"; 
        answers.alt="an image of a magic 8 ball that reads 'It is decidedly so'";
    } else if (answerNum == 3) {
        answers.src="./img/magic8ball_3.png";
        answers.alt="an image of a magic 8 ball that reads 'Without a doubt'";
    } else if (answerNum == 4) {
        answers.src="./img/magic8ball_4.png";
        answers.alt="an image of a magic 8 ball that reads 'Yes, definitely'";
    } else if (answerNum == 5) {
        answers.src="./img/magic8ball_5.png";
        answers.alt="an image of a magic 8 ball that reads 'You may rely on it'";
    } else if (answerNum == 6) {
        answers.src="./img/magic8ball_6.png";
        answers.alt="an image of a magic 8 ball that reads 'As I see it, yes'";
    } else if (answerNum == 7) {
        answers.src="./img/magic8ball_7.png";
        answers.alt="an image of a magic 8 ball that reads 'Most likely'";
    } else if (answerNum == 8) {
        answers.src="./img/magic8ball_8.png";
        answers.alt="an image of a magic 8 ball that reads 'Outlook good'";
    } else if (answerNum == 9) {
        answers.src="./img/magic8ball_9.png";
        answers.alt="an image of a magic 8 ball that reads 'Yes'";
    } else if (answerNum == 10) {
        answers.src="./img/magic8ball_10.png";
        answers.alt="an image of a magic 8 ball that reads 'Signs point to yes'";
    } else if (answerNum == 11) {
        answers.src="./img/magic8ball_11.png";
        answers.alt="an image of a magic 8 ball that reads 'Reply hazy try again'";
    } else if (answerNum == 12) {
        answers.src="./img/magic8ball_12.png";
        answers.alt="an image of a magic 8 ball that reads 'Ask again later'";
    } else if (answerNum == 13) {
        answers.src="./img/magic8ball_13.png";
        answers.alt="an image of a magic 8 ball that reads 'Better not tell you now'";
    } else if (answerNum == 14) {
        answers.src="./img/magic8ball_14.png";
        answers.alt="an image of a magic 8 ball that reads 'Cannot predict now'";
    } else if (answerNum == 15) {
        answers.src="./img/magic8ball_15.png";
        answers.alt="an image of a magic 8 ball that reads 'Concentrate and ask again'";
    } else if (answerNum == 16) {
        answers.src="./img/magic8ball_16.png";
        answers.alt="an image of a magic 8 ball that reads 'Don't count on it'";
    } else if (answerNum == 17) {
        answers.src="./img/magic8ball_17.png";
        answers.alt="an image of a magic 8 ball that reads 'My reply is no'";
    } else if (answerNum == 18) {
        answers.src="./img/magic8ball_18.png";
        answers.alt="an image of a magic 8 ball that reads 'My sources say no'";
    } else if (answerNum == 19) {
        answers.src="./img/magic8ball_19.png";
        answers.alt="an image of a magic 8 ball that reads 'Outlook not so good'";
    } else if (answerNum == 20) {
        answers.src="./img/magic8ball_20.png";
        answers.alt="an image of a magic 8 ball that reads 'Very doubtful'";
    } else {
        answers.src=".img/magic8ball_extra.png";
    }
}

form.addEventListener('submit', ask);