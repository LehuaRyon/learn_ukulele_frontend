document.addEventListener('DOMContentLoaded', () => {
    // happening upon page loading
    // console.log("loaded")
    fetchSongs()
})

const BASE_URL = "http://localhost:3000/api/v1"

// read - fetch songs index
function fetchSongs() {
    fetch{`${BASE_URL}/songs`}
    .then(resp => resp.json())
    .then(songs => {
        // doing something with data fetched
        
    })
}

// create - create new songs

// delete - delete a user