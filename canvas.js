var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

// Arc / Circle

function Circle(x, y, dx, dy, radius, r, g, b) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.r = r;
    this.g = g;
    this.b = b;

    this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.strokeStyle = `rgba( ${this.r}, ${this.g}, ${this.b}, 0.9 )`;
        c.stroke();
    }

    this.update = function() {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        } 
        this.x += this.dx;
        this.y += this.dy;

        this.draw();
    }
}

var circleArray = [];

for (var i = 0; i < 100; i++) {
    var radius = 50;
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight -radius * 2) + radius;
    var dx = (Math.random() * -0.5);
    var dy = (Math.random() * -0.5);
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);


    circleArray.push(new Circle(x, y, dx, dy, radius, r, g, b));
}

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    for (var i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }

}

animate();

// c.fillStyle = 'rgba(255, 0, 0, 0.6)';
// c.fillRect(100, 100, 100, 100);
// c.fillStyle = 'rgba(255, 255, 0, 0.6)';
// c.fillRect(400, 100, 100, 100);
// c.fillStyle = 'rgba(255, 0, 255, 0.6)';
// c.fillRect(500, 300, 100, 100);

// // Line
// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(500, 100);
// c.lineTo(800, 100);

// c.strokeStyle = '#fa34a3';
// c.stroke();

// Arc / Circle
// c.beginPath();
// c.arc(300, 300, 50, 0, Math.PI * 2, false);
// c.strokeStyle = 'green';
// c.stroke();

// for (var i = 0; i < 10; i += 1) {
//     var x = Math.floor(Math.random() * window.innerWidth);
//     var y = Math.floor(Math.random() * window.innerHeight);

//     var r = Math.floor(Math.random() * 255);
//     var g = Math.floor(Math.random() * 255);
//     var b = Math.floor(Math.random() * 255);
    
//     c.beginPath();
//     c.arc(x, y, 50, 0, Math.PI * 2, false);
//     c.strokeStyle = `rgba( ${r}, ${g}, ${b}, 1.0 )`;
//     console.log(c.strokeStyle);
//     c.stroke();
    
// }
