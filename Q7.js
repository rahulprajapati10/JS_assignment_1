

// Question 7. Find the remainder

// You are provided with two numbers A�and B�where A�as divisor and B�as dividend.Your
// task is find the remainder.
// Note: You have to complete Find_the_remainder function. No need to take any input.
// Input Format
// The first line of the input contains two integers A�and B�.
// Output Format
// Return the result after finding the remainder.
// Constraints
// 1≤A,B≤10001≤�,�≤1000
// Example
// Sample Input
// 2 9
// Sample Output
// 1


function find_the_remainder(A , B){
    res = B%A
    console.log(res);
    return res
}

find_the_remainder(2 , 9)