/**
 * Physcs Engine v1.0.0 - 2021-05-03
 * Very basic example of realistic physics in 2D world. 
 * 
 * 2021 Taha Jalili <tahajalili@gmail.com>
 * Licensed GNU General Public License(GPL) v.3
 */

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
    this.v = velocity;
    this.dy = dy;
    this.mass = mass;
    this.r = radius;
    this.color = color;
    
    this.update = function(){
        var ay = gravity;
        // this.v += ay * fps;
        // this.y += this.v *fps*100;
        if(this.y + radius > heigth){
            this.v = -this.v;
            this.v *= e;
        }else{
            this.v += ay * fps;
        }
        this.y += this.v *fps*100;
        this.draw();
    }

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
    b = new Ball(width/2,heigth-500,1,1,30,0.1,'red');
}

function animate(){
    requestAnimationFrame(animate);
    ctx.clearRect(0,0,width,heigth);
    b.update();
}

init();
animate();