class Song{
    // remember objects
    static all = []
    // map attributes onto new song instances
    constructor(song, songAttributes) {
        // with fast JSON, attributes are nested
        this.id = song.id;
        this.title = songAttributes.title;
        this.artist = songAttributes.artist;
        this.img_url = songAttributes.img_url;
        this.link = songAttributes.link;
        this.genre = songAttributes.genre;
        // shove each new instance of song into the array
        Song.all.push(this)
    }

    // instance method that renders song object to dom
    renderSongInfo() {
        // debugger to see what this is
        return `
        <div data-id=${this.id}>
            <img src=${this.img_url} height="200" width="250">
            <h2>Title: ${this.title}</h2>
            <h3>Artist: ${this.artist}</h3>
            <p>Genre: ${this.genre.name}</p>
            <a href=${this.link}>Ukulele Chords</a>
            <br><br>
            <button class="edit-bttn" data-id=${this.id}>Edit</button>
            <button class="delete-bttn" data-id=${this.id} onclick="deleteSong()">Delete</button>
            <br><br>
        </div>
        `;
    }
}

// object and give .all key
// need to be in global scope so it can know about song class
// Song.all = [];


