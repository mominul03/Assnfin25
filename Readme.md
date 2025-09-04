Questions and Answers

1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans:
    getElementById-> Finding one element using ID. this ID returns the element that we want to get.And ID of each element is totally different from one another.


    getElementsByClassName-> By using the class name we get collection of elements or a list of elements and we have loop through it to get the elements.



    querySelector / querySelectorAll-> The querySelector() finds and gives us the first item of a specific class . But on the other hand , The querySelectorAll() finds and gives us the information about all the elements under the class.





2.How do you create and insert a new element into the DOM?

Ans: In DOM, we have to create the element, set the contents and add it to the page.

// 1.Creating a new element
const newelement = document.createElement("div");

// 2. Setting the contents
newelement.textContent = "JS!";

// 3. Put it on the page 
document.body.appendChild(newelement);
To add it onto the page we have place it on top of the </body> tag





3.What is Event Bubbling and how does it work?

Ans: Inside a div container which is parent , there is also child elements. When we use click event listener , the event inside child elements happens firstly then it bubbles up to the parent and so on to the whole page.This is called event bubbling. Child event happenning first , then it goes on top to the parent  or bubbles up to the parent box to do event works if exists and finally to the whole page.







4.What is Event Delegation in JavaScript? Why is it useful?

Ans:To have fewer event listeners for every child elements we use Event Delegation. In this procedure, we fix the parent to work solely on the event listeners. What happens here is that when click event listener happens for child elements it bubbles up to the parent and the parent handles it and responds it.When there is multiple buttons or items Event Delegation works best.






5.What is the difference between preventDefault() and stopPropagation() methods?

Ans:preventDefault() -> to stop browsers default behaviour we use this method. Browsers has their own functionality and built in system. But we don't always want to focus on browsers only because sometimes we want to use our own JS logic to change some of its working principle so thats why we use preventDefault() .



stopPropagation()-> We use this to control which elements we want to respond. Logically the child elements event listening will work first and it bubbles up to parent but we dont want parents event listening as we think that should be unnecessary. Using this method it avoids going to the parent box.And as a result we can make the events respond according to needs.
