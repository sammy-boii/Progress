const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particlesArray = [];

let hue = 0;

const mouse = { 
    x : undefined,    
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
        this.size = Math.random() * 20;
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
            this.size -= 0.2;  
        }
    }  
}


window.addEventListener('mousemove', function(event) { 

    mouse.x = event.x;
    mouse.y = event.y;
    for (let i = 0; i < 10; i++) {
        particlesArray.push(new Particle())
    }
})

animate();

function animate() { 

    ctx.clearRect(0,0, canvas.width, canvas.height)
    handleParticles ();
    requestAnimationFrame(animate) 
    hue++;  
}

function handleParticles () {

    for (let i = 0; i < particlesArray.length - 1; i++) { 
        particlesArray[i].draw()
        particlesArray[i].update()
      
            for (let j = i + 1; j < particlesArray.length -1; j++){
                const dx = particlesArray[i].x - particlesArray[j].x;
                const dy = particlesArray[i].y - particlesArray[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);        // distance formula
                
                if (distance < 100) {
                  ctx.beginPath();
                  ctx.lineWidth = 0.5;
                  ctx.strokeStyle = particlesArray[i].color;
                  ctx.moveTo(particlesArray[i].x, particlesArray[i].y)  // draws line from this point
                  ctx.lineTo(particlesArray[j].x, particlesArray[j].y)  // to this point
                    ctx.stroke()
                }
            }

            if (particlesArray[i].size <= 0) {
                particlesArray.splice(i, 1)
                i--;   
        }
    }
}

