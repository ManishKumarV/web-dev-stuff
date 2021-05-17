var ball = document.getElementById("ball");

ball.style.top = ball.offsetTop + "px";
ball.style.left = ball.offsetLeft + "px";



// If you want dynamic change in values of ball height and width uncomment the below 'onresize' code.
var ballHeight = ball.offsetHeight;
var ballWidth = ball.offsetWidth;


function setValue(value) {
    return value + "px";
}



// When using event.keyCode;
function keyCode(keyPress) {

    var top = parseInt(ball.style.top);
    var left = parseInt(ball.style.left);

    // W is pressed
    if (keyPress === 119 || keyPress === 87) {
        if (top > 25) {
            ball.style.top = setValue(top - 25);
        }
    }

    // A is pressed
    else if (keyPress === 97 || keyPress === 65) {
        if (left > 25) {
            ball.style.left = setValue(left - 25);
        }
    }

    // S is pressed
    else if (keyPress === 115 || keyPress === 83) {
        if (top < (window.innerHeight - ballHeight) - 25) {
            ball.style.top = setValue(top + 25);
        }
    }

    // D is pressed
    else if (keyPress === 100 || keyPress === 68) {
        if (left < (window.innerWidth - ballWidth) - 25) {
            ball.style.left = setValue(left + 25);
        }
    }

};

window.addEventListener("keypress", function (event) {
//    code(event.code); //- You can use this
//    key(event.key); //- You can also use this
    keyCode(event.keyCode);
});
