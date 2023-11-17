// EXERCISES > JS FRONT-END DEVELOPMENT WITH JAVASCRIPT

/*
TRAVERSING, QUERYING, AND MANIPULATION

// Write a functionto find the direct and indirect chidren of any given node

function sortedChildNodes(node) {
  let direct = node.childNodes.length;
  let indirect = 0;

  walk(node, function() {
    indirect += 1;
  });

  indirect -= direct;

  return [direct, indirect - 1]
}

function walk(node, callback) {
  callback(node);

  for (let i = 0; i < node.childNodes.length; i += 1) {
    walk(node.childNodes[i], callback);
  }
}

// reteive nested arrays working backwards through the DOM tree

// given a node
// grab the parent node of that node
// grab the child elements of that node
// store in an array
// grab all of those

function backwardsDOMTree(id) {
  let results = [];
  while (id >= 1) { 
    let node = document.getElementById(id);
    let parent = node.parentNode;
    let children = parent.children;
    let array = [];

    Array.prototype.slice.call(children).forEach((child) => {
      array.push(child.nodeName);
    });

    results.push(array);
    id = parent.id;
  }

  return results;
}

// create a function that obtains a list of DOM elements from given id's

function sliceTree(start, end) {
  let results = [];
  let endNode = document.getElementById(end);
  let startNode = document.getElementById(start);
  let node = endNode;

  if (endNode === null || startNode === null) return undefined;
  
  while (node.id !== start.toString()) { 
    results.push(node.nodeName);
    node = node.parentNode;
    if (node === null) return undefined;
  }

  results.push(node.nodeName);
  console.log(results.reverse());
}

// Color the generations (in other words color the elements on same indentation level) in other other words color the child elements that are the same count away from the same parent element.

// get generation number from argument
// get children of current parent node
  // subtract from generation count
    // repeatedly get next children nodes, filtering out those that are null
      // once generations are 0 then you can style those remaining children


function colorGeneration(generation) {
  let node = document.querySelector('article');

  walkToGeneration(node, generation);
}

function walkToGeneration(node, generation) {
  if (node === null) {
    return;
  } else if (generation === 1) {
    console.log(node.nodeName);
    node.classList.add('generation-color');
    return;
  }
  
  for (let i = 0; i < node.children.length; i += 1) {
    console.log(node.nodeName);

    walkToGeneration(node.children[i], generation - 1);
  }
}


// Write a function that swaps two nodes given the id attribute of both nodes.
// The function should also return true if the funciton is successful in swapping
// The function should return undefined if the function is unsuccessful in sweapping
// => the node id doesn't exist
// => one node is the child of another node.

/*
PEDAC

PROBLEM
--------
INPUT: 2x integers
OUTPUT: boolean true or undefined

RULES:
- It's possible the id's given will not exist
- It's possible the nodes mioght be a parent of child of the other
- function should return true if the swap was successful
- funciton should return undefined if not possible
- Nodes are only swappable if they exist with the id, and they do not have a parent child relationship.
- Probably not always guarenteed to be in numeric order.

EXAMPLES
--------
<!doctype html>
<html>
  <head>
    <title>Node Swap</title>
  </head>
  <body>
    <div id="1">
      <div id="4"></div>
      <div id="5">
        <div id="6"></div>
      </div>
    </div>
    <div id="2"></div>
    <div id="3">
      <div id="7"></div>
      <div id="8"></div>
      <div id="9"></div>
    </div>
  </body>
</html>

// at least one of the id attributes doesn't exist
> nodeSwap(1, 20);
= undefined

// at least one of the nodes is a "child" of the other
> nodeSwap(1, 4);
= undefined
> nodeSwap(9, 3);
= undefined

// one swap
> nodeSwap(1, 2);

<!doctype html>
<html>
  <head>
    <title>Node Swap</title>
  </head>
  <body>
    <div id="2"></div>
    <div id="1">
      <div id="4"></div>
      <div id="5">
        <div id="6"></div>
      </div>
    </div>
    <div id="3">
      <div id="7"></div>
      <div id="8"></div>
      <div id="9"></div>
    </div>
  </body>
</html>

// multiple swaps
> nodeSwap(3, 1);
> nodeSwap(7, 9);

<!doctype html>
<html>
  <head>
    <title>Node Swap</title>
  </head>
  <body>
    <div id="3">
      <div id="9"></div>
      <div id="8"></div>
      <div id="7"></div>
    </div>
    <div id="2"></div>
    <div id="1">
      <div id="4"></div>
      <div id="5">
        <div id="6"></div>
      </div>
    </div>
  </body>
</html>

DATA STRUCTURES
---------------
Array-like live collection
Array

ALGORITHM
---------
How to verify if the nodes exist?
- check with getElementById and see if null is returned
- if it is I can return undefined from the object

How to verify if the node is a parent of the other, or if the node is a child of the other?
- Get the id of the first and walk making sure the second isn't a child
- Get the id of the second and walk making sure the first isn't a child of the second

How to swap the nodes?
- get previous sibling of first unless null
- Use replace node to swap the first for the second
- Use append by position to add the node to where the previous node was


function nodeSwap(id1, id2) {
  let node1 = document.getElementById(id1);
  let node2 = document.getElementById(id2);

  if (node1 === null || node2 === null) return undefined;

  let areRelated = relatedNodes(node1, node2) || relatedNodes(node2, node1);

  if (areRelated) return undefined;

  let prevSibling = node2.previousElementSibling;
  let parent = node2.parentNode;
  parent.replaceChild(node2, node1);

  if (prevSibling) {
    prevSibling.insertAdjacentElement('afterend', node1);
  } else {
    parent.insertAdjacentElement('afterbegin', node1);
  }

  return true;
}

function relatedNodes(node1, node2) {
  for (let i = 0; i < node1.children.length; i += 1) {
    if (node1.children[i].id === node2.id) {
      return true;
    } else {
      relatedNodes(node1.children[i], node2);
    }
  }

  return false;
}

// Implement a function that converts the DOM, starting from the body, to nested arrays. Each element in the DOM is represented as ["PARENT_TAG_NAME", [children]] where children are elements as well and as such follow the same format. When an element has no children, it's represented as ["PARENT_TAG_NAME", []]. For instance, if the HTML doesn't have any elements inside the body, the result array would be: ["BODY", []]. Likewise, if the HTML only has a div element as its content, the result array would be: ["BODY", [["DIV", []]]].


PROBLEM
-------
Write a function to convert the DOM tree to nested arrays starting from the body. Each nested array should consist of the name of the node and an array of any child nodes.

INPUT: NO INPUT
OUTPUT: String representation of a nested array of the DOM tree

RULES:
- If a node doesn't have any child elements then an empty array will be present within the array representing the node.
- If a node does have children these should be included within array representing the child elements.
- The node names should be in all caps

EXAMPLES
--------
// ...
//   <body>                        ["BODY",[ ..., ..., ... ]]
//                                         /        |      \
//     <header id="1"></header>  ["HEADER",[]]      |       \
//     <main id="2"></main>                   ["MAIN",[]]    \
//     <footer id="3"></footer>                           ["FOOTER",[]]
//   </body>
// ...

// ["BODY",[...]] >>
// ["BODY",[["HEADER",[]],["MAIN",[]],["FOOTER",[]]]]

DATA STRUCTURES
---------------
CONSTANTS >> ["BODY", []] >> array with two elements: string + subarray
DYNAMIC   >> []           >> subarray representing child elements

ALGORITHM
---------
How to start walking through DOM tree at the BODY node?
- use query selector?
- get node using `getElementByTag`?
- assign from outside any potential looping as a start value

How to add elements to the BODY node's child subarray?
- first check if the current node has children
- if node has children, then gather all children

How to walk down each child nodes DOM tree?
- if an element has children, and children have been gathered...
  -iterate through children

How to know when to stop walking, in other words when there are no more child nodes?
- getting children nodes return undefined or null?
- An empty array should be returned

CODE
----
A possible mental model for this problem is to iteratively get the children of parent elements until there are no parent elements with children. This leads to a deeper nesting as there are more children elements that are parents. Here's a high level algorithm that can go with this mental model:

    Check if the parent element has children.
    If the parent element has children set the value of the children array to it ([parentElement, [children]]), otherwise, set it to an empty array ([parentElement, []]).
    Check if any of the children are parents.
    If there are parents, repeat the process from step 1.



function nodesToArr() {
  const nodesArray = ['BODY', formatNodes(Array.prototype.slice.call(document.body.children))];
  let currentParentNodes = nodesArray[1];

  while(anyChildren(currentParentNodes)) {
    currentParentNodes = getNextGenerationParents(currentParentNodes);
  }

  getNextGenerationParents(currentParentNodes);

  return nodesArray;
}

function getNextGenerationParents(currentParentNodes) {
  let newParentNodes = [];
  currentParentNodes.forEach((parentNode, index, parentNodes) => {
    parentNodes[index] = appendChildren(parentNode);
    if (parentNodes[index][1].length > 0) {
      newParentNodes = newParentNodes.concat(parentNodes[index][1]);
    }
  });

  return newParentNodes;
}

function anyChildren(parentNodes) {
  for (let i = 0; i < parentNodes.length; i += 1) {
    if (parentNodes[i][0].children.length > 0) {
      return true;
    }
  }

  return false;
}

function appendChildren(parentNode) {
  const children = formatNodes(Array.prototype.slice.call(parentNode[0].children));
  parentNode[0] = parentNode[0].tagName;
  parentNode.push(children);
  return parentNode;
}

function formatNodes(nodes) {
  return nodes.map(node => [node]);
}

// <!doctype html>
// <html>
//   <head>
//     <title>Nodes to Array</title>
//   </head>
//   <body>
//     <header id="1"></header>
//     <main id="2"></main>
//     <footer id="3"></footer>
//   </body>
// </html>

nodesToArr();
// ["BODY",[["HEADER",[]],["MAIN",[]],["FOOTER",[]]]]

// OR

// ["BODY", [
//    ["HEADER", []],
//    ["MAIN", []],
//    ["FOOTER", []]]]

// <!doctype html>
// <html>
//   <head>
//     <title>Nodes to Array</title>
//   </head>
//   <body>
//     <header id="1"></header>
//     <main id="2">
//       <div></div>
//       <div></div>
//     </main>
//     <footer id="3"></footer>
//   </body>
// </html>

nodesToArr();
// ["BODY",[["HEADER",[]],["MAIN",[["DIV",[]],["DIV",[]]]],["FOOTER",[]]]]

// OR

// ["BODY", [
    // ["HEADER", []],
    // ["MAIN", [
    //   ["DIV", []],
    //   ["DIV", []]]],
    // ["FOOTER",[]]]]

// <!doctype html>
// <html>
//   <head>
//     <title>Nodes to Array</title>
//   </head>
//   <body>
//     <div id="1">
//       <div id="4"></div>
//       <div id="5">
//         <div id="6"></div>
//       </div>
//     </div>
//     <div id="2"></div>
//     <div id="3">
//       <div id="7"></div>
//       <div id="8"></div>
//       <div id="9"></div>
//     </div>
//   </body>
// </html>

nodesToArr();
// ["BODY",[["DIV",[["DIV",[]],["DIV",[["DIV",[]]]]]],["DIV",[]],["DIV",[["DIV",[]],["DIV",[]],["DIV",[]]]]]]

// OR

// ["BODY", [
    // ["DIV", [
    //   ["DIV", []],
    //   ["DIV", [
    //     ["DIV",[]]]]]],
    // ["DIV", []],
    // ["DIV", [
    //   ["DIV", []],
    //   ["DIV", []],
    //   ["DIV", []]]]]]
*/

///////////////////////////////////////////////////////////////////////////////

// EVENTS AND ASYNCHRONOUS PROGRAMMING


// Randomizer

// Write a randomizer function that accepts n callbacks and calls each callback at some random point in time between now and 2 * n seconds from now. For instance, if the caller provides 5 callbacks, the function should run them all sometime within 10 seconds.

// While running, randomizer should log the elapsed time every second: 1, 2, 3, ..., 2 * n.

// function callback1() {
//   console.log('callback1');
// }

// function callback2() {
//   console.log('callback2');
// }

// function callback3() {
//   console.log('callback3');
// }

// function randomizer(/* your parameters here */) {
//   // Your code here.
// }

// randomizer(callback1, callback2, callback3);

// Output:
// 1
// 2
// "callback2"
// 3
// "callback3"
// 4
// 5
// "callback1"
// 6

// function randomizer(...callbacks) {
//   let totalSeconds = callbacks.length * 2;
//   let miliseconds;
//   let count = 1;

//   let id = setInterval(function() {
//     console.log(count);
//     count++;

//     if (count > totalSeconds) {
//       clearInterval(id);
//     }
//   }, 1000);

//   callbacks.forEach((callback) => {
//     let random = Math.floor(Math.random() * totalSeconds);
//     miliseconds = 1000 * random;

//     setTimeout(callback, miliseconds);
//   })
// }

// LS SOLUTION

// function randomizer(...callbacks) {
//   if (callbacks.length < 1) {
//     return;
//   }

//   const secondsEnd = 2 * callbacks.length;
//   let secondsElapsed = 0;

//   const timeLogger = setInterval(() => {
//     secondsElapsed += 1;
//     console.log(secondsElapsed);

//     if (secondsElapsed >= secondsEnd) {
//       clearInterval(timeLogger);
//     }
//   }, 1000);

//   callbacks.forEach(callback => {
//     const executeTime = Math.floor(Math.random() * secondsEnd * 1000);
//     setTimeout(callback, executeTime);
//   });
// }

// Reverse Engineer

// Without changing the behavior of the following code, remove the call to event.stopPropagation and refactor the result.

// document.querySelector('html').addEventListener('click', (event) => {
//   const container = document.querySelector('#container');

//   if (!container.contains(event.target)) {
//     container.style = 'display: none';
//   }
// },);

// document.querySelector('#container').addEventListener('click', event => {
//   event.stopPropagation();
// });


// Bold Element + Custom

// Implement a function that makes an element bold and allows the user of the function to optionally do something else with it.

// <!doctype html>
// <html lang="en-US">
//   <head>
//     <meta charset="utf-8">
//     <title>Bold Element + Custom</title>
//   </head>
//   <body>
//     <section>Hello World</section>
//     <p>Greetings!</p>
//   </body>
// </html>

// function makeBold(element, callback) {
//   element.style.fontWeight = 'bold';

//   callback(element);
// }

// let sectionElement = document.querySelector('section');

// makeBold(sectionElement, function(elem) {
//     elem.classList.add('highlight');
//   });

// sectionElement.classList.contains('highlight');
// // = true
// sectionElement.style.fontWeight;
// // = "bold" 

// Buggy Code

// The code below is buggy. The person who created the code expects that nothing will happen when the user clicks on the image. This, however, isn't the case; clicking the image still brings the user to another web page.

// Study the code and explain the bug.

// document.querySelector('img').addEventListener('click', event => {
//   event.stopPropagation();
// }, false);

// <a href="https://www.launchschool.com">
//   Home
//   <img src="https://d24f1whwu8r3u4.cloudfront.net/assets/launch-logo-b6d01bd15ee9da31457ee3c315845718823aa8a741858be598ab35042a312348.svg" />
// </a>

// Need to prevent default not stop propagation.


// Context Menus

// Given the following markup, implement distinct context menus for the main and the sub areas of the web page. You can represent a context menu as an alert box that displays the name of the respective area (i.e., alert("sub")). Only one context menu should appear when the event occurs.

/* <main>
  Main Area
  <section id="sub">
    Sub Area
  </section>
</main>

main, #sub {
  padding: 15px;
}
main {
  width: 100%;
  height: 200px;
  background: blue;
  color: white;
}

#sub {
  position: relative;
  top: 100px;
  left: 15px;
  background: red;
  height: 50px;
  width: 50%;
} */

// document.querySelector("main").addEventListener('contextmenu', (event) => {
//   event.stopPropagation();
  
//   alert("main");
// })

// document.querySelector("#sub").addEventListener('contextmenu', (event) => {
//   event.stopPropagation();
  
//   alert("sub");
// }, true)

// LS Solution

// const main = document.querySelector('main');
// const sub = document.querySelector('#sub');

// main.addEventListener('contextmenu', event => {
//   event.preventDefault();
//   alert('Main');
// });

// sub.addEventListener('contextmenu', event => {
//   event.preventDefault();
//   event.stopPropagation();
//   alert('Sub');
// });

// Selection Filters

// Given the HTML below, write some JavaScript code that updates the options on one dropdown when the selection in the other dropdown changes. For instance, when the user chooses an option under Classifications, the items in the Animals dropdown should change accordingly. Use the lookup tables below to see which animals and classifications go together.

// const classifications = document.querySelector('#animal-classifications');
// const animals = document.querySelector('#animals');

// const classificationInfo = {
//   'Vertebrate': ['Bear', 'Turtle', 'Whale', 'Salmon', 'Ostrich'],
//   'Warm-blooded': ['Bear', 'Whale', 'Ostrich'],
//   'Cold-blooded': ['Salmon', 'Turtle'],
//   'Mammal': ['Bear', 'Whale'],
//   'Bird': ['Ostrich'],
// }

// function getAnimalInfo(animal) {
//   let keys = Object.keys(classificationInfo);
  
//   let info = keys.filter((key) => {
//     classificationInfo[key].includes(animal);
//   })
  
//   return info;
// }

// classifications.addEventListener('change', (event) => {
//   let validAnimals = classificationInfo[event.target.value];
//   let optionKeys = Object.keys(animals.options);

//   optionKeys.forEach((_) => animals.remove(0));

//   validAnimals.forEach((animal) => {
//     let opt = document.createElement("option");
//     opt.text = animal;
//     opt.value = animal;
    
//     animals.add(opt, null);
//   }
// })

// Delegate Event Function

// Implement a function named delegateEvent that delegates events to the descendant (inner) elements of a parent element that match a given selector. The function takes four arguments: parentElement, selector, eventType, and callback. It returns true if it was able to add an event listener and undefined if it wasn't. For example, if the parentElement is section and selector is p, the function should delegate events of eventType on the p element within section to the function callback; consequently, the function returns true.

// Assume that all event handlers listen during the bubbling phase.

// function delegateEvent(parentElement, selector, eventType, callback) {
//   if (parentElement === null) return undefined;

//   const element = parentElement.querySelector(selector);

//   parentElement.addEventListener(eventType, (event) => {
//     // event.stopPropagation();
//     if (event.target.tagName === element.tagName) {
//       callback();
//       return true;
//     }
//   })

//   return undefined;
// }

// Event Tracker
/*
const divRed = document.querySelector("#red");
const divBlue = document.querySelector("#blue");
const divOrange = document.querySelector("#orange");
const divGreen = document.querySelector("#green");

const tracker = (() => {
  let events = []
  return {
    list() {
      return events.slice();
    },

    elements() {
      let map = events.map((e) => {
        return e.target;
      })

      console.log(map)
      return map;
    },

    clear() {
      events = [];
    },

    add(e) {
      events.push(e);
    },

    length: events.length,
  }
})();

function track(callback) {
  return function(event) {
    event.stopPropagation();
    if (!eventAlreadyOccurred(event)) {
      tracker.add(event);
    }

    callback(event);
  }
}

function eventAlreadyOccurred(event) {
  for (let idx = 0; idx < tracker.list().length; idx++) {
    let loggedEvent = tracker.list()[idx];

    if (loggedEvent.type === event.type && loggedEvent.target === event.target) {
      return true;
    }
  }
  return false;
}


divRed.addEventListener('click', track(event => {
  document.body.style.background = 'red';
}));

divBlue.addEventListener('click', track(event => {
  event.stopPropagation();
  document.body.style.background = 'blue';
}));

divOrange.addEventListener('click', track(event => {
  document.body.style.background = 'orange';
}));

divGreen.addEventListener('click', track(event => {
  document.body.style.background = 'green';
}));
*/

// =======  ARRAY TO NODES  ========


// Given a nested array of nodeNames
// Get the first element (parent element)
// Get second element (children)
// Iterate through all children and children's children.
// When there are no children left...
  // append child to parent and return.

let currentElem = document;
let parent;

function arrayToNodes(nodes) {
  parent = document.createElement(nodes[0].toLowerCase());
  let children = nodes[1];

  for (let i = 0; i < children.length; i++) {
    parent.appendChild(arrayToNodes(children[i]));
  }

  return parent;
}

function arrayToNodes(nodes) {
  const parent = document.createElement(nodes[0]);
  const children = nodes[1];

  if (children.length === 0) {
    return parent;
  } else {
    for (let i = 0; i < children.length; i += 1) {
      parent.appendChild(arrayToNodes(children[i]));
    }
  }

  return parent;
}

// Nested array of nodes
const nodes = ["BODY",[["HEADER",[]],["MAIN",[]],["FOOTER",[]]]];

// OR
//
// ["BODY", [
//   ["HEADER", []],
//   ["MAIN", []],
//   ["FOOTER", []]]]

arrayToNodes(nodes);

// ======== WORK BACK ==========
/*
<html>
  <head>
    <title>Title</title>
  </head>
  <body>
    <header>
      Header
    </header>
    <main>
      <div>
        <section>
          <h1>H1</h1>
          <p>Hello</p>
          <p>World</p>
        </section>
      </div>
    </main>
  </body>
  <footer>
    <span class="emphasis>Notes</span>
  </footer>
</html>

<html>
  <head>
    <title>Title</title>
  </head>
  <body>
    <header>Header</header><main>
      <div>
        <section>
          <h1>H1</h1>
          <p>Hello</p>
          <p>World</p>
        </section>
      </div>
    </main><footer>Foot <span class="emphasis">Notes</span></footer>
  </body>
</html>
*/

// ======= HTML Images ========
/*
<!doctype html>
<html>
  <head>
    <title>HTML Imaging</title>
    <style type="text/css">
      .emphasis { font-weight: bold; }
      .light { color: gray; }
    </style>
  </head>
  <body>
    <header id="header">
    <h1 class="emphasis light">Dynamic Content</h1>
      Dynamic Content
      <p>Hello World!</p>
    </header>
  </body>
</html>

const node1 = document.createElement('header');
const node2 = document.createTextNode('Dynamic Content');

node1.innerHTML = '<p>Hello World!</p>';
document.body.appendChild(node1);
document.body.firstElementChild.insertBefore(node2, node1.firstElementChild);

const node3 = document.createElement('h1');
node3.appendChild(node2);
document.body.firstElementChild.insertBefore(node3, node1.firstElementChild);

node1.setAttribute('id', 'header');
node3.classList.add('emphasis');
node3.classList.add('light');

const node4 = document.createElement('style');
const css1 = ".emphasis { font-weight: bold; }";
const css2 = ".light { color: gray; }";
node4.type = 'text/css';\

node4.appendChild(document.createTextNode(css1));
node4.appendChild(document.createTextNode(css2));

document.head.appendChild(node4);


*/