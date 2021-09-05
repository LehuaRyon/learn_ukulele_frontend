document.addEventListener('DOMContentLoaded', () => {
    // happening upon page loading
    fetchSongs()
})

const BASE_URL = "http://localhost:3000/api/v1"

// read - fetch songs index
function fetchSongs() {
    fetch(`${BASE_URL}/songs`)
    // returns a promise
    .then(resp => resp.json())
    // in promise theres is a response we can parse to json
    .then(songs => {
        // doing something with data fetched

        // for (const song of songs.data){
        //     let s = new Song(song.id, song.title, song.artist, song.img_url, song.link, song.genre_id)
        //     s.renderSong();
        // }

        songs.data.forEach(song => {
            const songsDivMarkup =
            `
            <div data-id=${song.id}>
                <img src=${song.attributes.img_url} height="200" width="250">
                <h2>Title: ${song.attributes.title}</h2>
                <h3>Artist: ${song.attributes.artist}</h3>
                <p>Genre: ${song.attributes.genre.name}</p>
                <a href=${song.attributes.link}>Ukulele Chords</a>
                <button data-id=${song.id}>edit</button>
            </div>
            <br><br>
            `;
            document.getElementById("songs-container").innerHTML += songsDivMarkup
        })
    })
}

// create - create new songs

// delete - delete a user