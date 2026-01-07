# React Custom Hooks Practice

This repository contains implementations of commonly used custom React hooks, created to understand reusability, side-effects, performance optimization, and clean hook design.

# What I Learned

How to extract reusable logic into custom hooks

Managing browser APIs inside hooks

Handling side effects with useEffect

Improving performance using debouncing

Working with timers and cleanup functions

#  Custom Hooks Implemented
🔹 useIsOnline

Checks whether the user is currently online or offline using browser events.

Concepts used:

navigator.onLine

online / offline event listeners

Cleanup in useEffect

🔹 useTodos

Fetches and manages a list of todo items.

Concepts used:

Data fetching

State management

Separation of concerns

Reusable data logic

🔹 useInterval

Executes a function at a specified time interval.

Concepts used:

setInterval

Cleanup using clearInterval

Avoiding stale closures

🔹 useDebounce

Delays updating a value until the user stops typing or triggering events.

Concepts used:

setTimeout

Clearing timeouts

Performance optimization

🛠 Tech Stack

React

JavaScript (ES6+)

# To Run this project 

git clone https://github.com/your-username/custom-hooks.git
npm install
npm run dev


