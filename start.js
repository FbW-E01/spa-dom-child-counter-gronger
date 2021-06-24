
// ## 1.


// * Get the children of the element with id `wrapper` and print them to the console as a list.

const targetWrapper = document.querySelector("#wrapper");

let wrapperList = document.createElement("ol");

const childrenOfWrapper = targetWrapper.children;

console.log(childrenOfWrapper);

// wrapperList.appendChild(childrenOfWrapper);
// console.log(wrapperList);
// couldnt do it as a list..
// console.log(wrapperList.appendChild(childrenOfWrapper));


/****** * * Iterate over them and print their children to the console, as well as how many they are. *****
***********/


// childrenOfWrapper.forEach(e => e.children && e.children.length);


// for (let i = 0; i < childrenOfWrapper.length; i)



console.log(childrenOfWrapper);
console.log(childrenOfWrapper.length);


// ## 2.

// * Next, we need to find which from the children of the element with id `wrapper` has the highest number of classes.

//     For example, if one element has 2 classes and another has 3 classes - the one with 3 classes has the highest number of classes.

//     Let's write a function that returns an object that contains the element with the most classes and the total number of classes.



function findElementWithMostClasses() {

    let biggestAmountOfClasses = 0;

    for (let i = 0; i < childrenOfWrapper.length; i++) {
    console.log(childrenOfWrapper[i]);
    console.log(childrenOfWrapper[i].classList.length);

        if (childrenOfWrapper[i].classList.length > biggestAmountOfClasses) {
            biggestAmountOfClasses += childrenOfWrapper[i].classList.length;
            return biggestAmountOfClasses;
        }
}
}

console.log("largest amount of classes: " + findElementWithMostClasses());







