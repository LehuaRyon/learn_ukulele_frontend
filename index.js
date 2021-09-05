document.addEventListener('DOMContentLoaded', () => {
    // happening upon page loading
    fetchSongs()
})

const BASE_URL = "http://localhost:3000/api/v1"

// read - fetch songs index
function fetchSongs() {
    fetch{`${BASE_URL}/songs`}
    .then(resp => resp.json())
    .then(songs => {
        // doing something with data fecthed
        
    })
}

// create - create new songs

// delete - delete a user