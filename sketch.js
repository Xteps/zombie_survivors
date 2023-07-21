// game global variables
let wave = 1;
let bullets = []

// player global variables
let playerStartPointX = 100;
let playerStartPointY = 450;
let playerXpos = 100;
let playerYpos = 450;
let playerHealth = 100;

// enemy global variables
let amountOfZombies = 2;
let enemySpawnPointX = 800;
let enemySpawnPointY;
let zombiesHaveSpawned = false;
let zombiesAlive = 0;

function setup() {
    createCanvas(900, 900);
    background(220, 220, 220);
};

function draw() {
    noStroke();
    // Player
    fill(0, 0, 255);
    rect(playerXpos, playerYpos, 25, 25);
    // Player movement
    if (keyIsDown(UP_ARROW)) {
        playerYpos -= 2
    }

    if (keyIsDown(DOWN_ARROW)) {
        playerYpos += 2
    }
    
    if (keyIsDown(RIGHT_ARROW)) {
        playerXpos += 2
    }

    if (keyIsDown(LEFT_ARROW)) {
        playerXpos -= 2   
    }
    // enemy spawns
    if (zombiesHaveSpawned == false) {
        console.log("zombies are spawning");
        for (i = 0; i < amountOfZombies * wave; i++) {
            enemySpawnPointY = random(100, 800)
            fill(255, 0, 0);
            rect(enemySpawnPointX, enemySpawnPointY, 25, 25);
            console.log("zombie spawned");
            zombiesAlive += 1;
        }
        zombiesHaveSpawned = true;
        console.log("zombies have spawned");
    }

    else if (zombiesHaveSpawned == true) {
        if (zombiesAlive == 0) {
            zombiesHaveSpawned = false;
            wave += 1;
            console.log("wave: " + wave);
        }
    }
    // enemy movement

    // guns
    for (let i = bullets.length - 1; i >= 0; i--) {
        bullets[i].y -= 5;
          fill(255, 0, 0);
           ellipse(bullets[i].x, bullets[i].y, 10, 10);
          
          
          if (bullets[i].y < 0) {
            bullets.splice(i, 1);
          }
        }
}

// function mouseClicked() {
//     // The player will loose -4 damage by zombie out of full health
    
//     // The Zombie will loose -3 damage by the player shooting at him with a pistol

//     // The Zombie will loose -7 damage by the player shooting at him with an assault riffle}

// }

function mouseClicked() {
    bullets.push({ x: playerXpos, y: playerYpos });
}




//  Guns 

// // Assualt Riffle 


// function draw() {
//   background(220);
      
     
//   fill(0);
//   ellipse(playerX, playerY, 20, 20);
      
      
//    for (let i = bullets.length - 1; i >= 0; i--) {
//       bullets[i].y -= 5;
//         fill(255, 0, 0);
//          ellipse(bullets[i].x, bullets[i].y, 10, 10);
        
        
//         if (bullets[i].y < 0) {
//           bullets.splice(i, 1);
//         }
//       }
//     }
