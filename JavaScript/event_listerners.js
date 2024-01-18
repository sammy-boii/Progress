// Event Propagation is the propagation of event. It can be from child to parents or vice versa. They are Event Bubling and Event Capturing / Event Tickling

const grandparent = document.querySelector(".grandparent")
const parent = document.querySelector(".parent")
const child = document.querySelector(".child")

grandparent.addEventListener("click", () => {
  console.log("Grandparent")
})
parent.addEventListener("click", () => {
  console.log("Parent")
})
child.addEventListener("click", () => {
  console.log("Child")
})
document.addEventListener("click", () => {
  console.log("Document")
})

//   when u click on grandparent it'll display "Grandparent" and "Document" and if u click on parent it will display "Parent" and "Grandparent" and "Document" cuz parent is inside grandparent which is inside document. similar w/ child cuz it's inside all.

// This is the default behaviour

// Event Bubbling happens when an element receives an event, and that event is propagated to its parent and ancestor elements in the DOM tree until it gets to the root element.

grandparent.addEventListener("click", () => {
  console.log("Grandparent")
})

// In Event Capturing an event propagates from the outermost ancestor to the target element. So opposite of Event Bubbling

grandparent.addEventListener(
  "click",
  () => {
    console.log("Grandparent")
  },
  true
)
parent.addEventListener(
  "click",
  () => {
    console.log("Parent")
  },
  { capture: true }
)
child.addEventListener(
  "click",
  () => {
    console.log("Child")
  },
  { capture: true }
)
document.addEventListener(
  "click",
  () => {
    console.log("Document")
  },
  { capture: true }
)

// just true works as well

// If there is a mix of capturing and bubbling just remember capturing takes precedence no matter the order in the DOM.

child.addEventListener(
  "click",
  (e) => {
    console.log("Child")
    e.stopPropagation()
  },
  { once: true }
)

// stops the propagation after displaying "Child" and only runs this event once

addEventListener("click", Hi) // dont write Hi() cuz if u do so it'll be invoked regardless of clicking .... i think

function Hi() {
  console.log("hi")
}

const divs = document.querySelectorAll("div")
divs.forEach((div) => {
  div.addEventListener("click", () => {
    console.log("hi")
  })
})

// so clicking on all divs print "hi"

const newDiv = document.createElement("div")
newDiv.style.width = "200px"
newDiv.style.height = "200px"
newDiv.style.backgroundColor = "magenta"
newDiv.style.color = "white"

// but this newDiv will not display "hi" cuz it was created after the event happened

// * Event Delegation

// ? It is an event handling pattern where u handle event in a higher level than the target element.

/*

<div><
  button></button
></div>

*/

const div = document.querySelector("div")

div.addEventListener("click", (event) => {
  if (event.target.tagName == "BUTTON") console.log("Button was clicked")
})
