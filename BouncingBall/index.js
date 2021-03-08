/**
 * Physcs Engine v1.0.0 - 2021-05-03
 * Very basic example of realistic physics in 2D world. 
 * 
 * 2021 Taha Jalili <tahajalili@gmail.com>
 * Licensed GNU General Public License(GPL) v.3
 */

//change to development brach

var canvas = document.getElementById('gameScreen');
var ctx = canvas.getContext('2d');

//world 
var width = 800;
var heigth = 800;
var gravity = 9.8;
var fps = 1/40;
var e = 0.8;

//Object
function Ball(x, y, velocity, dy, radius, mass, color){
    this.x = x;
    this.y = y;
    this.vy = velocity;
    this.vx = velocity;
    this.dy = dy;
    this.mass = mass;
    this.r = radius;
    this.color = color;
    
    this.update = function(){
        const floorCollision = this.y + this.r > heigth;
        const rightCollision = this.x + this.r > width;
        const leftCollision = this.x - this.r <0;
        const xCollision = rightCollision || leftCollision;

        if (floorCollision){
            this.vy = -this.vy;
            this.vy *=  e;
        }else{
            this.vy += gravity* fps;
        }
        if (xCollision){
            this.vx = -this.vx;
        }
        this.y += this.vy * fps * 100;
        this.x += this.vx;
        this.draw();

    };

    this.draw = function(){
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.r,0,Math.PI*2,false);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }  
}

//working functions
function init(){
    b = new Ball(120, heigth-500, 5, 1, 30, 0.1, 'red');
}

function animate(){
    requestAnimationFrame(animate);
    ctx.clearRect(0,0,width,heigth);
    b.update();
}

init();
animate();
