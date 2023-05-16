let subjects = ['Python', 'C++', 'VB.Net', 'Javascript', 'Assembly'];
console.log(subjects.pop());

let output = Math.floor(subjects.length /2 );
console.log(subjects[output]);

if ((subjects.length%2)==0) {
    console.log(subjects[output-1]+' '+subjects[output])
}else{
    console.log(subjects[output]) 
}
