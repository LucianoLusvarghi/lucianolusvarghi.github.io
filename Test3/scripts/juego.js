
const container = document.getElementById('wrapper');
var cs = getComputedStyle(container);

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = parseInt(cs.getPropertyValue('width'), 10);
const CANVAS_HEIGHT = canvas.height = parseInt(cs.getPropertyValue('height'), 10);




class mapa {

    constructor() {

        this.realWidth = CANVAS_WIDTH;
        this.realHeight = CANVAS_HEIGHT;

        this.virtualWidth = 3584;
        this.virtualHeight = 960;

        this.map_base = new Image();
        this.map_base.src = 'assets/images/map_base.png';

        this.map_colision = new Image();
        this.map_colision.src = 'assets/images/map_colision.png';

        this.map_filter = new Image();
        this.map_filter.src = 'assets/images/map_filter.png';

    }

    draw() {
        ctx.drawImage(this.map_base, 0, 920-563, 1000, 563, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        //ctx.drawImage(this.map_filter, 0, 920 - 563, 1000, 563, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    }

}


const theMap = new mapa();


function drawMap() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    theMap.draw();
    requestAnimationFrame(drawMap);
}

drawMap();