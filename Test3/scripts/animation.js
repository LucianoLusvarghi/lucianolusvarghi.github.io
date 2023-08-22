const container = document.getElementById('dog_container');
var cs = getComputedStyle(container);

const canvas = document.getElementById('dog_animation');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = parseInt(cs.getPropertyValue('width'), 10);
const CANVAS_HEIGHT = canvas.height = parseInt(cs.getPropertyValue('height'), 10);


const dog_img = new Image();
dog_img.src = 'assets/animations/shadow_dog.png';
const spriteWidth = 575;
const spriteHeight = 523;
let playerState = 'jump';

let gameFrame = 0;
const staggerFrame = 5;
const spriteAnimations = [];
const animationStates = [

    {
        name: 'idle',
        frame: 7,
    },
    {
        name: 'jump',
        frame: 7,
    },
    {
        name: 'fall',
        frame: 7,
    },
    {
        name: 'run',
        frame: 9,
    },
    {
        name: 'dizzy',
        frame: 11,
    },
    {
        name: 'sit',
        frame: 5,
    },
    {
        name: 'roll',
        frame: 7,
    },
    {
        name: 'bite',
        frame: 7,
    },
    {
        name: 'ko',
        frame: 12,
    },
    {
        name: 'getHit',
        frame: 4,
    }

];

animationStates.forEach((state, index) => {

    let frames = {
        loc: [],
    }

    for (let j = 0; j < state.frame; j++) {
        let positionX = j * spriteWidth;
        let positionY = index * spriteHeight;
        frames.loc.push({ x: positionX, y: positionY });
    }

    spriteAnimations[state.name] = frames;

});


function animate() {

    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    let position = Math.floor(gameFrame / staggerFrame) % spriteAnimations[playerState].loc.length;
    let frameX = spriteWidth * position;
    let frameY = spriteAnimations[playerState].loc[position].y;

    ctx.drawImage(dog_img, frameX, frameY, spriteWidth, spriteHeight, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    
    gameFrame++;
    requestAnimationFrame(animate);
}

animate();


document.addEventListener('keydown', (event) => {
    var name = event.key;
    var code = event.code;

    if (code == 'Space') {

        for (var i = 0; i < animationStates.length; i++) {
            if (playerState == animationStates[i].name) {
                if (i + 1 >= animationStates.length) {
                    playerState = animationStates[0].name;
                    break;
                } else {
                    playerState = animationStates[i + 1].name;
                    break;
                }
            }
        }

    }

}, false);