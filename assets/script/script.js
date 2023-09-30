let currStalinTile;
let currGopnikTile;
let score = 0;
let gameOver = false;
let backgroundMusic = document.getElementById('backgroundMusic');


window.onload = function() {
    setGame();
}




function setGame() {
    for (let i = 0 ; i < 9; i++){
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener('click', selectTile);
        document.getElementById("board").appendChild(tile);
    }
    setInterval(setStalin, 2000);
    setInterval(setGopnik, 3000);
}

function getRandomTiles() {
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setStalin() {
    if (gameOver) {
        return;
    }

    if (currStalinTile)  {
        currStalinTile.innerHTML = '';
    }

    let stalin = document.createElement('img');
    stalin.src = './assets/img/stalin.png';
    let num = getRandomTiles();

    if (currGopnikTile && currGopnikTile.id == num){
        return;
    }

    currStalinTile = document.getElementById(num);
    currStalinTile.appendChild(stalin);
}

function setGopnik() {
    if (gameOver) {
        return;
    }

    if (currGopnikTile) {
        currGopnikTile.innerHTML = '';
    }

    let gopnik = document.createElement('img');
    gopnik.src = './assets/img/gopnik.png';
    let num = getRandomTiles();

    if (currStalinTile && currStalinTile.id == num){
        return;
    }
    
    currGopnikTile = document.getElementById(num);
    currGopnikTile.appendChild(gopnik);
}

function selectTile() {
    if (gameOver) {
        return;
    }

    if (this == currStalinTile){
        let shoot = new Audio('./assets/sound/Gun.mp3');
        shoot.play();
        score += 50;
        document.getElementById('score').innerText = score.toString();
    } else if (this == currGopnikTile){
        let blyat = new Audio('./assets/sound/blyat.mp3');
        blyat.play();
        let desc = document.createElement('h3');
        document.getElementById('score').innerText ="GAME-OVER : " + score.toString();
        desc.innerText = "CYKA BLYAT";
        gameOver = true;
        currGopnikTile.appendChild(desc);
    }
}

