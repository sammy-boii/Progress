# Canvas

```html
<canvas id = 'canvas'>
```
```js
const canvas = document.getElementById('canvas')

const ctx = canvas.getContext('2d')

console.log(canvas) // <canvas id = 'canvas'>
console.log(ctx) // {}
```

#### getContext() is a canvas method that fetches an object from the Canvas API through which we can draw stuff on the canvas.

#### canvas's dimension isn't responsive so...

```js
window.addEventListner('resize', function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.fillStyle = 'white';
    ctx.fillRect(10, 10, 150, 100)
    
    // or
    ctx.rect(...)
    ctx.fill()
})
```

#### If you put it all outside the event listener then it will only resize itself on the initial load. And when resized the filling will go too.

#### fillRect(x, y, width, height)

#### x and y are starting position from top left and the width and height extend from that position.

```js
ctx.fillStyle = 'red';
ctx.strokeStyle = 'green';
ctx.lineWidth = 15;
ctx.arc(100, 100, 50, 0, Math.PI *2);
ctx.fill()
ctx.stroke()

// u can't do ctx.fillArc()
// stroke is outline

// u must fill() or stroke() to fill or outline the shape, if you were to apply them without defining the values then black would be default value.
```

#### ctx.arc(x, y, radius, starting angle, ending angle)

#### x and y value will be center points and radius will be drawn outwards from it. You can pass in another argument called 'anticlockwise'

#### Angle is in radian so PI * 2 = 6.28 radian = 360 deg


```js
 const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  const mouse = {
    x: undefined,
    y: undefined,
  }

// don't keep null cuz they will be converted to 0,0 which is will be displayed in the canvas.

  canvas.addEventListener('click', event => {
    mouse.x = event.x;
    mouse.y = event.y;
    drawCircle();
  });

// replace 'click' with 'mousemove' for a paintbrush

  const drawCircle = () => { 
    ctx.beginPath();
    ctx.fillStyle = 'black';
    ctx.arc(mouse.x, mouse.y, 10, 0, Math.PI * 2);
    ctx.fill();
  }
```

#### beginPath() allows the shapes to be independent of eachother. Suppose you drew three circle then they would connect and form a triangle.

```js
ctx.clearRect(0,0, canvas.width, canvas.height)

//clears everything within those co-ordinates

function animate () {
    ctx.clearRect(0,0, 100, 100);
    requestAnimationFrame(animate)
}

// requestAnimationFrame  calls whatever callback we pass inside it only once. So here its kinda like a recursion.
```