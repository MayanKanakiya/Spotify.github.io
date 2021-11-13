console.log('Create Music Applicaion UI - Spotify - Using HTML,CSS,JAVASCRIPT,BOOTSTRAP');
// Iniitialize the variables
let masterPlay = document.getElementById('masterPlay');
let MyProgressBar = document.getElementById('MyProgressBar');
let musicContainer = document.getElementById('musicContainer');
let MasterSongName = document.getElementById('MasterSongName');
let bg_img = document.getElementById('bg_img');
let songItem = Array.from(document.getElementsByClassName('songItem'));
let audioElement = new Audio('Music/1.mp3');


let songs = [
    { songName: "Baarish Ban Jaana - Payal Dev", filePath: "Music/1.mp3", coverPath: "image/bg_img.webp" },

    { songName: "Dil Ko Karaar Aaya - Neha Kakkar", filePath: "Music/2.mp3", coverPath: "image/bg_img2.webp" },

    { songName: "02 Laila - Notebook", filePath: "Music/3.mp3", coverPath: "image/bg_img3.webp" },

    { songName: "Lut Gaye - Jubin Nautiyal", filePath: "Music/4.mp3", coverPath: "image/bg_img4.webp" },

    { songName: "Mann Bharya - Shershaah", filePath: "Music/5.mp3", coverPath: "image/bg_img5.webp" },

    { songName: "Nachi_Nachi", filePath: "Music/6.mp3", coverPath: "image/bg_img6.webp" },

    { songName: "O Yaara Dil Lagaana - Sanak", filePath: "Music/7.mp3", coverPath: "image/bg_img7.jpg" },

    { songName: "Raataan Lambiyan - Shershaah", filePath: "Music/8.mp3", coverPath: "image/bg_img8.jpg" },

    { songName: "Ranjha - Shershaah", filePath: "Music/9.mp3", coverPath: "image/bg_img9.jpg" },

    { songName: "Shona Shona - Tony Kakkar", filePath: "Music/10.mp3", coverPath: "image/bg_img10.jpg" },

    { songName: "Suna Hai - Sanak ", filePath: "Music/11.mp3", coverPath: "image/bg_img3.webp" },

    { songName: "Thoda_Thoda_Pyaar", filePath: "Music/12.mp3", coverPath: "image/bg_img6.webp" },

    { songName: "Toh Aagaye Hum - Jubin Nautiyal", filePath: "Music/13.mp3", coverPath: "image/bg_img2.webp" },

    { songName: "Barsaat Ki Dhun - Jubin Nautiyal", filePath: "Music/14.mp3", coverPath: "image/bg_img4.webp" },
]
// Adding of music list drop down menu
songItem.forEach((element, i) => {
    // console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerHTML = songs[i].songName;
});

// Play the dropDown list songs...
Array.from(document.getElementsByClassName('songName')).forEach((element1, i) => {
    element1.addEventListener('click', (e) => {
        songIndex = parseInt(e.target.id);
        audioElement.src = `Music/${songIndex}.mp3`;
        bg_img.src = songs[songIndex - 1].coverPath;
        MasterSongName.innerText = songs[i].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        musicContainer.classList.add('ContainerAnimate');
    });
});
// Next and Previous buttons
let previousBtn = document.getElementById('previous');
let nextBtn = document.getElementById('next');
// 1.Next
nextBtn.addEventListener('click', () => {
    nextBtnFun(); // Create function for nextBtn
});
// 1.Previous
previousBtn.addEventListener('click', () => {
    previousBtnFun();//Create Function for previoustBtn
});

songIndex = 0;
function nextBtnFun() {
    if (songIndex >= 13) {
        songIndex = 0;
    } else {
        songIndex += 1;
    }
    audioElement.src = `Music/${(songIndex + 1) % songs.length}.mp3`;
    bg_img.src = songs[songIndex].coverPath;
    MasterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
    musicContainer.classList.add('ContainerAnimate');
}
function previousBtnFun() {
    if (songIndex <= 0) {
        songIndex = 0;
    } else {
        songIndex -= 1;
    }
    // (songIndex  - 1 + songs.length) % songs.length
    audioElement.src = `Music/${songIndex + 1}.mp3`;
    bg_img.src = songs[songIndex].coverPath;
    MasterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
    musicContainer.classList.add('ContainerAnimate');
}
// Handle play/pause  click music
masterPlay.title = "Play Song";//ByDefault Masterplay button title is "play"
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.title = "Pause Song";
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        musicContainer.classList.add('ContainerAnimate');
    }
    else {
        audioElement.pause();
        masterPlay.title = "Play Song";
        masterPlay.classList.add('fa-play');
        masterPlay.classList.remove('fa-pause');
        musicContainer.classList.remove('ContainerAnimate');
    }
});
/*
Formula for myprogressbar seek and updatetime in song
{
    100 X currenttime/duration=percentage;
    currettime=percentage X duration / 100;
}
*/
// Listen to event
audioElement.addEventListener('timeupdate', () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    MyProgressBar.value = progress;
});
MyProgressBar.addEventListener('change', () => {
    audioElement.currentTime = MyProgressBar.value * audioElement.duration / 100;
});

