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

    for (let x = 0; x < 16; ++x) {
        for (let y = 0; y < 16; ++y) {
            g.drawImage(gImgMap, x * 64, y * 64);
        }
    }
    g.font = FONT;
    g.fillText("Hello World" + gFrame, gFrame / 10, 64);
}


/* ブラウザ起動イベント */
window.onload = function() {
    gImgMap = new Image();
    gImgMap.src = "img/tiles.png";

    setInterval(function() {
        /* 30.3fps */
        WmTimer()}, 33);
}