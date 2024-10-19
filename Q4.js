

// Question 4. Check the conditions

// You are given two numbers A�and B�. You need to do the following checks:
// 1. if both are divisible by 10 console true.
// 2. if both are not divisible by 10 console false.
// 3. if one of them only is divisible by 10 console true.
// Use operator to do this.
// Note: You have to complete Check function. No need to take any input.
// Input Format
// The first line contains two natural numbers A�and B�.
// Output Format
// Return the required result.
// Constraints
// 1≤A,B≤100001≤�,�≤10000
// Example
// Sample Input
// 12 20
// Sample Output
// true



// function is_divisible(A , B){
//     if(A%10==0 && B%10==0){
//         console.log(true);
//     }
//     else if(A%10==0 || B%10==0){
//         console.log(true);   
//     }
//     else{
//         console.log(false);
//     }
// }



// is_divisible(23 , 40)
// is_divisible(23 , 31)
// is_divisible(20 , 50)

// Another method 

let A = 23
let B = 43

if (A % 10 == 0 && B % 10 == 0) {
    console.log(true);
}
else if (A % 10 == 0 || B % 10 == 0) {
    console.log(true);
}
else {
    console.log(false);
}




