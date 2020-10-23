canvas = document.getElementById("stadium");
ctx = canvas.getContext("2d");

car1_width = 120;
car1_height = 70;
car1_image = "red.png";
car1_x = 10;
car1_y = 10;
car2_width = 120;
car2_height = 70;
car2_image = "blue.png";
car2_x = 10;
car2_y = 100;

background_image = "toon road texture_img.png";

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    car1_imgTag = new Image();
    car1_imgTag.src = car1_image;
    car1_imgTag.onload = addcarone;


    car2_imgTag = new Image();
    car2_imgTag.src = car2_image;
    car2_imgTag.onload = addcartwo;

}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function addcarone() {
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}

function addcartwo() {
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}

function fullscreen() {
    var el = document.getElementById('stadium');

    if (el.webkitRequestFullScreen) {
        el.webkitRequestFullScreen();
    } else {
        el.mozRequestFullScreen();
    }
}

canvas.addEventListener("click", fullscreen)

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {

    keypressed = e.keyCode;
    console.log(keypressed);
    if (keypressed == "38") {
        oneup();
        console.log("Up");
    }
    if (keypressed == "40") {
        onedown();
        console.log("Down");
    }
    if (keypressed == "39") {
        oneright();


        console.log("Right");
    }
    if (keypressed == "37") {
        oneleft();

        console.log("Left");
    }
    if (keypressed == "87") {
        twoup();
        console.log("W");
    }
    if (keypressed == "65") {
        twoleft();
        console.log("A");
    }
    if (keypressed == "83") {
        twodown();
        console.log("S");
    }
    if (keypressed == "68") {
        tworight();
        console.log("D");
    }
    if(car1_x > 1100){
        console.log("Car1 Won");
        document.getElementById("whowon").innerHTML = "Player 1 Won";
    }
    if(car2_x > 1100){
        console.log("Car2 Won");
        document.getElementById("whowon").innerHTML = "Player 2 Won";
    }
    

}

function oneup() {
    if (car1_y >= 0) {
        car1_y = car1_y - 20;
        uploadBackground();
        addcarone();
        addcartwo();
    }
}

function twoup() {
    if (car2_y >= 0) {
        car2_y = car2_y - 20;
        uploadBackground();
        addcarone();
        addcartwo();
    }
}

function onedown() {
    if (car1_y <= 700) {
        car1_y = car1_y + 20;
        uploadBackground();
        addcarone();
        addcartwo();
    }
}

function twodown() {
    if (car2_y <= 700) {
        car2_y = car2_y + 20;
        uploadBackground();
        addcarone();
        addcartwo();
    }
}

function oneleft() {
    if (car1_x >= 0) {
        car1_x = car1_x - 20;
        uploadBackground();
        addcarone();
        addcartwo();
    }
}

function twoleft() {
    if (car2_x >= 0) {
        car2_x = car2_x - 20;
        uploadBackground();
        addcarone();
        addcartwo();
    }
}

function oneright() {
    if (car1_x <= 1100) {
        car1_x = car1_x + 20;
        uploadBackground();
        addcarone();
        addcartwo();
    }
}

function tworight() {
    if (car2_x <= 1100) {
        car2_x = car2_x + 20;
        uploadBackground();
        addcarone();
        addcartwo();
    }
}