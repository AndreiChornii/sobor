'use strict'

var video = {};
video.vid = document.getElementById("myVideo");
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
video.prev_btn = document.querySelector('#prev');
video.arrVideos = ['http://sobor/video/ar_1.mp4', 'http://sobor/video/ar_2.mp4', 'http://sobor/video/ar_3.mp4'];

video.checkBrowser("http://sobor/video/ar_1.mp4");

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
};




//function prev(){
//    
//    var cr_video_src = container.children[0].children[0].src;
//    console.log(cr_video_src);
//    var idx = videos.indexOf(cr_video_src);
//    console.log(idx);
//    console.log(videos.length);
//    if (idx ===  videos.length - 1 ) {
//        idx = 0;
//        console.log("ravno");
//        console.log(videos[idx]);
//    }else{
//        idx++;
//        console.log("ne_ravno");
//        console.log(videos[idx]);
//    }
//    
//    container.children[0].children[0].src = videos[idx];
//    container.load();
//}
//
//function next(){
//    var cr_video_src = container.children[0].children[0].src;
//    console.log(cr_video_src);
//    var idx = videos.indexOf(cr_video_src);
//    console.log(idx);
//    console.log(videos.length);
//    if (idx ===  0 ) {
//        idx = videos.length - 1;
//        console.log("ravno");
//        console.log(videos[idx]);
//    }else{
//        idx--;
//        console.log("ne_ravno");
//        console.log(videos[idx]);
//    }
//    
//    container.children[0].children[0].src = videos[idx];
//    container.load();
//}
//
//var videos = ['http://sobor/video/ar_1.mp4', 'http://sobor/video/ar_2.mp4', 'http://sobor/video/ar_3.mp4'];
//
//console.log(videos.length);
//
//var vid = document.getElementById("myVideo");
//
//var prev_btn = document.querySelector('#prev');
//prev_btn.onclick = prev;
//var next_btn = document.querySelector('#next');
//next_btn.onclick = next;
