"use strict";

const FONT = "48px monospace";
/* 仮想画面サイズ */
const HEIGHT = 120;
const WIDTH = 128;
/* 補間処理 */
const SMOOTH = 0;

/* 内部カウンター*/
let gFrame = 0;
let gImgMap;
let gScreen;
let gHeight;
let gWidth;


function drawMain(ca) {
    const g = gScreen.getContext("2d");

    for (let y = 0; y < 15; ++y) {
        for (let x = 0; x < 24; ++x) {
            g.drawImage(gImgMap, x * 16, y  * 16);
        }
    }
    g.font = FONT;
    g.fillText("Hello World" + gFrame, gFrame / 10, 64);
}


function wmPaint(ca) {
    drawMain(ca);
    const g = ca.getContext("2d");
    gWidth = ca.width;
    gHeight = ca.height;
    
    if (gWidth / WIDTH < gHeight / HEIGHT) {
        gHeight = gWidth * HEIGHT / WIDTH;
    } else {
        gWidth = gHeight * WIDTH / HEIGHT;
    }

    g.drawImage(gScreen, 0, 0, gScreen.width, gScreen.height, 0, 0, 
        gWidth, gHeight);
}


/* 
 * ブラウザサイズ変更イベント。
 */
function wmSize(ca) {
    ca.width = window.innerWidth;
    ca.height = window.innerHeight;

    const g = ca.getContext("2d");
    g.imageSmoothingEnabled = g.msImageSmoothingEnabled = SMOOTH;
}


/*
 * タイマーイベント発生時の
 */
function wmTimer(ca) {
    ++gFrame;
    
    wmSize(ca);
    wmPaint(ca);
}


/* ブラウザ起動イベント */
window.onload = function() {
    const ca = document.getElementById("main");
    gImgMap = new Image();
    gImgMap.src = "img/tiles.png";

    /* 仮想画面を作る */
    gScreen = document.createElement("canvas");
    gScreen.width = WIDTH;
    gScreen.height = HEIGHT;

    wmSize(ca);
    window.addEventListener("resize", function() { wmSize(ca) });
    setInterval(function() {
        /* 30.3fps */
        wmTimer(ca)}, 33);
}