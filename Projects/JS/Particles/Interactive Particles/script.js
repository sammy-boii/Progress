const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particlesArray = [];

let hue = 0;

const mouse = { 
    x : undefined,    // undefined cuz 0, 0 / null, null would place the particle in 0, 0 position.
    y : undefined 
}

window.addEventListener('resize', function() {  
    canvas.width = window.innerWidth;  
    canvas.height = window.innerHeight;
}) 


class Particle { 
    constructor() { 
        this.x = mouse.x;
        this.y = mouse.y;
        this.size = Math.random() * 30;
        this.speedX = Math.random() * 7 - 3.5;  
        this.speedY = Math.random() * 7 - 3.5;
        this.color = 'hsl(' + hue + ',100%, 50%)';
    }
    draw () { 
        ctx.beginPath()
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill();
    }
    update() {   
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0) {
            this.size -= 0.2;  // shrinking effect
        }
    }  
}

window.addEventListener('mousemove', function(event) { 
    mouse.x = event.x;
    mouse.y = event.y;
    for (let i = 0; i < 20; i++) {
        particlesArray.push(new Particle())
    }
})

animate();


function animate() { 
    ctx.fillStyle = 'rgba(0,0,0,0.05)';
    ctx.fillRect(0,0, canvas.width, canvas.height);  // check info.md
    handleParticles ();
    requestAnimationFrame(animate) 
    hue++;   // this gets executed too before the function is recalled by requestAnimationFrame()
}


function handleParticles () {
    for (let i = 0; i < particlesArray.length - 1; i++) {   // changing to standard for loop to use splice() method
        particlesArray[i].draw()
        particlesArray[i].update()
        if (particlesArray[i].size <= 0) {
            particlesArray.splice(i, 1) // removing that element cuz negative size circles causes error
            i--;  
        }

        // since that element will be the removed the following indexes will decrease too. eg: index 5 is removed then 6 will come to 5. And for loop will iterate to 6 but index 6 element has come to 5 so it'll be skipped so subtracting i as well so it catches it.

    }
}

