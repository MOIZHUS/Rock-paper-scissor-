// console.log("moiz"); 
// //variable are intialize with let ,var, const 
// //bigint,symbol,number,string,null,undefined,boolean non primitive{objects :arrays,function}
// //object :-->
// const student= {
//     name:"moiz",
//     age :21,
//     marks:3.15,
//     isPass:true,
// }
// console.log(student);
// console.log(student["age"]);
// console.log(typeof(student.age));
// console.log(student.age);

// student.age=22;
// console.log(student.age);

// //chapter 2
// let a=6;
// console.log(a++);

// let a = 4;
// let b=4;
// let c=4;
// console.log(a+=4);

// console.log(a-=4);
// console.log(a%=4);
// console.log(b /=4);
// console.log(c**=4);
// console.log(c*=4);


// let a =5;
// let b="5";
//  console.log(a==b);
//  console.log(a===b);
//  console.log(a!=b);
//  console.log(a!==b);

//to check which number is greater 
//  let a=prompt("Write a value  a: ");
//  let b=prompt("Write a value b: ");
//  let c=prompt("Write a value c: ");

//  if (!isNaN(a)&&!isNaN(b)&&!isNaN(c)){
//     if(a>b && a>c){
//         console.log("a is greater");
//     }
//     if(b>a && b>c){
//         console.log("b is greater");
//     }
//     if(c>b&&c>a){
//         console.log("c is greater");
//     }

//  }
//  else{
//     console.log("is not a number");
//  }

// let age = prompt("what is your age: ");
// let result =age > 18 ? "adult" :"not adult";
// console.log(result);
// switch 

// for ( i=1;i<=3;i++){
//     let a = parseInt(prompt("enter a number"));
//     if (!isNaN(a)){
//         if (a%5==0){
//             console.log(a,"its a multiple of 5");
//             break;
//         }

//         else{
//             console.log(a,"not a multiple of 5");
//         }
//         }
//         else{
//             alert(a,"your input is not a number ")
//         }
// }
// let n = prompt("enter a number");
// let m=1;
//factorial program
// let m=1;
// for(i=1; i<=n ;i++){
//     m *=i;
// }
// console.log(m);

//fibonacci series
// let n1=0,n2=1,nextterm=0;
// let n=parseInt(prompt("enter the number for fibionacci sequence"));
// console.log(n1+"\n"+n2);
// for(i=1;i<=n;i++){
//     nextterm =n1+n2;
//     console.log(nextterm);

//     n1=n2;
//     n2=nextterm;

// }

// for (i=0;i<=100;i++){
//     if(i%2==1){
//         console.log(i);
//     }
// }


// //guess the number between 0 to 100
// let n =Math.floor(Math.random()*100)+1;
// console.log(n);
// for (i=1;i>=0;i++){
//     let m =prompt("guess the correct number");
//     if (m==n){
//         console.log("the number you guess is correct");
//         break;
//     }
//     else{
//         console.log("try again");
//     }
// }

//for in loop -->> strings,arrays
//for of loop -->> objects,arrays

//string  
// let name="moiz"
// console.log(name[0] );

//template literal
// let n =0;
// console.log(`this is a ${n}`);  $n is a expression which is called string interpolation

//strings are immutable
// let n ="moiz Hussain";
// let m= " is king of cs"
// console.log(n.toUpperCase());
// console.log(n.toLocaleUpperCase());
// console.log(n.trim());
// console.log(n.slice(3,10));
// console.log(n.slice(1));
// console.log(n.charAt(n[0]));
// console.log(n.concat(m).concat(n));
// console.log(n.replace("i","a"));
// console.log(n.replaceAll("i","a"));
// console.log(n.repeat(4));
// console.log(n.substring(5,12));


//Excercise

// let m = prompt("Enter your full name");
// console.log(`@${m}${m.length}`);




///Arrays
//arrays are mutable
// let weight=[100,90,80,70,60,75];
// let subject=["maths","science","urdu","english","computer"]
// let students={
//     key : "moiz",
//     marks: weight,
//     course: subject
// }
// console.log(students.key);
// for (i = 0 ; i< weight.length;i++){
//     console.log(students.course[i],students.marks[i]);
// }

// for (let marks of weight){
//     console.log(marks);
// }
// for(let key in students){
//     console.log(students[key],);
// }

//exercise
// let total =0;

// for (let sum of weight){
//     total = total + sum;
// }
// console.log(`the average of all marks is ${(total/weight.length).toFixed(2)}`);

// let price =[214,154,5646,1651,561,454,56,845,566];
//     for (i = 0;i<price.length;i++){
//     price[i]=price[i]-(price[i]*0.1);
//     console.log(price[i]);
//     }
//     price[9]=498;
//     console.log(price);


//array function push,pop,tostring,concat,unshift,shift

// let price=[70,52131,51231,5215,2155,2551,1515,5516,513];
// let title =["moiz","abdul","alanwar","ammi"]
// console.log(price);
// console.log(price.toString());
// console.log(price.at(1));
// console.log(price.join(" * "));
// console.log(price.pop());
// console.log(price);
// price.push(513);
// console.log(price);
// price.unshift();
// console.log(price);
// console.log(price.concat(title).toString());
// console.log(delete price[0]);
// console.log(price);
// console.log(delete price[1]);
// console.log(price);
// price.push(513);
// price.unshift(20);
// console.log(price);
// console.log(price);
// console.log(price.length);


//copwithin samjh na ayo
// console.log(price.copyWithin(1,0));
// console.log(price);
// let n =5 ;

//printing right pramid
// for(let i=0;i<n;i++){
//     for(let j=0;j<=i;j++){
//         process.stdout.write("*");
//     }
//     console.log("");
// }

// let n = 5;
// for (let i = 0; i < n; i++) {
//     let pattern = '';
//     for (let j = 0; j <= i; j++) {
//         pattern += '*';
//     }
//     console.log(pattern);
// }


//printing right reverse pyramid
// let n=5
// for (i=5;i>=1;i--){
//     let pattern="";
//     for(j=1;j<=i;j++){
//         pattern +="*";
//     } 
//     console.log(pattern);
// }

// let n= 5;
// for( let i = n ; i>=0;i-- ){
//     let x =1;
//     let z=" "
//     for(let j=i; j>=1;j-- ){
//          z+=`${x}`;
//         x++;
//     }
//     console.log(z);

// }

// let n= 5;
// for( let i = n ; i>=1;i-- ){
//     let x =1;
//     let z=" "
//     for(let j=1; j<=i;j++ ){
//          z+=`${x} `;
//         x++;
//     }
//     console.log(z);

// }


// let n = 5;
// let x ="";
// for (let i = 1; i<= n; i++){
//     x=" ";
//     for (let j =0;j<=n-i; j++){
//         x +="  ";
//     }
//     let y= 1;
//     for(let z =0;z<2 * i - 1;z++){
//         x+= y;
//         y++
//         x+=" "
//     }
//     console.log(`${x}`);
// }

// let n = 5;
// let x ="";
// for (let i = 1; i<= n; i++){
//     x=" ";
//     for (let j =0;j<=n-i; j++){
//         x +="  ";
//     }
//     let y= "*";
//     for(let z =0;z<2 * i - 1;z++){
//         x+= y;
//         x+=" "
//     }
//     console.log(`${x}`);
// }

// let n = 5;
// let x ="";
// for (let i = 1; i<= n; i++){
//     x=" ";
//     for (let j =0;j<=n-i; j++){
//         x +="  ";
//     }
//     let y= "*";
//     for(let z =0;z<i;z++){
//         x+= y;
//         x+=" "
//     }
//     console.log(`${x}`);
// }

// let n = 5;
// let x ="";
// for (let i = n; i>= 0; i--){
//     x=" ";
//     for (let j =0;j<=n-i; j++){
//         x +="  ";
//     }
//     let y= "*";
//     for(let z =0;z<i;z++){
//         x+= y;
//         x+=" "
//     }
//     console.log(`${x}`);
// }


// Given an array of numbers,
//  write a JavaScript program that uses a 
//  for loop to calculate the sum 
//  of all the numbers in the array.

// let a =[1,2,3,4,5,6,7,8,9,10]
// let b =0;
// for (let i =0 ; i<a.length;i++){
//     b+= a[i];
// }
// console.log(`the value of b is ${b}`);

//


//Write a JavaScript program that uses a for loop to count the number of vowels (a, e, i, o, u) in a given string

// let str= prompt("enter a string");
// let a = 0;

// for ( let i =0 ; i<str.length;i++){
//     if ( str[i]=="a" ||str[i]=="e" || str[i]=="i" || str[i]=="o" ||str[i]=="u"){
//         a += 1;
//     }


// }
// if (a == 0){
//     console.log("no vowels in the string ");
// }
// console.log(`no of vowels in string is ${a}`);


// //2nd way
// let str = prompt("Enter a string");
// let vowels = ['a', 'e', 'i', 'o', 'u'];
// let vowelCount = 0;

// for (let i = 0; i < str.length; i++) {
//     if (vowels.includes(str[i])) {
//         vowelCount++;
//     }
// }

// if (vowelCount === 0) {
//     console.log("No vowels in the string");
// } else {
//     console.log(`Number of vowels in the string is ${vowelCount}`);
// }


//Given an object with key-value pairs representing student names and their corresponding grades, write a JavaScript program that uses a for...in loop to calculate the average grade.
// const result ={
//     names: ["moiz ","abdul","ammi","bhai","bhabi","baby"],
//     grades:[ ,99,44,55,66,77]
// }
// let j =0;
// for( let x in result.grades ){
//         j+= result.grades[x];
// }
// let y = j/result.grades.length;
// if (y>=90 && y<=100){
//     console.log("avg grade A+");
// }
// else if(y>=80 && y<=90){
//     console.log("avg grade A");
// }
// else if(y>=70 && y<=80){
//     console.log("avg grade b+");
// }
// else if(y>=60 && y<=70){
//     console.log("avg grade b");
// }
// else if(y>=50 && y<=40){
//     console.log("avg grade C");
// }

// console.log(y);


//Write a JavaScript program that uses nested loops to create a pyramid pattern like the following:
//     *
//    * *
//   * * *
//  * * * *
// * * * * *
// let n = 5;
// for (let i = 1; i <= n; i++) {
//     let spaces = " ".repeat(n - i); // Generate spaces
//     let stars = "* ".repeat(i); // Generate stars
//     console.log(spaces + stars);
// }

// let n =10;
// for(let i = 1;i<=n;i++){
//     let x ="";
//     for(let j = 0 ; j<=n-i;j++){
//         x+=" "
//     }
//     let y="";
//     for(let z = 1;z<=i;z++){
//         y+="* "
//     }
//     console.log(`${x.concat(y)}`);
// }

// Write a JavaScript program that uses a while loop to find the first 10 prime numbers.29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 
// let a = 25;
// let i = 0;
// while (i<10){
//     let isPrime = true;
//     for (let x = 2; x<a;x++){
//         if (a%x==0){
//             isPrime= false;
//             break;
//         }
//         }
//         if(isPrime){
//             console.log(`its a prime number ${a}`);
//             i++;
//         }

//         a++;
//     }


// let id = "moiz";
// let pass="moiz";

// let i=1;
// do{
//     let id_check= prompt("enter your id ")
//     let pass_check=prompt("enter your password");
//     if (id == id_check && pass==pass_check){
//         console.log("sucessfully login");
//         break;
//     }
//     else{
//         console.log("its not right");
//     }
//     i++
// }while(i<=3);

// let arr =["a","e","i","o","u","A","E","I","O","U"]
// let vowelCount=(str)=>{
//     let count =0;
//     for(let i =1;i<=str.length;i++){
//         for (let x = 0; x<=arr.length;x++){
//             if (str[i]==arr[x]){
//                 count++;
//             }
//         }
//         // if (str[i]=="a"||str[i]=="e"||str[i]=="i"||str[i]=="o"||str[i]=="u"||str[i]=="A"||str[i]=="E"||str[i]=="I"||str[i]=="O"||str[i]=="U"){
//         //     count ++;
//         // }
//     }
//     console.log(`number of vowles in ${count}  `);
// }

// vowelCount("In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.");

//  // Define a function named vowel_count that takes a string parameter (str1)
//  function vowel_count(str1) {
//     // Define a string containing all the vowels in both lowercase and uppercase
//     var vowel_list = 'aeiouAEIOU';

//     // Initialize a variable vcount to count the number of vowels
//     var vcount = 0;

//     // Iterate through each character in the input string
//     for (var x = 0; x < str1.length; x++) {
//       // Check if the current character is a vowel by searching for it in the vowel_list
//       if (vowel_list.indexOf(str1[x]) !== -1) {
//         // If the character is a vowel, increment the vowel count
//         vcount += 1;
//       }
//     }

//     // Return the total count of vowels in the input string
//     return vcount;
//   }

//   // Log the result of calling vowel_count with the input string 'The quick brown fox' to the console
//   console.log(vowel_count("In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.")); 



// for each and map ar both same in nature but for each return the same array while map return the new array with modification
// let a =[1,2,3,,4,5,6];
// a.forEach((val,idx)=>{
//     let sq=val*val;
//     console.log(`sq of value at ${idx} is ${sq}`);
// })

// let start_num=10;
// let i =0;
// let arrnumber = [];
// let isPrimenumber=[];

// let primeindex=0;
// let nonprimeindex=0;
// while(i< 10){
//     let isPrime= true;
//     for (let j =2;j<start_num;j++){
//         if (start_num%j===0){
//             isPrime = false;
//             break;
//         }
//     }
//     if(isPrime){
//             isPrimenumber[primeindex]= start_num;
//         primeindex++;
//         i++;
//     }
//     else{
//         arrnumber[nonprimeindex]=start_num;
//         nonprimeindex++;
//         }
//         start_num++;
// }
// console.log(isPrimenumber);
// console.log(arrnumber);



// let numbers=[10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
//     20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
//     30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
//     40, 41, 42, 43];
//     let arr=0;
//     let isPrime= false;
// let primenumber= numbers.filter((num)=>{{
//     let isPrime= true;

//     for (let i=2;i<num;i++){
//         if (num%i==0){
//             isPrime=false
//             break;
//         }


//     }
//     if (isPrime){
//         arr=num;
//         return arr;
//     }

// }})    

// console.log(primenumber);



//make a function reduce to enter the sum of array
// let arr =[1,2,3,4,5];
// let sol;
//  let  reduce=(prev,curr)=>{
//         for (let i=prev;i<arr.length-1;i++){
//             let p;
//             let c;
//             p=arr[prev] < arr[prev] ?arr[prev]:sol;
//             c=arr[curr];
//              sol=p +c; 
//              curr++;
//         }
//         return sol;
//  }

// let result= reduce(0,1);
// console.log(result);

// function myReduce(array, reducer, initialValue) {
//     // Check if initialValue is provided
//     let accumulator = initialValue !== undefined ? initialValue : array[0];
//     let startIndex = initialValue !== undefined ? 0 : 1;

//     // Iterate over the array starting from startIndex
//     for (let i = startIndex; i < array.length; i++) {
//         accumulator = reducer(accumulator, array[i], i, array);
//     }

//     return accumulator;
// }
// const array = [1, 2, 3, 4, 5];

// const sum = myReduce(array, (prev, curr) => prev + curr, 0);
// console.log(sum); // Output: 15 (1 + 2 + 3 + 4 + 5)


// let arr = [1, 2, 3, 4, 5];
// let sol;

// let hell = (prev, curr) => {
//     sol = arr[prev] + arr[curr]; // Initialize sol with the sum of arr[prev] and arr[curr]

//     for (let i = curr + 1; i < arr.length; i++) {
//         sol += arr[i]; // Add arr[i] to sol for each subsequent element in the array
//     }

//     return sol;
// }

// let result = hell(0, 1);
// console.log(result);

//seeing ow reduce function works
//  let arr = [1,2,3,4,5,6];
//  let result= arr.reduce((prev,curr)=>{
//     return prev+curr;
//  })

//  console.log(result/arr.length);


// let students=[];
// function addStudent(name,age,subject){
//     let student ={
//         name:name ,
//         age:age ,
//         subjects: subject,
//     }
//     let idx = students.length;
//     students[idx]=student

// }

// addStudent("moiz",20,{maths:90,science:60,isl:90});
// addStudent("abdulqadir",17,{maths:90,science:60,isl:90});
// addStudent("bhai",25,{maths:90,science:60,isl:90});

// students.forEach((student,idx)=>{
//     console.log(student.name);
//     console.log(student.age);
//     Object.keys(student.subjects).forEach((subject)=>{
//         console.log(`${subject}:${student.subjects[subject]}`);
//     });

//     console.log("\n");
// })

// console.log(students[0].subjects.maths);

// let arrS = [["moiz", { marks: 89.79 }], ["ali", { marks: 80.3 }], ["burhan", { marks: 90 }], ["qadir", { marks: 95 }], ["asgar", { marks: 67 }], ["quaid", { marks: 45 }], ["hamza", { marks: 85 }], ["limca", { marks: 98.0 }], ["shi", { marks: 78 }], ["shack", { marks: 97 }]]
// arrS.forEach((element) => {
//     let result = element[1].marks>= 90 ? console.log(`${element[0]}: ${element[1].marks}`) : console.log("not greater than zero");
//     return result;
// });

// let arr=arrS.map((element) => {
//     return element[1].marks>= 90 ? `${element[0]}: ${element[1].marks}` : "not greater than zero";
// });

// console.log(arr);
// let arrS = [["moiz", { marks: 89.79 }], ["ali", { marks: 80.3 }], ["burhan", { marks: 90 }], ["qadir", { marks: 95 }], ["asgar", { marks: 67 }], ["quaid", { marks: 45 }], ["hamza", { marks: 85 }], ["limca", { marks: 98.0 }], ["shi", { marks: 78 }], ["shack", { marks: 97 }]]

// let z=0;
// for (let i = 0 ; i<= arrS.length-1;i++){
//      let result =arrS[i][1].marks>= 90 ? console.log(`${arrS[i][1].marks}`): console.log("less than 90");
//     console.log(result);
//    if(arrS[i][1].marks>= 90){
//     z++
//    }
// }
// console.log(" total this number of student have marks higher than 90",z);


// let size=5;
// let arr=[];
// // let z=1;
// for( let i =0; i<size;i++){
//     arr[i]=parseInt(prompt("enter a num"));
// }
// console.log(arr);
// let result = arr.reduce((prev,curr)=>{
//     return prev+curr;
// });
// console.log(result);
// let product = arr.reduce((prev,curr)=>{
//     return prev*curr;
// });
// console.log(product);


// var join = function(arr1, arr2) {
//     let arrsum=[];
//     let index =0;
//     let arr2idx=0
//     for(let i=0;i<=arr1.length-1;i++){
//         arrsum[index]=arr1[i];
//             index++;
//     }
//         for(let j=0;j<=arr2.length-1;j++){
//             arrsum[index]=arr2[j];
//             index++;
            
//     }
//     for ( let a =0 ;a<arrsum.length;a++){
//         for(let z=a+1;z<arrsum.length;z++)
//             if(arrsum[a].id == arrsum[z].id){
//                 for (let k = a;k<arrsum.length;k++){
//                     arrsum[k]=arrsum[k+1];
//                 }
//                 arrsum.length--;
//          }
//     }
//     console.log(arrsum);
// };
// let found=false;
// let joinarray=[];
// var join = function(arr1, arr2) {
//     for(let i = 0; i< arr1.length;i++){
//         for(let j=0;j<arr2.length;j++){
//         if (arr1[i].id === arr2[j].id){
//             // for(let k=i;k<arr1.length;k++){
//                 // arr1[k]=arr1[k+1];
//                 arr1.splice(i,1);
//                 found=true;
//                 break;
//             // }
//             // arr1.length--;
            
//         }
//     }
//     if (found) {
//         found = false; // Reset the found flag for the next iteration
//         i--; // Adjust the index since an element was removed
//     }
//     }
//     console.log(arr1.concat(arr2));
// };

// // join([{"id": 1,"x": 1},{"id": 2,"x": 9}],[{"id": 3,"x": 5}]);
// join([{"id": 1,"x": 2,"y": 3},{"id": 2,"x": 3,"y": 6}],[{"id": 2,"x": 10,"y": 20},{"id": 3,"x": 0,"y": 0}]);
// join([{"id": 1, "b": {"b": 94},"v": [4, 3], "y": 48}],[{"id": 1, "b": {"c": 84}, "v": [1, 3]}]);