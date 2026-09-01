// this file contains notes and example code of top~(the odin project)'s problem solving lesson.
// https://www.theodinproject.com/lessons/foundations-problem-solving

// Problem solving is the core thing software developers do. The programming languages and tools they use are secondary to this fundamental skill.

// Problem solving is writing an original program that performs a particular set of tasks and meets all stated constraints. "Think Like A Programmer by V. Anton"

// Q: what is best way to improve your problem solving ability?
// A: The best way to improve your problem solving ability is by building experience by making lots and lots of programs. The more practice you have the better you’ll be prepared to solve real world problems.
console.log('The best way to improve your problem solving ability is by building experience by making lots and lots of programs. The more practice you have the better you’ll be prepared to solve real world problems.'); // keep in mind.

// Understand the problem
// The first step to solving a problem is understanding exactly what the problem is.

// To gain clarity and understanding of the problem, write it down on paper, reword it in plain English until it makes sense to you, and draw diagrams if that helps. When you can explain the problem to someone else in plain English, you understand it.

// Plan
// Some of the questions you should answer at this stage of the process:

// Does your program have a user interface? What will it look like? What functionality will the interface have? Sketch this out on paper.
// What inputs will your program have? Will the user enter data or will you get input from somewhere else?
// What’s the desired output?
// Given your inputs, what are the steps necessary to return the desired output?

// The last question is where you will write out an algorithm to solve the problem. You can think of an algorithm as a recipe for solving a particular problem. It defines the steps that need to be taken by the computer to solve a problem in pseudocode

// Pseudocode.
// Pseudocode is writing out the logic for your program in natural language instead of code. It helps you slow down and think through the steps your program will have to go through to solve the problem.

// An example of pseudocode 
// When the user inputs a number
// Initialize a counter variable and set its value to zero
// While counter is smaller than user inputted number increment the counter by one
// Print the value of the counter variable

// Divide and conquer
// From your planning, you should have identified some subproblems of the big problem you’re solving. Each of the steps in the algorithm we wrote out in the last section are subproblems. Pick the smallest or simplest one and start there with coding.

// Decomposing problems into smaller and easier to solve subproblems is a much better approach.

// In short, break the big problem down and solve each of the smaller problems until you’ve solved the big problem.

// Solving Fizz Buzz
// To demonstrate this workflow in action, let’s solve Fizz Buzz
// https://en.wikipedia.org/wiki/Fizz_buzz

// Understanding the problem
// Write a program that takes a user’s input and prints the numbers from one to the number the user entered. However, for multiples of three print Fizz instead of the number and for the multiples of five print Buzz. For numbers which are multiples of both three and five print FizzBuzz.

// Planning
// Does your program have an interface? What will it look like? Our FizzBuzz solution will be a browser console program, so we don’t need an interface. The only user interaction will be allowing users to enter a number.

// What inputs will your program have? Will the user enter data or will you get input from somewhere else? The user will enter a number from a prompt (popup box).

// What’s the desired output? The desired output is a list of numbers from 1 to the number the user entered. But each number that is divisible by 3 will output Fizz, each number that is divisible by 5 will output Buzz and each number that is divisible by both 3 and 5 will output FizzBuzz.

// Writing the pseudocode
// When a user inputs a number
// Loop from 1 to the entered number
// If the current number is divisible by 3 then print "Fizz"
// If the current number is divisible by 5 then print "Buzz"
// If the current number is divisible by 3 and 5 then print "FizzBuzz"
// Otherwise print the current number


// Dividing and conquering
// As we can see from the algorithm we developed, the first subproblem we can solve is getting input from the user. So let’s start there and verify it works by printing the entered number.

// With JavaScript, we’ll use the “prompt” method.
// let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));
// Using the parseInt function
// We wrapped the prompt call in a parseInt function so that a number is returned from the user’s input.

// for loops
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for

// let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

// for (let i = 1; i <= answer; i++) {
//   console.log(i);
// }
// Starting the loop from 1
// Most of the time, programmers find themselves looping from 0. Due to the needs of our program, we’re starting from 1.

let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

for (let i = 1; i <= answer; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// The program is now complete!

// Assignments.....
// read and watch following articles and Video 

// https://www.freecodecamp.org/news/how-to-think-like-a-programmer-lessons-in-problem-solving-d1d8bf1de7d2/

// https://www.youtube.com/watch?v=azcrPFhaY9k

// https://builtin.com/data-science/pseudocode


// moral of the lesson is :
// before programming or coding, you should write down the problem and understand it verywell, and make diagram or whatever suits you to be able to understand explain the problem
// then you should plan how you gonna solve this problem,
//then you should pseudocode the problem in plain english or in your native language you understand better
// divide and rule (British india) technique 
// divide the problem in subproblems start solving it like connecting pieces, 

// finall you start coding and solve the problem..