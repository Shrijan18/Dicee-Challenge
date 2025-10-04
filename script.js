let num1 = Math.ceil(0 + Math.random() * 6);

var img_src = "images/dice" + num1 + ".png";

const img11 = document.querySelector(".img1").setAttribute('src', img_src);


let num2 = Math.ceil(0 + Math.random() * 6);

var img_src1 = "images/dice" + num2 + ".png";

const img12 = document.querySelector(".img2").setAttribute('src', img_src1);


if(num1 > num2)
    document.querySelector(".title").innerHTML = "Player 1 Wins";
else if (num1 < num2)
    document.querySelector(".title").innerHTML = "Player 2 Wins";
else
    document.querySelector(".title").innerHTML = "Draw";