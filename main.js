"use strict";

const FONT = "48px monospace";

/* 内部カウンター*/
let gFrame = 0;
let gImgMap;


function wmPaint(ca) {
    const g = ca.getContext("2d");
    
    for (let x = 3; x < 4; ++x) {
        for (let y = 3; y < 4; ++y) {
            g.drawImage(gImgMap, x * 16, y * 16);
        }
    }
    g.font = FONT;
    g.fillText("Hello World" + gFrame, gFrame / 10, 64);
}


function wmSize(ca) {
    ca.width = window.innerWidth;
    ca.height = window.innerHeight;
}


function WmTimer() {
    ++gFrame;
    const ca = document.getElementById("main");
    wmSize(ca);
    wmPaint(ca);
}


/* ブラウザ起動イベント */
window.onload = function() {
    gImgMap = new Image();
    gImgMap.src = "img/tiles.png";

    setInterval(function() {
        /* 30.3fps */
        WmTimer()}, 33);
}