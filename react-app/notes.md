#### Markdown

It is like txt that supports code formatting and other stuff so better notes  

#### npx 

Node Package Executable will allow you to use the package without installing the package  
&nbsp; 

```powershell

 npx create-react-app app-name

```

**or**

```powershell 
npx create-react-app 
``` 
**or**

```powershell
npm create vite@latest
```
&nbsp; 

#### Name is hella sensetive
#### React components must start with a capital to differentiate them
#### className, htmlFor and onClick are camelCase in REACT.

&nbsp; 

#### <span style = 'color: yellow'> Webpack is a bundler that bundles various files into one single file.

#### Vite utilizes the modules and is a lot faster than the traditional bundler. 

#### It has Hot Module Replacement (HMR) so we can see the changes in real time.

#### Transpiler is used to convert code of one programming language to another. Typescript is a transpiler and a super-set of JS. SCSS is both a traspiler and bundler of CSS.
&nbsp; 
```javascript 

let name = '<h1> Name </h1>'

console.log(name)
document.write(name)

```



#### console prints as it is but document bolds it. BTW this isn't JSX although very similar.

#### Babel converts ES6, ES7 to versions that browsers understand and also converts JSX to vanilla JS. 

```javascript
const element = (

<h1 className = 'greetings'>
Hello world!
</h1>
);

```

**_To:_**

```js
const element = React.createElement(
'h1',
{ className: 'greeting' },
'Hello, World!'
);
```


#### node.js is a runtime environement for js and npm is package manager that allows us to easily install libraries, frameworks, etc.


#### if u use a package manager instead of CDN links then you have to link it too.
&nbsp; 

```powershell
npm install bootstrap@latest
```

```js

<link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.css">

<script src="node_modules/bootstrap/dist/js/bootstrap.js"></script>

```

&nbsp; 

## <span style = 'color: green'> Components </span>

#### Components are reusuable block of codes that can have their own props, state, etc.

1. Functional components:

```js

import React from 'react';

const FunctionalComponent = () => {
return <h1>Hello, World!</h1>;
};

export default FunctionalComponent;

```

1.  Class based component:

```js

import React, { Component } from 'react';

class ClassComponent extends Component {
render() {
return <h1>Hello, World!</h1>;
}
}

export default ClassComponent;

```
&nbsp; 

#### We can pass data from Parent to child using props / properties
&nbsp; 

```js

import ChildComponent from './ChildComponent';
import React from 'react';

const ParentComponent = () =>{
const name = 'John';

    return (
        <div>
            <ChildComponent name = {name} age = 12 />
        </div>
    )

};

export default ParentComponent

```

**_another file_**

```js

import React from 'react';
const ChildComponent = (props) => {

    return (
        <div>
        <h1> {props.name}</h1>
        <p> {props.age} </p>
    )

};

export default ChildComponent

```
&nbsp; 

## <span style = 'color: green'> Extra Info: </span>

#### Changes made with React get reflected in a virtual DOM which esentially is just a javascript object 

#### It performs reconciliation where React compares the virtual DOM before the change and the virtual DOM after the change and makes only those specific changes to the real DOM rather than re-rendering the enitre page. It's called diffing so its faster.

``` js
const user = {
    name: 'Henry',
    imageUrl: 'https://i.imgur23rrs.jpg',
    imageSize: 80,
}

export default function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}
```

#### In style, the inner {} is an object literal and the outer {} is because it's javascriptist? idk
&nbsp; 


```js

import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <div> Name: {props.name} Age: {props.age}</div>
  )
}

// just type rfc for functional component

Navbar.propTypes = {name: PropTypes.string.isRequired,
                    age: PropTypes.number.isRequired}

// has to follow this type else invalid propType

Navbar.defaultProps = {name: 'Name??',
                    age: 0}

// even if nothing is passed the default value is set here so isRequired will not trigger an action

```

```js

import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}> + </button>
      {count}
      <button onClick={() => setCount(count - 1)}> - </button>
    </div>
  );
}

export default App;

```
&nbsp;

<span style = 'color: yellow'>

#### State is a js object that tells state of a component. When the state changes, react automatically re-renders the component to reflect the updated state. State allows components to be dynamic and responsive.

#### Here count is a state variable and shows at which count the component is in hence kinda tells the state of the component. And to change that state we use setter function which is setCount. 

#### And to use both of them we need a hook (starts with 'use') which here is useState which takes an initial value and returns an array of current state value and a function to update the state value.

#### we used an anonyomous function else it'd be called along with onClick. same case with lambda in python.

#### setCount(count + 1) is basically adding count by 1. Do Not Ever Directly Modify A State Without The Setter Function.

</span>

&nbsp;

```js
import { useState } from 'react';

export default function MyApp() {
  return (
    <div>
      <h1>Counters that update separately</h1>
      <MyButton />
      <MyButton />
    </div>
  );
}

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}

// here same component is rendered mutiple times and each will have its own unique state.
// also even though count is a const it can be 'indirectly' changed by the setter function -_- 

```

#### If you want both the components to share the same state value then you have to pass down the state from Parent as a prop.

## <span style = 'color: blue'> Hooks </span>

#### They are functions that allow us to add various features in a React functional component. They should be declared at the top of the scope.

### <span style = 'color: purple'> UseState </span>

#### UseState is a hook that allows us to add state in a functional component

#### If it wasn't obvious a change in state will re-render the whole component.

#### Another main reason for using useState is because when a component re-renders it doesn't remember the changes made in the local variables.

```js

function App () {

  let index = 0;
  sculpture = sculptures[index]

  return (
    <button onClick = () => index += 1> Next </button>
  )
}

// index doesn't change per excepted so use state. Also changing variables doesn't re-render. So another reason !!

```



&nbsp; 

###  <span style = 'color: purple'>  UseEffect </span>

#### The UseEffect hook is used to handle effects that occur as a result of component rendering, such as fetching data from an API, subscribing to event listeners, updating the document title, or performing any other actions that need to be executed after the component has rendered.

#### The parameters are a callback function which is the task it'll perform after the rendering and second optional argument is a dependency list which species the dependencies of the effect. '[]' means the effect will run only once after the initial render.


```js

export default function App() {
  const [info, setInfo] = useState({
    firstName: 'Sam',
    lastName: 'Jam',
    age: 17,
    isEligible: true 
  })

  let entry = info.isEligible ? './star.png' : './blank-star.png';

 function rigged() {
  setInfo(prevInfo => {
    ...prevInfo,
    isEligible: !prevInfo.isEligible
  });
}

// info is an object with those state values. 

// prevInfo is a shallow copy of info object

```

#### Spread operator is shallow meaning it won't copy nested things. 
#### And yes ... will also expand the isEligible but it's not an error.
#### Also we copied the whole ass object too because just modifying it would return just the modified value and not the other key value pairs of the object.

```js

import { useImmer } from 'use-immer';

// .....
  const [info, setInfo] = useImmer() 

// ....

setInfo(prevInfo =>{
  isEligible : !prevInfo.isEligible
})

// ...

```

#### Immer auto produces copies so no need.


```powershell

npm install use-immer

```
&nbsp;

```js

const obj1 = { foo: 'bar' }
const obj2 = { baz: 'qux' }
const mergedObj = { ...obj1, ...obj2 }
console.log(...obj1, ...obj2)

console.log(...Object.values(obj1));  // Output: bar

// you can't console.log(...obj1) idk it shows error. ig cuz objects aren't iterable by default

const arr1 = [1,2,3]
const arr2 = [...arr1, 4,5,6]
console.log(arr2)
```

&nbsp;


```js

function Item({ name, isPacked }) { // destructuring props
  return (
    <li className="item">
      {name} {isPacked && '✔'}
    </li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item
          isPacked={true}
          name="Space suit"
        />
        <Item
          isPacked={true}
          name="Helmet with a golden leaf"
        />
        <Item
          isPacked={false}
          name="Photo of Tam"
        />
      </ul>
    </section>
  );
}
```
&nbsp;

 <span style = 'color: green'> 

#### {isPacked && ✔'} => conditional rendering. if isPacked => true then '✔' else render nothing. If statement and ternary operator are valid as well.

#### {isPacked && ✔'} will convert the left side to a Boolean automatically but still make it a Boolean cuz messageCount && <p>New messages</p> will not render nothing when messageCount = 0 but it'll render 0 itself.

#### && is not a React exclusive thing.

</span>

&nbsp;

```js

let guest = 0;

function Cup() {
  guest = guest + 1;
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function TeaSet() {
  return (
    <>
      <Cup />
      <Cup />
      <Cup />
    </>
  );

```

#### It can produce baffling bugs and unpredictable behaviours so this is not a good practise. So props hurray.

#### A pure function minds it's own business. Given the same input it returns the same output everytime and doesn't associate itself with variables outside it's local scope. 

&nbsp;

### <div style = "color: red"> DO NOT DEFINE COMPONENTS INSIDE ANOTHER COMPONENET </div>

&nbsp;

```html

<img src={baseUrl + person.imageId + person.imageSize + '.jpg'} />

```

#### '.jpg' is inside as well cuz doing { . . . . } + '.jpg' would be invalid as '+' is a JS operator.
&nbsp;

#### In JSX while create a list with map() make sure to give key for every li else console error.

```js
const items = ['item1', 'item2', 'item3'];

function MyComponent() {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          {item}
        </li>
        <p> {item} is very good </p>
      ))}
    </ul>
  );
}
```
&nbsp;

## <span style = 'color: yellow'>Useful </span>

#### Side effects can take various forms, such as modifying global variables, altering data structures, writing to files, making network requests, or displaying output to the user. Impure Functions have sideeffects. They aren't necessarily bad but can be confusing.

####  <span style = 'color: green'>  Imperative programming is where you explicitely describe the steps for the task. C, C++, Java, Python (to an extend), etc 

 <span style = 'color: green'> ✓ </span> What  <span style = 'color: green'> ✓ </span> How

####  <span style = 'color: green'>  Declarative programming is where you don't describe the steps for the task. Prolog (the syntax is weird AF)
<span style = 'color: green'> ✓ </span> What  <span style = 'color: red'> ✗ </span> How 

&nbsp;

#### JS inside {} and JSX will be executed instantly when the component is rendered so don't do:

```html
<button onclick = {alert('Hi!)}>

<!-- instead do:  -->

<button onclick = {() => alert('Hi')}>

```
&nbsp;

```js

function Button({ onClick, children }) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
}

function PlayButton({ movieName }) {
  function handlePlayClick() {
    alert(`Playing ${movieName}!`);
  }

  return (
    <Button onClick={handlePlayClick}>
      Play "{movieName}"
    </Button>
  );
}

// 'children' is a special prop that is anything that is written between <Component> ... </Component>

```

&nbsp;

```js

import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(number + 1);
        setNumber(number + 1);
        setNumber(number + 1);
      }}>+3</button>
    </>
  )
}

```

#### The reason it doesn't add three times but only one time is because setter function sets the value for the next render. The value of number in this render is 0. So in the first setNumber it'll add 0 and 1. Same with the second and third. They all will add 1 to the value of this component snapshot which is 0. After re-rendering number will be 1 and they all is add 1 to 1 causing number to be 2.

&nbsp;

```js
setNumber(n => n + 1)
setNumber(n => n + 1)
setNumber(n => n + 1)
```

&nbsp;

####  <span style = 'color: yellow'> But this works as intended and rest assured I ain't saying IDK why. Think of that first example as replaceing the value number. You replace it with 0 + 1 and again replace it with 0 + 1 and again... etc and we get nowhere. 

####  <span style = 'color: yellow'> But here we operate on the number instead of replacing it. First setter function updates the value as 0 + 1 = 1 as returned from that updater function. So it'll be setNumber(1). Again same thing happens in second and third so we are still rendering only one time but instead of replacing we operated on it.

&nbsp; 

```js

// Mini Quiz

// number is 0

setNumber(number + 5);
setNumber(n => n + 1);

// output will be.... 6 !! CORRECT !! 

```

#### So yea this all kinda explains why re-rendering doesn't change the value of state, etc but instead gives a snapshot of the new UI along with the updated state, prop, etc. 

&nbsp;

```js

import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(number + 5);
        setTimeout(() => {
          alert(number);
        }, 3000);
      }}>+5</button>
    </>
  )
}


```

#### Suppose the alert runs after the component renders. You might think by the time the alert is fired the state's value will be changed to 5 so it'll display 5. But it'll still display 0 because alert was scheduled using the snapshot of the state where it's value was 0. So its value will not be changed.

&nbsp;

###  <span style = 'color: purple'> UseReducer 

#### UseReducer is like UseState but it manages more complex states. Managing lots of states can be difficult so useReducer is used. 

```js

import React, { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    default:
      return state;
  }
};

const Counter = () => {
 
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    </div>
  );
};

export default Counter;


```


#### state is different states. Dispatch function is used to call the reducer function which takes two arguments (state, action). This function is outside the component to prevent unwanted re-renders of this function which can lower the performance.States are stored in an object.

#### When button is clicked, dispatch calls the reducer function and the action's type is passed. The reducer function changes the state per the action type. All names are convention.

&nbsp;

###  <span style = 'color: purple'> UseLayoutEffect 

#### It is the same as useEffect the only difference being it runs before the component renders.

```js
import React, { useLayoutEffect } from 'react';

const ClickCounter = () => {

  useLayoutEffect(() => {
    document.title = `Jo`;
  });

  return (
    <pre>
      Hello World HAHAHA!
          Hehehe
    </pre>
  );
};

// pre tag (preformatted) displays the content as it is.

export default ClickCounter;
```


### <span style = 'color : purple'> UseRef

It is used to reference elements in the DOM.

```js
function TextInput() {
  const inputRef = useRef();

  const handleFocus = () => {
    inputRef.current.focus();
    console.log(inputRef.current.value)
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}

```

#### <span style = 'color : green'> UseRef will return a object with a property 'current'. The current's value will be wtv is passed in useRef

#### <span style = 'color : green'> It can also be used to store mutable values as change in it's value doesn't re-render the component unlike states.

```js
const countRef = useRef(0);
  const increment = () => {
    countRef.current += 1;
    console.log('Current count:', countRef.current);
  };
```

&nbsp;


### <span style = 'color: purple'> UseContext

#### <span style = 'color: yellow'> Imagine a component called App. It has a child called Home. The Home too has a child called Form and Form has a child called Button. Now if Button has a state 'login' = true then it'll be hard to access that state from App. But you might say just pass it as a prop from App. But then you'll have to pass it through every child and it'll untraceable. 

#### <span style = 'color: yellow'> In this case we can use Context API (mixture of Context.Provider component, useContext hook / Context.Consumer component)

&nbsp;

```js
import { createContext } from 'react';
const MyContext = createContext();

export default MyContext
```

#### <span style = 'color: green'> A context is created named MyContext. It doesn't hold the context's value but does hold the type of data.

```js
import { useState } from 'react';
import MyContext from './context.js';

function App() {

  const [data, setData] = useState('Hello from Context API!');

  return (

    <MyContext.Provider value={data}>
      <ChildComponent />
    </MyContext.Provider>
  );
}

```

#### <span style = 'color: green'> The value is the data to be passed.

#### <span style = 'color: green'> MyContext.Provider is used to wrap the part of the component tree that needs access to the data. Value is the data to be shared. 

```js
import { useContext } from 'react';
import MyContext from './context.js'; 

function ChildComponent() {

  const data = useContext(MyContext);

  return (
    <div>
      <p>{data}</p>
    </div>
  );
}


```

####  <span style = 'color : green'>  useContext retrieves data from the closest Context.Provider in the component tree. 

```js
function App() {
  return (
    <ContextA.Provider value="Data from Context A">
      <ContextB.Provider value="Data from Context B">
        <ChildComponent />
      </ContextB.Provider>
    </ContextA.Provider>
  );
}

function ChildComponent() {
  const dataFromContextA = useContext(ContextA);
  const dataFromContextB = useContext(ContextB);

  return (
    <div>
      <p>Data from Context A: {dataFromContextA}</p>
      <p>Data from Context B: {dataFromContextB}</p>
    </div>
  );
}
```

#### <span style = 'color : green'> Both the times the context of B will be used.

&nbsp;

## <div style = 'color: red'> Routing 

Using third party libraries like React Router we can determine which components to render based on the URL. It allows you to create single-page applications (SPAs) where different components are displayed in the same page without a full reload, providing a smooth user experience.

```powershell
npm install react-router-dom
```

```js
// index.js

root.render (
  <StrictMode>
    <BrowserRouter>
      <App />
    <BrowserRouter>
  </StrictMode>
)

// or wrap it in App.js itself
```

&nbsp;

```js
import {Link, Routes, Route} from 'react-router-dom';

function App {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to = '/'> Home </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path = '/' element = {<Home />}>
        <Route path = '/books/:id' element = {<BookList />}>

      </Routes>
      </>
  )
}

```

#### <div style = 'color: green'> Routes component is a container that helps in grouping multiple Route
#### <div style = 'color: green'>BrowserRouter component is needed to use routing functions of the library. 
#### <div style = 'color: green'>Route component defines a route and the component to be displayed on that route.
#### <div style = 'color: green'>Link component allows us to create navigation links within our application so basically an anchor tag for SPA.
#### <div style = 'color: green'>'path' , 'to' are props cuz they are components stoopid


#### <div style = 'color: green'> That dynamic books router stores anything after '/books/' to a variable id. (/books/1D2 => id: 1D2)