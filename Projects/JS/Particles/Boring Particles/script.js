const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particlesArray = [];

window.addEventListener('resize', function() {   // makes canvas responsive
    canvas.width = window.innerWidth;  
    canvas.height = window.innerHeight;
}) 


class Particle { 
    constructor() { 
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 30;
        this.speedX = Math.random() * 3 - 1.5;  // between -1.5 and +1.5
        this.speedY = Math.random() * 3 - 1.5;  // - represents the other direction
    }
    draw () { 
        ctx.beginPath()
        ctx.fillStyle = 'green';
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill();
    }
    update() {   // this is what causes them to move with a random uniform speed.
        this.x += this.speedX;
        this.y += this.speedY;
    }  
}

for (let i = 0; i < 100; i++) {   // creating 100 instances of the Particle class each with random size, speed and position.
    particlesArray.push(new Particle)
}

function animate() { 
    ctx.clearRect(0,0, canvas.width, canvas.height);  // without clear the particles would leave a trial of straight line along which they travelled
    handleParticles ();
    requestAnimationFrame(animate)  // recalls the animate function
}

animate();

function handleParticles () {
    for (let particle of particlesArray) {  // 'for..in' is used for objects in js
        particle.draw()
        particle.update()
    }
}

