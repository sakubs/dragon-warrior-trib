"use strict";

const FONT = "12px monospace";
const FONT_STYLE = "#fff";
const HEIGHT = 120;
const WIDTH = 128;
const MAP_WIDTH = 32;
const MAP_HEIGHT = 32;
const SMOOTH = 0;
const TILE_SIZE = 8;
const PLAYER_W = 8;
const PLAYER_H = 9;
const START_X = 15;
const START_Y = 17;
const TILE_COLUMN = 4;
const TILE_ROW = 4;
const WINDOW_STYLE = "rgba( 0, 0, 0, 0.75 )";
const MAP_IMAGE_PATH = "img/map.png";
const PLAYER_IMAGE_PATH = "img/player.png";
const GAME_MAP = [
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 3, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 3, 3, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 3, 6, 3, 6, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 3, 3, 6, 6, 7, 7, 7, 2, 2, 2, 7, 7, 7, 7, 7, 7, 7, 6, 3, 0, 0, 0, 3, 3, 0, 6, 6, 6, 0, 0, 0,
0, 0, 3, 3, 6, 6, 6, 7, 7, 2, 2, 2, 7, 7, 2, 2, 2, 7, 7, 6, 3, 3, 3, 6, 6, 3, 6,13, 6, 0, 0, 0,
0, 3, 3,10,11, 3, 3, 6, 7, 7, 2, 2, 2, 2, 2, 2, 1, 1, 7, 6, 6, 6, 6, 6, 3, 0, 6, 6, 6, 0, 0, 0,
0, 0, 3, 3, 3, 0, 3, 3, 3, 7, 7, 2, 2, 2, 2, 7, 7, 1, 1, 6, 6, 6, 6, 3, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 7, 7, 7, 7, 2, 7, 6, 3, 1, 3, 6, 6, 6, 3, 0, 0, 0, 3, 3, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 6, 6, 7, 2, 7, 6, 3, 1, 3, 3, 6, 6, 3, 0, 0, 0, 3, 3, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 6, 7, 7, 7, 6, 3, 1, 1, 3, 3, 6, 3, 3, 0, 0, 3, 3, 3, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 6, 6, 7, 7, 7, 6, 3, 1, 1, 3, 3, 6, 3, 3, 0, 3,12, 3, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 6, 6, 6, 7, 7, 6, 3, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 6, 6, 6, 6, 3, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 6, 6, 3, 3, 3, 3, 1, 1, 3, 3, 3, 1, 1, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 4, 5, 3, 3, 3, 6, 6, 6, 3, 3, 3, 1, 1, 1, 1, 1, 3, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 8, 9, 3, 3, 3, 6, 6, 6, 6, 3, 3, 3, 3, 3, 3, 1, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 6, 6, 6, 3, 3, 3, 3, 3, 3, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 6, 6, 6, 6, 3, 3, 3, 3, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 6, 6, 6, 6, 3, 3, 3, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 6, 6, 6, 3, 3, 3, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 6, 6, 6, 3, 6, 6, 6, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 6, 6, 3, 6, 6, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 6, 6, 3, 6, 6, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 6, 3, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 6, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,14, 6, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 7, 0, 0, 0, 0, 0, 0, 0, 0,
7,15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 7, 0, 0, 0, 0, 0,
7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 7, 7, 7,
];

/* Keys */
const LEFT_KEY = 37;
const UP_KEY = 38;
const RIGHT_KEY = 39;
const DOWN_KEY = 40;

let gameWidth;
let gameHeight;    
let gameScreen;
let gameFrame = 0;
let gameImageMap;
let playerImage;
let playerX = START_X * TILE_SIZE;
let playerY = START_Y * TILE_SIZE;


function drawMain() {

    const game = gameScreen.getContext("2d");

    let mx = Math.floor(playerX / TILE_SIZE);
    let my = Math.floor(playerY / TILE_SIZE);

    for (let dy = -7; dy <= 7; dy++) {
        let y = dy + 7;
        /* タイル座標Y */
        let ty = my + dy;
        let py = (ty + MAP_HEIGHT) % MAP_HEIGHT;
            
        for (let dx = -8; dx <= 8; dx++) {
            let x = dx + 8;
            /* タイル座標X */
            let tx = mx + dx;
            let px = (tx + MAP_WIDTH) % MAP_WIDTH;
            drawTile(
                game, 
                x * TILE_SIZE - TILE_SIZE / 2, 
                y * TILE_SIZE, 
                GAME_MAP[py * MAP_WIDTH + px]
            );            
        }
    }
    game.fillStyle = "#ff0000";
	game.fillRect( 0, HEIGHT / 2 - 1, WIDTH, 2 );
	game.fillRect( WIDTH / 2 - 1, 0, 2, HEIGHT );
    
    game.drawImage(
        playerImage, 
        PLAYER_W, 
        0, 
        PLAYER_W, 
        PLAYER_H, 
        WIDTH / 2 - PLAYER_W / 2, 
        HEIGHT / 2 - PLAYER_H + TILE_SIZE / 2, 
        PLAYER_W, 
        PLAYER_H
    );

    game.fillStyle = WINDOW_STYLE;
    game.fillRect( 20, 103, 105, 15 );

    game.font = FONT;
    game.fillStyle = FONT_STYLE;
    game.fillText(
        "x=" + playerX + 
        " y=" + playerY + 
        " m=" + 
        GAME_MAP[my * MAP_WIDTH + mx], 
        25, 
        115
    );
}


function drawTile(game, x, y, index) {
    
    const xIndex = (index % TILE_COLUMN) * TILE_SIZE;
    const yIndex = Math.floor(index / TILE_COLUMN) * TILE_SIZE;
    
    game.drawImage(
        gameImageMap, 
        xIndex, 
        yIndex, 
        TILE_SIZE, 
        TILE_SIZE, 
        x, 
        y, 
        TILE_SIZE, 
        TILE_SIZE
    );
}


function loadImage() {
    
    gameImageMap = new Image(); 
    gameImageMap.src = MAP_IMAGE_PATH;
    playerImage = new Image();
    playerImage.src = PLAYER_IMAGE_PATH;
}


function wmPaint() {

    drawMain();

    const canvas = document.getElementById("main");
    const game = canvas.getContext("2d");

    game.drawImage(
        gameScreen, 
        0, 
        0, 
        gameScreen.width, 
        gameScreen.height, 
        0, 
        0, 
        gameWidth, 
        gameHeight
    );
}


function wmSize() {
    
    const canvas = document.getElementById("main");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const game = canvas.getContext("2d");
    game.ImageSmoothingEnabled = game.msImageSmoothingEnabled = SMOOTH;

    gameWidth = canvas.width;
    gameHeight = canvas.height;

    if (gameWidth / WIDTH < gameHeight / HEIGHT) {
        gameHeight = gameWidth * HEIGHT / WIDTH;
    } else {
        gameWidth = gameHeight * WIDTH / HEIGHT;
    }
}


function wmTimer() {
    gameFrame++;
    wmPaint();
}


/* キー押すイベント */
window.onkeydown = function(event) {
    switch(event.keyCode) {
    case  LEFT_KEY:
        // 左
        playerX--;
        break;

    case UP_KEY:
        // 上
        playerY--;
        break;

    case RIGHT_KEY:
        // 右
        playerX++;
        break;

    case DOWN_KEY:
        // 下
        playerY++;
        break;
    };
}

// マップループ
playerX += (MAP_WIDTH * TILE_SIZE);
playerX %= (MAP_WIDTH * TILE_SIZE);
playerY += (MAP_HEIGHT * TILE_SIZE);
playerY %= (MAP_HEIGHT * TILE_SIZE);

window.onload = function() {
    loadImage()

    gameScreen = document.createElement("canvas");
    gameScreen.width = WIDTH;
    gameScreen.height = HEIGHT;

    wmSize();
    window.addEventListener("resize", function() {wmSize()});

    setInterval(function() { wmTimer() }, 33);
}