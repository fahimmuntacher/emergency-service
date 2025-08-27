<h3>1) What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?</h3>
<p>
    Ans: 
    
        1) getElementById is use for call an element in HTML by using it's unique ID.
        
        2) getElementByClassName is used for call multipile element in HTML which using the same class name.
        
        3) querySelector is used for call the first element by it's selector name. Like(ID, tag, attribute, class). Means
           if call the (.class) selector it'll return the first element of class. 
           
        4) querySelectorAll returns the all elemnets when you call a selector name. if you call the (#ID) it'll return the all #ID from the HTML element.
</p>
<h3>2) How do you create and insert a new element into the DOM?</h3>

<p>
   1) Create New Element using <b>document.createElement(tagName)</b>
  
        const newCart = document.CreateElement("div")
</p>
<p>
  2) Then add innerHTML, attribute, text into this

    newCart.innerHTML = `
      <h1 style="color: red;">Hello World</h1>
    `
    newCart.setAttribute('class', 'my-class');
</p>
<p>
  <h2>
    3) Then Append the Element as the last child:


          document.body.append('NewCart')

          
  </h2>
</p>

<h3>3) What is Event Bubbling and how does it work?</h3>

<p>
   Ans: 

    When you clicked on something in the document it's consider as event triggered.
    Suppose you clicked on a button. The button click will be considered as event triggered. 
    This event first runs on the target element and then bubbles up it's parent elements. It's 
    continously climbing the DOM tree until it reaches to the target document object

<h4>It's works: </h4>

      1) Suppose you click on a Button; this is called an event.
      The browser's first job is to figure out exactly where this event happened.

      2) the event starts to "bubble up" through the DOM tree. 
      It will travel from the button to its immediate parent element,
      then to that parent's parent, and so on, all the way up to the root of the document.

      3)As the event bubbles up, it triggers any event listeners for the same event that are attached to those parent elements.
      This means that even though you only clicked the button, 
      the event handlers on all its parent elements will also fire in a specific order,
      from the deepest element to the root.

      
</p>


<h3>4) What is Event Delegation in JavaScript? Why is it useful?</h3>

<p>
   Ans: 

    Event delegation is a JS design pattern that takes advantage of event bubbling. 
    Instead of attaching an event listener to every single child element, 
    it's can be used a single event listener to a common parent element.

    When an event triggered on a child element, it "bubbles up" to the parent.
    The single event listener on the parent then catches the event and determines which child element was the original target. 
    It can access the original target element using the event.target property

    It' using for: Simplified Code for Dynamic Content, Improved Performance, Easier to Manage
</p>

<h3>5) What is the difference between preventDefault() and stopPropagation() methods?</h3>

<p>
   Ans: 

    event.preventDefault(): It's stop the default action of an event from happening.

    event.stopPropagation(): It's stop the event from bubbling up the DOM tree.
</p>





