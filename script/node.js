let subjects = ['Python', 'C++', 'VB.Net', 'Javascript', 'Assembly'];
// let lastElement = subjects.find[4]
console.log(subjects.pop());
// subjects.pop();
// console.log(subjects.pop(2));

let output = Math.floor(subjects.length /2 );
// console.log(output);
console.log(subjects[output]);

if ((subjects.length%2)==0) {
    console.log(subjects[output-1]+' '+subjects[output])
}else{
    console.log(subjects[output]) 
}

// const myArray = ['apple', 'banana', 'orange', 'pear', 'watermelon'];
// const middleValue = findMiddleValue(myArray);
// console.log(middleValue); // Output: 'orange'