class Song{
    constructor(id, title, artist, img_url, link, genre_id) {
        this.id = id;
        this.title = title;
        this.artist = artist;
        this.img_url = img_url;
        this.link = link;
        this.genre_id = genre_id;
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


