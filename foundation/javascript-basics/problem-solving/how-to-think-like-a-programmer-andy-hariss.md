# How to Think Like a Programmer

**Presentation:** Andy Harris — *How To Think Like A Programmer*  
**Video:** https://www.youtube.com/watch?v=azcrPFhaY9k

---

## Overview

This presentation explains that learning to program is less about mastering specific programming languages and more about developing the **programmer's mindset**.

Programming is essentially the art of explaining complex logic to a computer that is extremely literal. The programmer must take an idea, break it into precise steps, and communicate those steps in a form the computer can execute.

The central lesson is:

> **Programming is not primarily about syntax. It is about problem-solving, algorithms, logic, and communication.**

---

# 1. Core Philosophy

## Programming ≠ Language Mastery

Programming is about much more than memorizing the syntax of JavaScript, Python, C++, Java, or any other language.

A programming language is a **tool**.

The transferable skills are:

- Problem-solving
- Logical thinking
- Algorithm design
- Decomposition
- Debugging
- Understanding data
- Communicating intent clearly

Once the underlying programming concepts are understood, learning another language becomes much easier because the fundamental ideas remain similar.

---

## The "Stupid Computer" Mental Model

One of the presentation's memorable ideas is that the computer is "mind-numbingly stupid."

This does **not** mean computers are weak.

Computers are extremely powerful and can execute enormous numbers of instructions very quickly.

The point is that a computer:

- Does not understand what you *meant*
- Does not automatically fill in missing steps
- Does not use common sense
- Does exactly what the instructions tell it to do

Therefore, the programmer's responsibility is to provide **precise and unambiguous instructions**.

### Mental Model

Think of the computer as:

> **Extremely capable, but extremely literal.**

If your instructions are wrong, incomplete, or based on a false assumption, the computer will faithfully execute the wrong instructions.

---

# 2. Algorithms Over Code

One of the most important beginner lessons is:

> **Do not rush into writing code.**

Before writing syntax, determine the algorithm.

An **algorithm** is a step-by-step procedure for solving a problem.

For example, suppose the problem is:

> Find the largest number in a list.

Before writing JavaScript, describe the solution:

```text
1. Start with the first number as the largest.
2. Look at the next number.
3. Compare it with the current largest number.
4. If it is larger, make it the new largest number.
5. Repeat until every number has been checked.
6. Return the largest number.
```

The algorithm exists independently of the programming language.

You could later express the same algorithm in:

- JavaScript
- Python
- Java
- C++
- Ruby
- C#
- Go

The syntax changes.

The underlying reasoning does not.

---

# 3. Understand the Problem Before Solving It

If you do not understand the problem, you cannot reliably write a solution.

Before touching the keyboard, ask:

- What exactly is the problem?
- What information do I have?
- What information do I need?
- What should the program produce?
- What rules must be followed?
- What are the constraints?
- What are the edge cases?
- What assumptions am I making?

A common beginner mistake is immediately asking:

```text
"How do I write the loop?"
```

A better question is:

```text
"What am I actually trying to accomplish?"
```

Then:

```text
"What steps would accomplish it?"
```

Only after that should you think about syntax.

---

# 4. The Seven or Eight Fundamental Concepts

The presentation emphasizes that despite the enormous number of programming languages, much of programming can be reduced to a relatively small collection of fundamental concepts.

Examples include:

- Variables
- Data
- Input
- Output
- Conditions
- Loops
- Functions
- Basic data structures
- Operators

Different languages provide different syntax for expressing these ideas.

For example:

### JavaScript

```js
if (age >= 18) {
    console.log("Adult");
}
```

### Python

```python
if age >= 18:
    print("Adult")
```

The syntax is different, but the underlying concept is the same:

```text
IF a condition is true
    perform an action
```

This is why understanding programming concepts is more valuable than simply memorizing syntax.

---

# 5. The Beginner Problem-Solving Process

The presentation suggests a practical process for approaching programming problems.

```text
Problem
   ↓
Understand the problem
   ↓
Plan the solution
   ↓
Write the algorithm in plain English
   ↓
Convert the algorithm into comments
   ↓
Implement the code
   ↓
Test
   ↓
Debug
   ↓
Improve
```

Each stage has a purpose.

---

# 6. Step 1 — Define the Problem

Before coding, clearly define what you are trying to solve.

Determine:

```text
Input
Output
Rules
Constraints
Edge cases
```

For example:

```text
Problem:
Determine whether a user is old enough to enter.

Input:
User's age

Rule:
Age must be 18 or greater.

Output:
"Allowed" or "Not allowed"
```

This gives you something concrete to solve.

---

# 7. Step 2 — Plan Without Code

Write the solution in plain English.

For example:

```text
1. Get the user's age.
2. Compare the age with 18.
3. If the age is 18 or greater, allow entry.
4. Otherwise, reject entry.
```

At this point, you should not care whether the final implementation uses:

```js
if
```

or:

```js
?
```

or some other language construct.

You are solving the **problem**, not the syntax exercise.

---

# 8. Step 3 — Convert the Algorithm Into Comments

Once the algorithm is clear, turn the steps into comments in your editor.

```js
// Get the user's age

// Check whether the age is at least 18

// If the age is 18 or greater, allow entry

// Otherwise, reject entry
```

Now the structure of the program already exists.

The remaining job is to replace each comment with code.

This is a useful technique because it separates:

**Thinking**

from

**Typing syntax.**

---

# 9. Step 4 — Implement One Step at a Time

Now write the code necessary to accomplish each step.

Do not try to write the entire program mentally at once.

Take one step:

```text
Comment
   ↓
Code
```

Then move to the next.

This reduces cognitive load and makes debugging easier.

---

# 10. Step 5 — Test

Once the code is written, test it.

Do not test only the obvious case.

Think about:

- Normal inputs
- Minimum values
- Maximum values
- Empty input
- Invalid input
- Unexpected input
- Boundary conditions

For example, if the rule is:

```text
age >= 18
```

Testing only:

```text
20
```

is not enough.

Also consider:

```text
17
18
19
0
-1
"18"
null
undefined
```

The exact relevant cases depend on the program.

---

# 11. Step 6 — Debug

Debugging is not an unusual event in programming.

It is part of programming.

A normal programming cycle looks like:

```text
Write code
   ↓
Run code
   ↓
Something fails
   ↓
Investigate
   ↓
Find the cause
   ↓
Fix it
   ↓
Run again
```

This process can happen repeatedly.

Even experienced programmers debug constantly.

---

# 12. Embrace Failure

A major beginner mistake is interpreting an error as:

> "I'm bad at programming."

A better interpretation is:

> "The program has given me information about something I misunderstood."

An error may reveal:

- A syntax mistake
- A logical mistake
- A wrong assumption
- Incorrect data
- An incorrect algorithm
- A misunderstanding of an API
- An edge case you did not consider

Failure is therefore part of the learning process.

---

# 13. Don't Blame the Programming Language

When something behaves unexpectedly, avoid immediately thinking:

```text
"JavaScript is broken."
```

or:

```text
"Python is weird."
```

Instead ask:

```text
What did I expect to happen?

What actually happened?

What assumption did I make?

Where does my expectation differ from reality?
```

This is the beginning of proper debugging.

---

# 14. Debugging as a Reasoning Process

Good debugging is not random experimentation.

Do not simply change things until the error disappears.

Instead:

```text
1. Observe the problem.
2. Identify what you expected.
3. Identify what actually happened.
4. Form a hypothesis.
5. Test the hypothesis.
6. Find the root cause.
7. Fix the cause.
8. Test again.
```

For example:

```text
Expected:
The function should return 10.

Actual:
The function returns 5.

Hypothesis:
The loop is stopping too early.

Test:
Inspect the loop condition.

Result:
The condition is incorrect.

Fix:
Correct the condition and test again.
```

This turns debugging into a form of scientific reasoning.

---

# 15. Read Error Messages

Error messages are not just obstacles.

They are clues.

When an error occurs, examine:

- Error type
- Error message
- File name
- Line number
- Function name
- Relevant values
- Stack trace when available

Instead of thinking:

```text
"How do I get rid of this error?"
```

think:

```text
"What is this error telling me?"
```

The goal is not merely to silence the error.

The goal is to understand **why it happened**.

---

# 16. Break Large Problems Into Smaller Problems

Large problems are usually not solved as one giant problem.

They are decomposed into smaller problems.

For example:

```text
Application
├── User interface
├── User input
├── Validation
├── Business logic
├── Data processing
├── Storage
└── Output
```

Each part can then be divided again.

The general rule is:

> **If a problem feels too complicated, make the problem smaller.**

This is one of the most important skills a programmer develops.

---

# 17. Programming as Communication

Programming is a form of communication.

You are communicating your intent to:

1. The computer
2. Other programmers
3. Your future self

The computer needs precise instructions.

Humans need readable structure.

Therefore, good programming is not merely about making code work.

It is also about making the intent understandable.

---

# 18. Naming Matters

Compare:

```js
const x = 20;
```

with:

```js
const userAge = 20;
```

Both can work.

But the second communicates intent much more clearly.

Good names reduce the need for comments.

Prefer names that explain what a value represents.

Examples:

```js
const userAge = 20;
const totalPrice = 500;
const isLoggedIn = true;
const completedTasks = 12;
```

rather than:

```js
const x = 20;
const a = 500;
const flag = true;
const n = 12;
```

---

# 19. Comments

Comments can be useful for:

- Explaining why something is done
- Explaining non-obvious decisions
- Documenting important constraints
- Describing complicated logic
- Planning an algorithm

However, comments should not simply repeat obvious code.

For example:

```js
// Increment count by 1
count++;
```

This comment adds almost nothing.

The code already explains itself.

A better comment explains **why**:

```js
// Keep the retry count below the API limit.
retryCount++;
```

---

# 20. Why Python?

Andy Harris advocates Python for beginners because it has relatively little syntactic overhead.

This allows beginners to focus more heavily on:

- Logic
- Algorithms
- Problem-solving
- Program structure

rather than fighting unnecessary syntax or setup rituals.

The deeper lesson is not:

> Python is the only correct language for beginners.

The deeper lesson is:

> **Beginners should minimize distractions and focus on learning programming concepts.**

Once the concepts are understood, learning another language becomes much easier.

---

# 21. Language Syntax vs Programming Concepts

Consider these two statements:

```text
Learning syntax:
"I need to remember how JavaScript's for loop is written."
```

versus:

```text
Learning the concept:
"I need to repeat an operation for every item in this collection."
```

The second idea is transferable.

The syntax is language-specific.

This distinction becomes increasingly important as you learn more technologies.

---

# 22. A Better Mental Model for Learning JavaScript

When learning JavaScript, do not treat every new syntax feature as an isolated thing to memorize.

Instead ask:

```text
What programming concept does this represent?
Why does it exist?
What problem does it solve?
How does it interact with other concepts?
```

For example:

### `if`

Concept:

```text
Conditional execution
```

### `for`

Concept:

```text
Repetition / iteration
```

### Function

Concept:

```text
Reusable behavior / abstraction
```

### Array

Concept:

```text
Collection of values
```

### Object

Concept:

```text
Structured data / related properties
```

This way of thinking makes the language much easier to understand.

---

# 23. My Perspective: The Most Important Lesson

The strongest lesson from this presentation is not actually:

> "Write pseudocode first."

That is useful, but the deeper lesson is the **separation between problem-solving and implementation**.

A beginner often sees a problem and immediately asks:

```text
"What JavaScript code do I need?"
```

A stronger programmer asks:

```text
"What is the actual problem?

What information do I have?

What result do I need?

What steps transform the input into that result?"
```

Only then:

```text
"How do I express those steps in JavaScript?"
```

That mental separation is extremely powerful.

---

# 24. My Perspective: Don't Become a Syntax Typist

It is possible to learn a lot of JavaScript syntax without becoming good at programming.

You can memorize:

```js
for
while
if
else
switch
function
map
filter
reduce
```

and still freeze when someone gives you a new problem.

Why?

Because knowing the tools does not automatically teach you **when or why to use them**.

Programming ability develops when you repeatedly practice:

```text
Problem
→ Reasoning
→ Algorithm
→ Implementation
→ Testing
→ Debugging
```

The syntax is only one part of the process.

---

# 25. My Perspective: Problem Solving Is a Muscle

Problem-solving ability improves through repetition.

You should expect to struggle.

When you are stuck on a programming exercise, that uncomfortable period is often where the learning is happening.

The important distinction is between:

```text
"I'm stuck, therefore I can't do it."
```

and:

```text
"I'm stuck, therefore I haven't found the right approach yet."
```

The second mindset is much more productive.

---

# 26. My Perspective: Don't Immediately Look at the Solution

When practicing programming problems, avoid immediately searching for the final solution.

Instead:

```text
1. Understand the problem.
2. Try an approach.
3. Test it.
4. Find where it fails.
5. Think of another approach.
6. Use documentation when necessary.
7. Only look at a complete solution after making a genuine attempt.
8. Study the solution afterward.
9. Close it and try to reproduce the idea yourself.
```

The goal is not to collect solutions.

The goal is to develop the ability to **generate solutions**.

---

# 27. My Perspective: Learn to Get Unstuck

One of the most valuable programming skills is not knowing everything.

It is knowing **how to find what you don't know**.

When stuck, ask:

```text
What exactly am I stuck on?
```

Not:

```text
"I don't understand this whole problem."
```

Instead narrow it down:

```text
I understand the input.

I understand the expected output.

I understand the first two steps.

I don't understand how to determine the next value.
```

Now you have a specific question.

Specific questions are much easier to solve.

---

# 28. My Perspective: Use Documentation as a Tool

Professional programmers constantly use documentation.

Using documentation is not cheating.

The important skill is knowing:

- What to search for
- How to read documentation
- How to interpret examples
- How to adapt examples to your problem
- How to verify your understanding

The programmer does not need to memorize the entire language.

The programmer needs to understand the concepts and know how to retrieve precise information when necessary.

---

# 29. My Perspective: Understand Before Abstracting

Frameworks and libraries are useful, but beginners should not hide the fundamentals behind abstractions too early.

For example, before relying heavily on a library to manipulate data, understand:

```text
Loops
Conditions
Functions
Arrays
Objects
Variables
Data transformation
```

Before relying heavily on a framework, understand the underlying web technologies where appropriate:

```text
HTML
CSS
JavaScript
HTTP
DOM
Browser fundamentals
```

Abstractions are powerful when you understand what they are abstracting.

---

# 30. My Perspective: Learn the Fundamentals Deeply

Technology changes quickly.

Specific tools come and go.

Fundamental programming concepts remain.

Today's popular framework may be replaced by another framework later.

But these concepts will continue to matter:

```text
Variables
Conditions
Loops
Functions
Data structures
Algorithms
Abstraction
State
Input
Output
Errors
Debugging
```

That is why fundamentals have such a high return on investment.

---

# 31. My Perspective: Code Is the Final Translation

Think of programming like translating an idea between different forms.

```text
Idea
 ↓
Problem
 ↓
Requirements
 ↓
Algorithm
 ↓
Pseudocode / Plain English
 ↓
Programming Language
 ↓
Machine Instructions
```

The code is not where the thinking begins.

The code is where the solution gets expressed.

This is an important distinction.

---

# 32. Example: Thinking Before Coding

Suppose the task is:

> Return the last character of a string.

A beginner might immediately search for:

```text
"JavaScript get last character"
```

That can produce the answer, but it does not necessarily develop problem-solving ability.

Instead reason first:

```text
I have a string.

A string has characters.

I need the final character.

Therefore I need a way to identify the final position.

The final position depends on the string's length.

So:

final position = length - 1
```

Now you have the algorithmic idea.

Only then should you choose the JavaScript syntax.

For example:

```js
function lastCharacter(str) {
    return str[str.length - 1];
}
```

Or, depending on the requirements and environment:

```js
function lastCharacter(str) {
    return str.at(-1);
}
```

The important part was not memorizing `.at(-1)`.

The important part was understanding:

```text
"I need the character at the final position."
```

---

# 33. Example: Debugging Mindset

Suppose you write:

```js
function add(a, b) {
    return a - b;
}
```

and expect:

```js
add(5, 3); // 8
```

but receive:

```text
2
```

A weak debugging approach is:

```text
"Why isn't JavaScript giving me 8?"
```

A better approach is:

```text
Expected:
8

Actual:
2

Look at the function:
return a - b;

The operation is subtraction.

The intended operation is addition.

Root cause:
Wrong operator.

Fix:
return a + b;
```

This is simple, but the same reasoning applies to much larger programs.

---

# 34. The Programmer's Mindset

A useful programmer mindset can be summarized as:

```text
Be curious.
Be precise.
Question assumptions.
Break problems down.
Expect failure.
Read errors.
Test ideas.
Learn from mistakes.
Keep simplifying.
```

Do not be afraid of being stuck.

Instead, become comfortable with the process of **getting unstuck**.

---

# 35. Practical Workflow to Use While Learning

For programming exercises, use this workflow:

## Before Coding

```text
[ ] Read the problem carefully.
[ ] Identify the input.
[ ] Identify the expected output.
[ ] Identify the rules.
[ ] Identify edge cases.
[ ] Explain the problem in your own words.
```

## Planning

```text
[ ] Break the problem into smaller steps.
[ ] Write the algorithm in plain English.
[ ] Test the algorithm mentally with an example.
[ ] Identify what concepts are needed.
```

## Coding

```text
[ ] Convert the algorithm into comments.
[ ] Implement one step at a time.
[ ] Keep names meaningful.
[ ] Run the code frequently.
```

## Debugging

```text
[ ] Read the error.
[ ] Compare expected vs actual behavior.
[ ] Identify your assumption.
[ ] Form a hypothesis.
[ ] Test the hypothesis.
[ ] Fix the root cause.
[ ] Run the program again.
```

## After It Works

```text
[ ] Read the code again.
[ ] Remove unnecessary complexity.
[ ] Improve naming.
[ ] Remove duplication.
[ ] Consider edge cases.
[ ] Ask whether the algorithm can be improved.
```

---

# 36. A Compact Problem-Solving Template

When facing a new problem, write this:

```text
PROBLEM:
What am I trying to accomplish?

INPUT:
What information do I have?

OUTPUT:
What should I produce?

RULES:
What conditions must be followed?

EXAMPLES:
What should happen with a normal example?

EDGE CASES:
What unusual situations can happen?

ALGORITHM:
What exact steps transform the input into the output?

IMPLEMENTATION:
How do I express those steps in my programming language?

TEST:
How do I know the solution is correct?

DEBUG:
If it fails, what assumption or step is wrong?
```

---

# 37. The Big Picture

Programming can be viewed as a cycle:

```text
Understand
    ↓
Plan
    ↓
Implement
    ↓
Test
    ↓
Debug
    ↓
Improve
    ↓
Understand more
    ↓
Repeat
```

You do not finish learning programming by memorizing a language.

You become better by repeatedly going through this cycle.

---

# 38. Key Takeaways From the Presentation

## Core Philosophy

- Programming is primarily about problem-solving and logic.
- Programming is not simply language mastery.
- A programming language is a tool for expressing solutions.
- Computers are extremely literal.
- The programmer must communicate precise instructions.

## Algorithms

- Understand the problem before coding.
- Write the algorithm in plain English first.
- Break complex problems into smaller steps.
- Translate the algorithm into code only after the reasoning is clear.

## Fundamental Concepts

- Many programming languages share the same underlying concepts.
- Variables, input/output, conditions, loops, functions, and data structures are transferable ideas.
- Learning concepts is more valuable than memorizing syntax.

## Debugging

- Failure is normal.
- Debugging is part of programming.
- Errors provide useful information.
- Do not randomly change code.
- Investigate assumptions and identify root causes.

## Communication

- Code communicates intent.
- Good naming improves readability.
- Good structure makes logic easier to understand.
- Comments should explain useful reasoning, especially why something is done.

## Learning

- Practice problem-solving, not just syntax.
- Learn how to get unstuck.
- Use documentation effectively.
- Avoid depending on solutions too quickly.
- Focus on fundamentals before getting buried in abstractions.

---

# 39. Final Mental Model

The most important thing to remember:

```text
Don't ask:

"What code should I write?"

Ask:

"What steps would solve this problem?"
```

Then:

```text
Problem
   ↓
Understand
   ↓
Break down
   ↓
Algorithm
   ↓
Plain English
   ↓
Comments
   ↓
Code
   ↓
Test
   ↓
Debug
   ↓
Refactor
```

> **The language is the tool.**
>
> **The algorithm is the plan.**
>
> **Problem-solving is the skill.**

---

# 40. Personal Reference Notes

## What I Should Practice

When doing programming exercises, I should deliberately practice:

1. Reading the problem carefully.
2. Explaining the problem in my own words.
3. Identifying inputs and outputs.
4. Breaking the problem into smaller pieces.
5. Writing an algorithm before coding.
6. Thinking through examples manually.
7. Translating the algorithm into code.
8. Testing edge cases.
9. Debugging without immediately looking for the answer.
10. Explaining why my solution works.
11. Looking for simpler or clearer solutions afterward.

## What I Should Avoid

Avoid:

- Starting to code before understanding the problem.
- Memorizing syntax without understanding the concept.
- Copying solutions without understanding them.
- Randomly changing code when debugging.
- Blaming the programming language.
- Assuming errors mean failure.
- Trying to solve a large problem all at once.
- Depending on libraries/frameworks to hide fundamentals.

---

# 41. One-Sentence Summary

> **Learn to think about the solution first; programming is the process of translating that solution into precise instructions that a computer can execute.**

---

## Source

**Andy Harris — How To Think Like A Programmer**

https://www.youtube.com/watch?v=azcrPFhaY9k

**Referenced timestamps from the provided notes:**

- 0:00–1:15 — Programming mindset
- 3:39–4:21 — Explaining logic to a computer
- 9:15–9:55 — Programming vs. language mastery
- 15:07–15:56 — Fundamental programming concepts
- 16:04–17:08 — Algorithms before code
- 17:25–17:54 — Understanding the problem
- 20:07–20:20 — Programming as communication
- 31:05–31:27 — Planning before coding
- 33:30–34:00 — Converting algorithms into comments
- 34:40–35:05 — Implementing the steps
- 37:56–38:09 — Debugging as part of programming
- 42:42–43:36 — Learning from errors
- 58:32–59:46 — Why Python is useful for beginners

---

# Final Note

The presentation's most valuable lesson is not simply to "write pseudocode first."

The deeper lesson is to build a habit of **thinking independently of syntax**.

When faced with a programming problem:

```text
Understand the problem.
        ↓
Determine what needs to happen.
        ↓
Break it into manageable steps.
        ↓
Create an algorithm.
        ↓
Express the algorithm in code.
        ↓
Test the result.
        ↓
Debug your assumptions.
        ↓
Improve the solution.
```

That is the mindset worth carrying from one language to another.

**JavaScript today, Python tomorrow, another language later — the problem-solving ability stays with you.**
