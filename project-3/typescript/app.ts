// Q1 Write a simple JavaScript program to print expected Output using following array.
//  Sample array : myColor = ["Red", "Green", "White", "Black"];
// Red,Green,White,Black
// Red+Green+White+Black
// Red,Green,White
// Red
// Green,White
// Red,Green,White,Black,orange 

let myColor: string[] = ["Red", "Green", "White", "Black"];

document.write("<h2>Q1 Write a simple JavaScript program to print expected Output using following array.<br><h3>Red,Green,White,Black<br>Red+Green+White+Black<br>Red,Green,White<br>Red<br>Green,White<br>Red,Green,White,Black,orange </h3></h2>")

document.write("<h3>OUTPUT</h3>");

document.write(myColor.join(",") + "<br><br>");

document.write(myColor.join("+") + "<br><br>");

document.write(myColor.slice(0, 3).join(",") + "<br><br>");

document.write(myColor[0] + "<br><br>");     

document.write(myColor.slice(1, 3).join(",") + "<br><br>");

myColor.push("orange");
document.write(myColor.join(",")+"<hr>");



// Q2 Write a JavaScript program to get sum of all array element using for loop and foreach loop.

document.write("<h2>Q2 Write a JavaScript program to get sum of all array element using for loop and foreach loop</h2>")

 

let num2: number[] = [10, 20, 30, 40, 50];
let sum2: number = 0;

document.write("the array is = "+num2);
document.write("<h3>OUTPUT</h3>"); 

for (let i: number = 0; i < num2.length; i++) {
    sum2 = sum2 + num2[i];
}

document.write("the sum all array = " + sum2 + "<br><hr>");



// Q3 Write a JavaScript program to print a maximum and minimum value of given array.(using function and logic)

document.write("<h2>Q3 Write a JavaScript program to print a maximum and minimum value of given array.(using function and logic)</h2>")

let num3: number[] = [10, 25, 5, 40, 15];

document.write("the array is = "+num3+"<br>");
document.write("<h3>OUTPUT</h3>"); 

function Maxmin3(num3: number[]): void {

    let max: number = num3[0];
    let min: number = num3[0];

    for (let i: number = 1; i < num3.length; i++) {

        if (num3[i] > max) {
            max = num3[i];
        }

        if (num3[i] < min) {
            min = num3[i];
        }
    }

    document.write("Maximum value = " + max + "<br>");
    document.write("Minimum value = " + min + "<br><hr>");
}

Maxmin3(num3);



// Q4 Write a JavaScript program for convert all array element in ASCII value.

document.write("<h2>Q4 Write a JavaScript program for convert all array element in ASCII value.</h2>")

let num4: string[] = ["A", "B", "C", "D", "E"];

document.write("the array is = "+num4+"<br>");
document.write("<h3>OUTPUT</h3>"); 

for (let i: number = 0; i < num4.length; i++) {
    let ascii: number = num4[i].charCodeAt(0);
    document.write(num4[i] + " = " + ascii + "<br>");
}

document.write("<hr>");



// Q5 Write a JavaScript program for remove negative values using the filter array function.

document.write("<h2> Q5 Write a JavaScript program for remove negative values using the filter array function.</h2>");

let num5:number[] =  [-23,-20,-17, -12, -5, 0, 1, 5, 12, 19, 20];

document.write("the array is = " + num5 + "<br>");
document.write("<h3>OUTPUT</h3>"); 

let result:number[] = num5.filter(function(value: number) {
    return value >= 0;
});

document.write("After Removing Negative Values = " + result + "<hr>");



// Q6 Write a JavaScript program using array map() method and return the square of array element.

document.write("<h2>Q6 Write a JavaScript program using array map() method and return the square of array element.</h2>");

let num6: number[] =  [2, 5, 6, 3, 8, 9];


document.write("the array is = " + num6 );
document.write("<h3>OUTPUT</h3>"); 

let square: number[] = num6.map(function(value: number) {
    return value * value;
});

document.write("Square of Array = " + square + "<hr>");



// Q7 Write a JavaScript program for sort array in ascending descending.

document.write("<h2>Q7 Write a JavaScript program for sort array in ascending descending.</h2>");

let num7: number[] = [23,20,17, 12,5, 0, 1, 5, 12, 19, 20];

document.write("the array is = "+ num7);
document.write("<h3>OUTPUT</h3>"); 

// Ascending Order
let ascending: number[] = num7.slice().sort(function(a: number, b: number) {
    return a - b;
});

document.write("Ascending = " + ascending + "<br>");

// Descending Order
let descending: number[] = num7.slice().sort(function(a: number, b: number) {
    return b - a;
});

document.write("Descending = " + descending + "<hr>");



// Q8  Write a JavaScript program which filters out any string which is less than 8 characters. 

document.write("<h2>Q8  Write a JavaScript program which filters out any string which is less than 8 characters.</h2>");

let num8: string[] = ['Python', 'Javascript', 'Go', 'Java', 'PHP', 'Ruby'];

document.write("the array is = " + num8 + "<br>");
document.write("<h3>OUTPUT</h3>"); 

let result1: string[] = num8.filter(function(value: string) {
    return value.length >= 8;
});


document.write("Filtered Array = " + result1  + "<hr>");



// Q9  write a JavaScript program to  to print expected output for following string.
// x = "airplane";    output:- r
// x = "oxoxoxox";   output:- "oXoXoXoX"
// x = "A New Java Book";   
// output:-  "a new java book" , "A NEW JAVA BOOK"

document.write("<h2> Q9  write a JavaScript program to  to print expected output for following string.<h3>x = airplane;    output:- r<br>x = oxoxoxox;   output:- oXoXoXoX<br>x = A New Java Book;<br>output:-  a new java book , A NEW JAVA BOOK</h3></h2>");

let x1: string = "airplane";

document.write("the array is = "+x1);
document.write("<h3>OUTPUT</h3>");
document.write(x1.charAt(2) +"<br><hr><br>");


let x2: string = "oxoxoxox";
let result9: string = x2.replace(/x/g, "X");

document.write("the array is = "+x2);
document.write("<h3>OUTPUT</h3>");
document.write(result9 + "<br><hr><br>");


let x3: string = "A New Java Book";

document.write("the array is = "+x3);
document.write("<h3>OUTPUT</h3>");
document.write(x3.toLowerCase() + "<br>");

document.write(x3.toUpperCase()+"<hr>");



// Q10  write a JavaScript program for array reverse

document.write("<h2>Q10  write a JavaScript program for array reverse</h2>");

let num10: number[] = [10, 20, 30, 40, 50];
document.write("the array is = "+num10);
document.write("<h3>OUTPUT</h3>");

let reverse10: number[] = num10.reverse();

document.write("the Reverse Array is = " + reverse10 +"<hr>");



// Q11 write a JavaScript program for check value is found or not?

document.write("<h2>Q11 write a JavaScript program for check value is found or not?</h2>");

let num11: number[] = [10, 20, 30, 40, 50];
document.write("the array is = "+num11+"<br>");

let value11: number = 60;
document.write("the value is = "+value11);
document.write("<h3>OUTPUT</h3>");

if (num11.includes(value11)) {
    document.write(value11 + " is found in the array"+ "<hr>");
} else {
    document.write(value11 + " is not found in the array"+ "<hr>");
}



// Q12 write a JavaScript program for print your name and write the no of total character.

document.write("<h2>Q12 write a JavaScript program for print your name and write the no of total character.</h2>");

let name12: string = "jay";

document.write("My Name is = " + name12);
document.write("<h3>OUTPUT</h3>");
document.write("Total Characters: " + name12.length+ "<hr>");



// Q13  write a JavaScript program given this output using replace concept.
//Input : - "I often take a walk with my dog in the evening. His dog follows him everywhere. I don't feed my dog in the morning";
//Output:-  "I often take a walk with my cat in the evening. His cat follows him everywhere. I don't feed my cat in the morning"

document.write("<h2>Q13  write a JavaScript program given this output using replace concept.</h2>");

let str: string = "I often take a walk with my dog in the evening. His dog follows him everywhere. I don't feed my dog in the morning";

let result13: string = str.replace(/dog/g, "cat");

document.write("the input is =  " + str );
document.write("<h3>OUTPUT</h3>");
document.write("the Output is = " + result13+ "<hr>");



// Q14  write a JavaScript program convert string to array.
//Input :- "Hire the top 1% freelance developers";
//Output :- ["Hire", "the", "top", "1%"] 

document.write("<h2>Q14  write a JavaScript program convert string to array.</h2>");

let str14: string = "Hire the top 1% freelance developers";

let arr14: string[] = str14.split(" ");

document.write("the input is = " + str14 );
document.write("<h3>OUTPUT</h3>");
document.write("the output is = " + JSON.stringify(arr14)+ "<hr>");



// Q15 write a JavaScript program convert for array to string.
//Input:- ['5', 32, 'Daniel'];
//Output: 5,32,Daniel

document.write("<h2>Q15 write a JavaScript program convert for array to string.</h2>");

let num15: (string | number)[] = ['5', 32, 'Daniel'];

document.write("the input is = " + num15 );
document.write("<h3>OUTPUT</h3>");

let str15: string = num15.toString();

document.write("the output is = " + str15+"<hr><br><br><br>");





document.write("<center><h1>THANK YOU</h1></center><br><br><br>");

   



