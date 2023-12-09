<div style = 'color: aqua'>

## <span style = 'color: coral'> Document Object Model 

DOM provides a way to access and manipulate the elements on a web page. DOM represents the HTML or XML elements in a tree like structured format and each node represents an HTML element like paragraph, heading, etc. These elements can be manipulated using programming language like JavaScript.   

It acts as an interface between the web page content and the scripting or programming language, enabling you to modify and update the web page dynamically.

<br>

## <span style = 'color: coral'>Application Programming Interface

 API is a set of rules and protocols that defines how different software components should interact with each other.APIs provide a simplified and standardized way for developers to access the features and functionality of a system or service without having to understand the underlying implementation details.

 API is acts like a messenger for transfer of information between softwares. For example, social media platforms provide APIs that allow developers to integrate their applications with the platform, enabling features like sharing content or retrieving user data. In-Driver also uses Google Maps API.

```html
<style>
    ::cue { 
        font-size: 1.2em;
        color: white;
        opcaity: 0.3;
    }
</style>

<video src = 'video.mp4' controls>

<video controls>
  <source src="video.mp4" type="video/mp4">
  <source src="video.webm" type="video/webm">
  <p>Your browser does not support the video tag.</p>
  <track kind="subtitles" label="English" src="subtitles-en.vtt" srclang="en">
</video>

<!-- fallback content -->

<!-- controls enables volume slider, minimize buttons, playback speed etc... -->

<!-- track is for subtitles -->

<!-- ::cue pesudo-element is for subtitle styling -->
```
The video tag works in conjuction with the HTML5 Video API. That API allows us to use different methods and properties like: play() pause() currentTime volume etc...  

```html
<video id="myVideo" controls>
  <source src="video.mp4" type="video/mp4">
</video>

<script>
  const video = document.getElementById("myVideo");

  function playVideo() {
    video.play();
  }

  function pauseVideo() {
    video.pause();
  }

  function seekToTime(seconds) {
    video.currentTime = seconds;
  }
</script>

```


Same with the canvas tag.  

HTML5 recommends to close void tags / self closing tags like: &lt;a/&gt;  &lt;input/&gt;

Wireframe -> rough blueprint of how ur website should look   
Mockup -> full on visual representation of ur website (Figma 👍)

<br>

 
 



```html 
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Document</title>

</head>
</html>

```

Doctype informs the browser that HTML5 is being used. 

UTF-8 is a character encoding system that supports a wide range of characters and IE = edge is saying the internet explorer to use the latest compatiable version  

name = viewport means the meta tag is defining the viewport  
content="width=device-width" ensures page's content will be displayed in device's full width  
 initial-scale=1.0" is zoom level  
<br>

##  <span style = 'color: coral'>DOM Manipulation

```js
 window.location.reload();   // refreshes

 localStorage.setItem ('test', 20);

 window.onscroll = function (){
    console.log ('hi');
 }
```


```js
const innerHeight = window.innerHeight
const outerHeight = window.outerHeight
```


InnerHeight is the height of the visible content only. The UI of the browser, bookmarks, tabs and overflow elements are excluded.
OuterHeight is the height of the entire window including the UI, bookmarks, tabs but the overflow elements are still excluded.

Overflow elements typically mean the scrollbar and the scrollable height.

```js

window.alert('hello');
alert('hello');

 window.scrollBy({
    top: window.innerHeight,
    left: 0,
    behavior: smooth
 });
```
```js
scrollBy(0,0)
```
Window is a global object so we don't need to specify it.

Done without destructuring. Since the behaviour value isn't passed, it'll use the default value 'auto'.


```js
  const btn = document.getElementById("id")

        function rando() {
            const randomNum = Math.floor(Math.random() * 100)
            const randomContent = "A random number between 0 and 99: " + randomNum;
            const newElement = document.createElement('p')
            newElement.textContent = randomContent; 
            document.body.appendChild(newElement); 
        }

        btn.addEventListener('click', rando)
```
InnerText displays only the text but TextContent displays the indentation as well.

```html
<div id="id">
    <p>Hello, <strong>World!</strong></p>
</div>

<script>
    const element = document.getElementById('id')
    console.log(element.innerHTML)

    // prints it raw along with the tags

    // <p>Hello, <strong>World!</strong></p>

</script>

```

```html
div.innerHTML = "<strong> Hello World </strong>"
```

This does work but is vulnerable to Javascript Injections.

```js
const element = document.createElement('strong')
element.innerText = 'Hello World'
strong.append()
```
appendChild() only appends elements but append can append strings as well as append multiple child at once.

```js
parent.append(ele1, ele2, ele3, 'Hi')
```


Much safer!



```js
const container = document.querySelector('.meme-content');
const newElement = create.Element('img');

newElement.setAttribute ('src', 'http://i.redd.it/djn23ee61.jpg');

container.appendChild (newElement);
```

```js
console.log(newElement.nodeType)
```

1 => Element  
2 => Attribute of element  
3 => Text inside the element  
8 => Comments  
9 => Document  


```js


    const posts = [
        {
        title: '1',
        price: 1
    },
       {
        title: '2',
        price: 10
    },
       {
        title: '3',
        price: 100
    },
       {
        title: '4',
        price: 1000
    }
    ]

    function getPosts() {
        setTimeout(() => {
            let output = '';
            posts.forEach((post) => {
                output += `<li>${post.title}</li>`;
            });
            document.body.innerHTML = output;
        }, 1000);
    }

    getPosts();
```

```js
console.log(document.querySelectorAll('div'))  // [<div/>, <div/>, <div/>]
```

This returns a special object called "NodeList" which has length property and indexing as well.

<br>

##  <span style = 'color: coral'>Data Attributes

Data attributes or data tags are used to give more attributes to HTML elements.

```html
<div id = 'id' data-price = 1000 data-item-name="watch">Watch</div>
<button id = 'btn'>
```
```css
[data-item-name = 'watch'] {
    width: 40px;
}
```
```js
const watchElement = document.getElementById('id')
document.getElementById('btn').addEventListener('click', ()=> { 
    const name = watchElement.dataset.itemName;
    const price = watchElement.dataset.price
    console.log(`Your item is: ${name} of price: $ ${price}`)
})
```

The data attributes are stored in an object called dataset. We can omit the 'data' part in the name and the hyphen (-) get converted to converted to camelCase.


