class Song{
    // map attributes onto new song instances
    constructor(song, songAttributes) {
        // with fast JSON, attributes are nested
        this.id = song.id;
        this.title = songAttributes.title;
        this.artist = songAttributes.artist;
        this.img_url = songAttributes.img_url;
        this.link = songAttributes.link;
        this.genre_id = songAttributes.genre_id;
    }

    // instance method that renders song object to dom
    // renderSong(){
    //     let songsDiv = document.getElementById("songs-container")
    //     songsDiv.innerHTML +=
    //     `
    //     <div data-id=${this.id}>
    //     <img src=${this.attributes.img_url} height="200" width="250">
    //     <h3>${this.attributes.title}</h3>
    //     <p>${this.attributes.genre.name}</p>
    //     <button data-id=${this.id}>edit</button>
    //     </div>
    //     <br><br>
    //     `
    // }
}


