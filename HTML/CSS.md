<div style = 'color: aqua'>

Some reasons by CSS is linked in the head section before others.

- Flash of Unstyled Content (FOUC) is prevented.
- Linking it in the header will ensure that the browsers caches the CSS file for a faster experience.
- Defines the layout of the webpage so by convention it is the correct way.

## <span style = 'color:lime'>Selectors

There are various selectors:

- ID Selector
- Class Selector
- Element / Tag Selector

Classes and ID names cannot start with a number.

```css
.class {
  opacity: 0.6;
}

#id {
  color: blue;
}

p { 
  border: 1px solid red;
}

```

```css
* { 
  box-sizing: border-box;
  margin: 0;
}
```

This is a universal selector and applies to everything.


```css
div > * { 
  display: flex;
}
```


```css
p[class="regular"] {
  color: green;
}

div[id="id"] {
  font-size: 1em;
}

a[class] { 
  color: pink;
}
```

In the last example, every anchor tag with a class gets styled.

```css
.box1.box2 {
  rotate: 10deg;
}
```

Applies to element having both the classes

```html
<div class="box1 box2"></div>
```

box1 and box2 are sibling classes

<br>

## <span style = 'color: lime'> CSS Specificity

```css
li {
    color: green;
}

li {
    color: blue;
    ;
}

li {
    color: white;
}

```

Here the white color gets applied because it's at the bottom and the precedent styles get overwritten. (Cascading Style Sheet)

But if the styling is more specific, then that gets applied.

```css
.item-class {
  color: blue;
}

#item-id {
  color: plum;
}

ol {
  color: yellow;
}
```

Plum gets applied because id is more specific than others.

To calculate specificity:

```css
ol #item-id {
  color: blue;
}

#item-id {
  color: plum;
}
```

ID Selectors: 1  
Class Selectors: 0  
Tag Selectos: 1

ID Selectors: 1  
Class Selectors: 0  
Tag Selectos: 0

101>100

So blue gets applied.

<br>

But inline styling takes precendent over everything.

```html
<h1 style="color: blue; text-align: center;"> Hi </h1>
```

 **UNLESS!!** you use !imporatant declaration.

```css
p, span {
  background: #000 !important;
}
```

<br>

## <span style = 'color: lime'> Combinators

Descendent combinator => (space) selects all the children no matter how deeply nested they are  

Child combinators => (>) selects only to the direct children


```css
.main-container > p {
  color: green;
}

.main-container p {
  color: blue;
}
```

General sibling combinator => Tilde (~) selects all the siblings that come after it
Adjacent sibling combinator => Plus (+) selects only the very next sibling after it

```html
<ol>
  <li> Item-1 </li>
  <li class = 'one'> Item-2 </li>
  <li> Item-3 </li>
  <li class = 'two'> Item-4 </li>
  <li> Item-5 </li>
  <li> Item-6 </li>
</ol>

```

```css

li.one ~ li.two { 
  color: red
}
```

Doesn't work because the li with the class 'two' doesn't come right after.

```css

```


<br>

## <span style = 'color: lime'>Pseudo Elements

: and :: both works but :: is standardized

```css
.required::before
{
  color: blue;
  content: '*';
}
.required::after
{
  color: yellow;
  content: '*';
}
```

```css

::selection { 
  background: orange;
  color: red;
}
```

Styles the thing where u select / highlight something.

```css
::marker { 
  content: '#';
  color: plum;
}

ol > li::marker { 
  color: black;
}
```

Styles the index of ordered list and unordered list.

```css
p::first-letter {
  font-size: 150%;
  color: red;
}

div::first-line { 
  color: red;
}

```
They selects the first-letter and first-line of  block level elements like div, p, h1, etc...

```css
input::placeholder {
  color: #999;
  font-style: italic;
}

```


<br>

## <span style = 'color: lime'> Pseudo Classes

```css
button:hover { 
  color: white;
  background: black;
}

input:focus { 
  border: blue 1px dotted;
}

a:active { 
  color: rebeccapurple;
}

button:active { 
  animation: fly 2s;
}
```

```css
p:not(.example) { 
  color: green;
}
```

Styles the paragraphs without the class 'example'


```html
<input required type = 'number'>
<input type = 'checkbox' disabled>
```

```css
input:required { 
  background: pink;
}

input:disabled { 
  margin: 10px;
}

input:checked { 
  padding: 10px;
}
```
Styles input with these attributes
  
You can only style some things with these kinda pseudo classes


```html
<ol>
  <li> 1 </li>  
  <li class = 'red'> 2 </li>  
  <li> 3 </li>  
  <li> 4 </li>  
</ol>
```

```css
li:first-child { 
  color: red;
}

li:last-child { 
  color: red;
}

li:nth-child(5) { 
  color: red;
}

li:nth-child(2n + 1) { 
  color: red;
}

li:nth-last-child(2n) { 
  color: red;
}
```
  
Selects the li in the corresponding position within the parent.

```css
li.red:first-child { 
  color:red;
}
```

The reason this doesn't work is because it only selects the first li within the parent. If that li has the class red the this style gets applied.

```html
<div>
  <span> </span>
  <span> </span>
</div>

<div>
  <span> </span>
</div>
```


```css
span:only-child { 
  color: red;
}
```

This style gets applied to the span which is the only child within the parent.


```html 
<div>
  <span> 1 </span>
  <span> 2 </span>
</div>

<div>
  <span> 3 </span>
  <div>
    <span> 4 </span> 
  </div>
</div>
```

```css
span:first-of-type { 
  color: red;
}
```

Selects the first of that type within the parent. So: 1, 3, 4.

```css
span:nth-of-type (3) { 
  color: red;
}

span:only-of-type { 
  color: red;
}
```

```css
div:has(img) { 
  background-color: magenta;
}
```

Selects the **div** having an image element.

```css
span:has(a, p) > h1 { 
  color: yellow;
}
```

Selects the h1 of a span having both anchor and paragraph element.

```css
:is(h1, h2, h3) { 
  font-weight: bold;
}

a:where(:hover, :focus) { 
  color: #000;
}


```

:is() and :where() both are used to group multiple selectors with the only difference being :where() has specificity of 0 like the universal selector (*).

```css
div :is(li, .1a) { 
  display: hidden;
}
```

There is a space so it selects the li and class with '1a' within the div. Now obviously a class name cannot be '1a' so instead of not ignoring that whole block like it usually does, it just ignores the '.1a' class and applies the style to li.


<br>

##  <span style = 'color: lime'>  Display Properties

```css
div, p, h1, h6 { 
  display: block;
}
```

They take the full width.

```css
span { 
  display: inline;
}
```

They take minimum space possible and do not have height and width property.

```css
img { 
  display: inline-block;
}
```

They also take minimum space possible but have access to width and height property.

```css
div { 
  display: hidden;
  display: none;
}
```
Both makes the element invisible but none completely takes it out of the document flow but hidden does not.

<br>

## <span style = 'color: lime'>Data Attributes

```html
<div data-red data-blue = 'false'> Hi </div>
```

```css
[data-red] { 
  color: teal;
}

[data-blue = 'false'] { 
  color: plum;
}

[data-blue] { 
  color: plum;
}

/* this works too cuz it just says to select the data-blue */
```

```css
[data-attr^ = 'a'], [data-attr$ = 'z'], [data-attr* = '11'] { 
  color: 'forestgreen';
} 
```

Selects 'data-attr' starting with 'a' or ending with 'z' or containing '11' anyhwere inside it.

```html
<div data-tooltip = 'Ninja'> 🐱‍👤 </div>
```

```css
[data-tooltip]:hover::after { 
  content: attr(data-tooltip);
  width: 10px;
  height: 5px;

}
```
<br>

##   <span style = 'color: lime'>  Positions

```css
.container { 
  position: static
}
```

This is the default position and top, right, bottom, left and z-index don't work on it.

```css
.container { 
  position: absolute;
}
```

It gets removed from the documnent flow and other elements can take its initial position. It moves relative to its parent which can be relative, sticky or fixed. It's relative to sticky only when the parent becomes sticky...

```css
.container { 
  position: relative;
}

```
It doesn't get removed from the document flow and other elements cannot take its initial position. It moves relative to its initial position.

```css
.container { 
  position: fixed;
}
```
It also gets taken out of the document flow and is always relative to the HTML document. It stays in the exact space spot.

```css
.container { 
  position: sticky;
  top: 5px;
}
```

Starts behaving as sticky on that breakpoint. Also it can be relative to any parent.

<br>

##   <span style = 'color: lime'>  FlexBox

```css
.container { 

  display: flex;

  justify-content: flex-start, flex-end, baseline, space-between, center, space-evenly, space-evenly, space-around;

  align-items: same;

  flex-direction: column;       /* x axis becomes the cross axis and y axis becomes the main axis */

  flex-wrap: wrap;             /* items move to a new line when there is no more space */

  align-content: same;   /* used with flex-wrap. allows us to align items in the cross axis */

  gap: 1em;
}

.item { 
  align-self: center;    /* stretch is the default value where it streches to fill the main axis. Same for grid  */
  justify-self: end;

  flex-grow: 1;         /* default value is 0 which means the item won't grow to fill up the space by default  */

  flex-shrink: 0 ;      /* default value is 1 which means they will shrink if they need to. 0 means they won't shrink */

  flex-basis: 150px;   /*  initial size before the distribution  */

  flex: 1 1 20%; /* shorthand syntax */

  order: -1;    /*  all items have order 0 by default  */
}
```

<br>

##   <span style = 'color: lime'>  Grid

```css
.container { 
  display: grid;
  grid-template-columns: 100px 100px 100 100px 100px 100px;
  grid-template-rows: 100px 100px 100px 100px 100px 100px;
  grid-gap: 1em;
}

/*  creates a 4x4 grid with 16 100px squares  */

.item-1 { 
  grid-row-start: 1;
  grid-row-end: 2;

  grid-column-start: 2;
  grid-column-end: 3;
}

/* or */

.item-1 {

  grid-row: 1 / 2 ;        /* start at row 1 and end on row 2 */
  grid-column: 1 / 4 ;    /* start at column 1 and end on column 4 */
}

.item-2 { 

  grid-row: span 2;      /* spans to 2 row from its position  */
  grid-column: span 2;  /* spans to 2 column from its position  */
}

.item-3 { 

    grid-area: 3 / 1 / -1 / -1   /* -1, -1 is in the opposite corner of 1, 1 */

    /*  row-start / col-start / row-end / col-end  */
}
```
In a grid, items do not wrap onto the next line and can overlap eachother and create a stack. Use z-index in these cases to your advantage.

If the grid is full and we add more items, then they get added too and are called implicit grid. But they do not inherit any pre written styles. So: 

```css
.container { 
  grid-auto-rows: 100px;
}
```

The implicit grid creates a new row by default. To change that: 

```css
.container { 
  grid-auto-flow: column;
  grid-auto-column: 100px;
}
```

```css
.container { 
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 100px 200px 100px;
  grid-template-areas: 
    'header header'
    'main aside'
    'footer footer';
}

.item-1 { 
  grid-area: header;
}

.item-2 { 
  grid-area: aside;
}

.item-3 { 
  grid-area: main;
}

.item-2 { 
  grid-area: footer;
}
```

Another way of positioning grid without the help of the index.

justify-content and align-items are the same along with the individual item styling is the same as **Flexbox**.

```css 
.container { 
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))
}
```
auto-fit distrubutes any free space but auto-fill leaves additional space for new rows or columns if there is any.

```css
.contianer { 
  grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr))
}
```
If the viewport is hella small the 300px would overflow so yada yada...

<br>


##  <span style = 'color: lime'>  Responsiveness

```css
body { 
width: clamp(100px, 50%, 500px);     /*  min-value, preferred value, max-value  */

font-size: max(0.75rem, 5%);       /* if 5% is bigger than 0.75rem then it'll choose 5% else 0.75  */

height: min(100px, 5vh);       /* if 5vh is smaller than 100px then it'll choose 5vh else 100px  */

}
```

```css
@media print (max-width: 500px) {
  h1 { 
    color: coral;
  }
}

/* desktop first */

@media (min-width: 500px) { 
  h1 { 
    color: coral;
  }
}

/* mobile first */

@media (900px <= width >= 100px) { 
  h1 { 
    color: coral;
  }
}

@media only speech and (min-width: 768px) and (max-width: 1024px) {
  h1 { 
    color: coral;
  }
}


```

The first one targets screen with the max-width of 500px. So anything below will get styled.

The second one targets all screen types with a min-width of 500px. So anything above will get styled.



<br>

## <span style = 'color: lime'> Animation

Not an in depth notes. :D

```css

.heading-1 {
    animation: slideLeft 2s ease-in;
}


animation-name: slideLeft;
animation-duration: 2s;
animation-timing-function: ease-in-out;
animation-delay: 2s;
animation-iteration-count: 1;    (infinite)
animation-direction: normal;    (reverse / alternate)  
animation-fill-mode: none;

```

<span style = 'color: coral'>none:</span> it'll be the same as it was before the animation


<span style = 'color: coral'>forwards: </span>  it'll retain the styles defined in the last keyframes after the animation ends

<span style = 'color: coral'>backwards: </span> it'll set the styles defined in the first keyframes before the animation starts and after the animation ends it returns to its original position.

<span style = 'color: coral'>both:  </span>     it'll set the styles defined in the first keyframes before the animation starts and retains the styles defined in   the last keyframes after the animation ends. so its original position and final position will be as per initial position and final position.

ik it sounds confusing and is confusing so just use 'both' :>

<br>

## <span style = 'color: lime'> General Stuff

You can use line height to make sure the text align properly.

```css
.items {
  line-height: 50px;
}
```

```css
*, *::before, *::after { 
  box-sizing: border-box   /*  content-box is default  */
}
```

The padding and border gets added without increasing the width and height of the element.

```css
.parent { 
  perspective: 500px;
  transform-style: preserve-3d;
}
```

Perspective is viewing distance kinda.  
But applying preserve-3d in the parent makes it so that the children have their own 3D space and don't transform with the parent. So in a way it's like absolutely positioning it but in a 3D space.

```css
div
{
    transform: rotateX(50deg);
    transform: rotateY(.16turn);
    transform: rotateZ(.16turn);
    transform: scale(1.5,2);       
    transform: scale(0.5);       
} 

/* 

X rotates in x axis like into the screen
Y also rotates in y axis into the screen. 

They are both like flipping a card.

Z rotates along the screen like a 2D shape.

It's like rotating a card.


*/

div
{
    transform: translate(30px, -40px);     /*    doing just translate (100%) will move it in x    */
    transform: translateX(50%);
    transform: translateY(100%);
}



div
{
    transform: skew(15deg, -54deg); 
    transform: translateX(50px) rotate(.25turn, 12deg) scale(1.2) skew (22deg);
}
```
```css
div {
  transform: matrix(1.5, 0.5, -0.5, 1.2, 50, 30);
}
```
Scaled by 1.5 and 1.2 on X and Y axis  
Skewed by 0.5 and -0.5 on X and Y axis  
Translated by 50px and 30px on X and Y axis  


```css
img
{
    border-radius: 50%;  
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5),
                inset 2px 2px 5px rgba(0, 0, 0, 0.3);
}
```
1px = horizontal offset
2px = vertical offset
1px = blur radius
rgba / hsl / hex / anything = color
inset = shadow will be inside the box

```css
body {
    font-family: Arial, Helvetica, sans-serif;
  }
```
The other values are called fallback which is an alternative value which will be applied if the browser doesn't support that font.

Now there are various ways to use fonts that the system doesn't have.

One is to use link tag and directly use it in font-family.

```html

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap" rel="stylesheet">

<style>
  body { 
  font-family: 'Roboto', sans-serif;
  }
</style>

```

```css
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');

body { 
  font-family: 'Roboto', serif;
}
```

```css
@font-face {
    font-family: 'CustomFont';
    src: url('path or url to font.woff2') format('woff2'),
         url('path or url to font.woff') format('woff');
  }
  
  body {
    font-family: 'CustomFont', Arial, sans-serif;
  }


body { 
    background: linear-gradient(to right, color-1, color-2, color-3, etc);
    background: repeating-linear-gradient(to bottom left, #000000, #FFFFFF);
    background-image: linear-gradient(90deg, red 35%, tan 50%);

    background: radial-gradient(shape size at position, color-1, color-2, color-3, etc);
    background-image: radial-gradient(circle at center, #ff0000 30%, #00ff00);
    background: repeating-radial-gradient(ellipse at 25% 75%, darkorange, purple);
}

:root {
    --text-color: #000000;
    --bg-color: #FFFFFF;
    --margin: 2px;
}

.container {
    color: var(--text-color, #000);
    margin: var(--margin)
}
```

```css
.container { 
  width: 500px;
  height: 500px;
  background-color: rebeccapurple;
  clip-path: circle(50% at 10px 5%)
}
```

clip-path allows us to create custom shapes within a container. A cicle is created which is 50% of the container's size with it's center at 10px in x-axis and 5% from the origin in the y-axis.

```css
.container { 
  clip-path: polygon(10% 15%, 14% 44%, 20% 66%...)
}
```

```css
.container { 
  clip-path: path("");
}
```

Works with path too

```css
img, .text { 
  filter: blur(20px);
}

img { 
  filter: brightness(200%);
  filter: contrast(200%);
  filter: grayscale(50%);
}

input { 
  caret-color: red;
}
```
It's the | thingy when u write something

