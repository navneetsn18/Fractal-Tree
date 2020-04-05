var angle = 0;
var slider;

function setup() {
    createCanvas(windowWidth, windowHeight - 120);
    slider = createSlider(0, TWO_PI, PI / 4, 0.1);
    slider.position(windowHeight / 1.2, windowHeight - 30);
}

function draw() {
    background(255);
    angle = slider.value();
    translate(windowWidth / 2, windowHeight);
    branch(250);
}

function branch(len) {
    line(0, 0, 0, -len);
    translate(0, -len);
    if (len > 4) {
        push();
        rotate(angle);
        branch(len * 0.67);
        pop();
        push();
        rotate(-angle);
        branch(len * 0.67);
        pop();
    }
}