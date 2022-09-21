/*
//PROMISES 
// GET https://icanhazdadjoke.com/

const jokes = document.querySelector('#joke');
const jokeBtn = document.querySelector('#jokeBtn');
const generateJokes = () => {

    const setHeader = {
        headers: {
            Accept: "application/json"
        }
    }

    fetch('https://icanhazdadjoke.com', setHeader)
        .then((res) => res.json())
        .then((data) => {
            joke.innerHTML = data.joke;
        }).catch(() => {
            console.log(error);;
        })
}


jokeBtn.addEventListener('click', generateJokes);
generateJokes();
*/

//  using async await



const generateJokes = async () => {

    try {
        const setHeader = {
            headers: {
                Accept: "application/json"
            }
        }

        const res = await fetch('https://icanhazdadjoke.com', setHeader);

        const data = await res.json();
        joke.innerHTML = data.joke;
    } catch (err) {
        console.log(`The error is ${err} `);
    }
}

jokeBtn.addEventListener('click', generateJokes);
generateJokes();