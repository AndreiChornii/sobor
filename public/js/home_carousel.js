'use strict'

var video = {};
video.vid = document.getElementById("myVideo");
video.names = document.getElementById("video_name");
video.checkBrowser = function (src) {
    let isSupp = this.vid.canPlayType("video/mp4");
    if (isSupp === "") {
        this.vid.src = "http://sobor/video/ar_1.webm";
    } else {
        this.vid.src = src;
    }
    console.log(isSupp);
    this.vid.load();
};
video.setName = function(name) {
    console.log(this.names); 
    console.log(name);
    this.names.innerText = name;
};
video.prev_btn = document.querySelector('#prev');
video.next_btn = document.querySelector('#next');

let video_addr_name = [];
let arrVideos = ['http://sobor/video/ar_1.mp4', 'http://sobor/video/ar_2.mp4', 'http://sobor/video/ar_3.mp4'];
let arrNames = ['video_1', 'video_2', 'video_3'];
video_addr_name['movies'] = arrVideos;
video_addr_name['names'] = arrNames;
console.dir(video_addr_name);
video.arrVideos = video_addr_name['movies'];
video.arrNames = video_addr_name['names'];

let ini = function(){
    video.checkBrowser("http://sobor/video/ar_1.mp4");
    video.setName("video_1");
};

video.prev_btn.onclick = function(){
    console.dir(video);
    console.dir(video.vid.src);
    var idx = video.arrVideos.indexOf(video.vid.src);
    console.log(idx);
    
    if (idx ===  video.arrVideos.length - 1 ) {
        idx = 0;
        console.log("ravno");
        console.log(video.arrVideos[idx]);
    }else{
        idx++;
        console.log("ne_ravno");
        console.log(video.arrVideos[idx]);
    }
    
    video.checkBrowser(video.arrVideos[idx]);
    video.setName(video.arrNames[idx]);
};

video.next_btn.onclick = function(){
//    console.dir(video);
//    console.dir(video.vid.src);
    var idx = video.arrVideos.indexOf(video.vid.src);
//    console.log(idx);
    
    if (idx ===  0) {
        idx = video.arrVideos.length - 1;
        console.log(idx);
        console.log(video.arrVideos[idx]);
    }else{
        idx--;
        console.log("ne_ravno");
        console.log(idx);
        console.log(video.arrVideos[idx]);
    }
    
    video.checkBrowser(video.arrVideos[idx]);
    video.setName(video.arrNames[idx]);
};

ini();