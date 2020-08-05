const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

let request = new XMLHttpRequest();

request.open('GET', 'http://ghibliapi.herokuapp.com/films', true);
request.onload = function () {
    let data = JSON.parse(this.response);

    if (request.status >= 200 && request.status < 400) {
        data.forEach((movie) => {
            //create card
            const card = document.createElement('div');
            card.setAttribute('class', 'card');
            //create title heading
            const h1 = document.createElement('h1');
            h1.textContent = movie.title;
            //paragraph with the movie description
            const p = document.createElement('p');
            movie.description = movie.description.substring(0, 300); //limit to 300 chars
            p.innerText = `${movie.description}...`;
            //append cards to container
            container.appendChild(card);
            //append headings and paragraphs to cards
            card.appendChild(h1);
            card.appendChild(p);
        });
    } else {
        console.log('error');
    }
};

request.send();