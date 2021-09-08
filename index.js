document.addEventListener('DOMContentLoaded', () => {
    // happening upon page loading
    // get and load songs
    fetchSongs()
    createSongForm()
})

const BASE_URL = "http://localhost:3000/api/v1"

// read - fetch songs index
function fetchSongs() {
    fetch(`${BASE_URL}/songs`)
    // returns a promise
    .then(resp => resp.json())
    // in promise theres is a response we can parse to json, turning into javascript object notation
    .then(songs => {
        // doing something with data fetched

        // for (const song of songs.data){
        //     let s = new Song(song.id, song.title, song.artist, song.img_url, song.link, song.genre_id)
        //     s.renderSong();
        // }
        // debugger
        songs.data.forEach(song => {
            let newSong = new Song(song, song.attributes)
            document.getElementById("songs-container").innerHTML += newSong.renderSongInfo()
        });
    })
    // shows what failed in backend: object wasnt created correctly
    // instead of console.log, create an alert or show on dom what err is 
    // .catch(err => console.log(err));
}

// create - create new songs
    // create a form
    // add an event listener
    // once form is submitted => fetch 'post' to backend
    // do something with returned object
function createSongForm() {
    let songForm = document.getElementById("song-form")
    songForm.innerHTML +=
    `
    <form id="create-song-form" style="">
        <h3>Add a Song to Learn!</h3>
        <label for="title">Title:</label>
        <input id="input-title" type="text" name="title" value="" placeholder="Song name..." class="input-text">
        <br><br>
        <label for="artist">Artist:</label>
        <input id="input-artist" type="text" name="artist" value="" placeholder="Artist name..." class="input-text">
        <br><br>
        <label for="image">Album Cover:</label>
        <input id="input-url" type="text" name="image" value="" placeholder="Image URL..." class="input-text">
        <br><br>
        <label for="link">Ukulele Chords:</label>
        <input id="link-url" type="text" name="link" value="" placeholder="Tab URL..." class="input-text">
        <br><br>
        <label for"genres">Choose a Genre:</label>
        <select id="genres-select" name="genres" placeholder="Please Select">
            <option value="1">Pop</option>
            <option value="2">R&B</option>
            <option value="3">Indie</option>
            <option value="4">Hip Hop</option>
            <option value="5">Country</option>
            <option value="6">Rock</option>
            <option value="7">Alternative</option>
            <option value="8">Jazz</option>
            <option value="9">Latin</option>
            <option value="10">Reggae</option>
            <option value="11">Electronic</option>
            <option value="12">Religious</option>
            <option value="13">Metal</option>
            <option value="14">Folk</option>
            <option value="15">Soundtrack</option>
            <option value="16">World</option>
            <option value="17">Comedy</option>
            <option value="18">Blues</option>
            <option value="19">Disco</option>
            <option value="20">New Age</option>
        </select>
        <br><br>

        <input id="create-button" type="submit" value="Add Song" class="submit">
        <br><br>
    </form>
    `
    songForm.addEventListener('submit', (e) => submittedSongForm(e))
}

function submittedSongForm(e) {
    e.preventDefault();
    const titleValue = document.getElementById("input-title").value
    const artistValue = document.getElementById("input-artist").value
    const imageValue = document.getElementById("input-url").value
    const linkValue = document.getElementById("link-url").value
    const genreId = document.getElementById("genres-select").value
    // const genreValue = parseInt(document.getElementById("genres-select").value)
    songPostFetch(titleValue, artistValue, imageValue, linkValue, genreId)
}

function songPostFetch(title, artist, img_url, link, genre_id) {
    // console.log(title, artist, img_url, link, genre_id)
    // build body object outside fetch, using destructuring (values match property names)
    const bodyData = {title, artist, img_url, link, genre_id}
    fetch(`${BASE_URL}/songs`, {
        method: "POST",
        headers: {"Content-Type": "application/json"
        // accept: "application/json"
    },
        // what we're sending out and what accepting back
        body: JSON.stringify(bodyData)
            // title: title,
            // artist: artist,
            // img_url: img_url,
            // link: link,
            // genre_id: genre_id
    })
    .then(resp => resp.json())
    .then(song => {
        // console.log(song);
        const songData = song.data
        // render JSON response
        let newSong = new Song(songData, songData.attributes)
        document.getElementById("songs-container").innerHTML += newSong.renderSongInfo()
        let actualSongForm = document.getElementById("create-song-form")
        actualSongForm.reset()
        // div.addEventListener("click", deleteOrEditSong)
    })
}

// delete - delete OR edit a song
// function deleteOrEditSong() {
    // debugger;, in console, this = window
    // debugger
    // if(e.target.innerText === "Delete"){
    //     let songId = parseInt(e.target.dataset.id)
    //     e.target.parentElement.remove()
    //     const configObject = {
    //         method: 'DELETE'
    //     }
    //     fetch(`${BASE_URL}/songs/${songId}`, configObject)
    //     .then(resp => resp.json())
    //     .then(song => alert(song.message))
    // }
// }

function deleteSong() {
    // debugger;, in console, this = window
    // debugger
    let songId = parseInt(event.target.dataset.id)
    // console.log(songId)
    event.target.parentElement.remove()
    configObject = {
        method: 'DELETE'
    }
    fetch(`${BASE_URL}/songs/${songId}`, configObject)
        .then(resp => resp.json())
        .then(song => alert(song.message))
    // make it so a user does not have to refresh page, auto-refresh
    // this.location.reload()
}

// read - fetch genres index