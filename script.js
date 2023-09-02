console.log("Welcome to Musico");

let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    { songName: "hello baby", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "quantum", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "hello baby", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "hello baby", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "hello baby", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "luck on the go", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "hello baby", filePath: "songs/7.mp3", coverPath: "covers/7.jpg" },
    { songName: "la la lala la", filePath: "songs/8.mp3", coverPath: "covers/8.jpg" },
    { songName: "calm down", filePath: "songs/9.mp3", coverPath: "covers/9.jpg" },
    { songName: "just chill", filePath: "songs/10.mp3", coverPath: "covers/10.jpg" }
]

songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName
})

// audioElement.play();
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }

})


audioElement.addEventListener('timeupdate', () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        
    })
})