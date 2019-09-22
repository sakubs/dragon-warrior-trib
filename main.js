"use strict";

const FONT = "48px monospace";

/* 内部カウンター*/
let gFrame = 0;
let gImgMap;

function WmTimer() {
    ++gFrame;
    /* main canvas. */
    const ca = document.getElementById("main");
    const g = ca.getContext("2d");
    g.font = FONT;
    g.fillText("Hello World" + gFrame, gFrame / 10, 64);
}


/* ブラウザ起動イベント */
window.onload = function() {
    gImgMap = new Image();
        
    setInterval(function() {
        /* 30.3fps */
        WmTimer()}, 33);
}