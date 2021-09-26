var snake = document.getElementById('snake');
var target = document.getElementById('target');
var dir = 'd';
var x = 0;
var y = 0;
const speed = 50;
var x2 = 0;
var y2 = 0;
x2 = Math.floor(Math.random() * 10);
y2 = Math.floor(Math.random() * 10);
target.style.top = y2 * speed + 'px';
target.style.left = x2 * speed + 'px';
function C_W(){
    dir = 'w';
}
function C_S(){
    dir = 's';
}
function C_A(){
    dir = 'a';
}
function C_D(){
    dir = 'd';
}
function UpdatePlayer(e)
{
    if (e.keyCode == 87) {
        //w
        dir='w';
    }
    if (e.keyCode == 83) {
        //s
        dir='s';
    }
    if (e.keyCode == 68) {
        //d
        dir='d';
    }
    if (e.keyCode == 65) {
        //a
        dir='a';
    }
}
setInterval(function(){
    console.log(dir);

    if(dir == 'w'){
    y = y - speed;
    }
    if(dir == 'a'){
    x = x - speed;
    }
    if(dir == 's'){
    y = y + speed;
    }
    if(dir == 'd'){
    x = x + speed;
    }

    if(x>450){
        x = 450;
        dir = 'a';
    }
    if(x<0){
        x = 0;
        dir = 'd';
    }
    if(y>450){
        y = 450;
        dir = 'w';
    }
    if(y<0){
        y = 0;
        dir = 's';
    }

    snake.style.top = y + 'px';
    snake.style.left = x + 'px';

    if(x==x2*speed&&y==y2*speed){
        newTarget();
    }
}, 200);
function newTarget(){
    x2 = Math.floor(Math.random() * 10);
    y2 = Math.floor(Math.random() * 10);
    target.style.top = y2 * speed + 'px';
    target.style.left = x2 * speed + 'px';
}
document.onkeydown = UpdatePlayer;