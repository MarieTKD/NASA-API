//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://api.nasa.gov/planetary/apod?api_key=gA1hXAW4eST5SZuLhwNrM0Xosv2wCfu8KJ7CUquS&date=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        if (data.media_type === 'image') {
            document.querySelector('img').src = data.hdurl
        }
        else if (data.media_type === 'video') {
            document.querySelector('iframe').src = data.url
        }
        document.querySelector('h3').innerText = data.explanation
        document.querySelector('#title').innerText = data.title
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

