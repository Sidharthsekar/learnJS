# learnJS

Javascript is a Synchronous single-threaded language


Hoisting
	This helps in using variable & function even before they are declared. Since the memory creation phase creates memory and stores values for this, we will not get "Not defined" error in console
		> Variable declarations are scanned and are made undefined
		> Function declarations are scanned and are made available
	
Global and local variables
	Whatever variables which we initialize outside of functions, it is called global. Variables which are inside functions are local variables
Scope and lexical environment:
	Need to dig deeper here
Let and Const
	Let and const are hoisted
	Temporal dead zone - 
Block
	A block is a space where a group of statements are grouped.
	Also called as Block statement, Compound statement
	Block level scope is the scope where the let and const declared inside a block will not be accessed outside of the block. Var can be accessed outside the block
Shadowing


Day 1: Started with the background of the JS, Execution Context, Execution Phases, Stacks, hoisting, variables in different stacks
Day 2: window, global space, global and local variables
Day 3: Scope, lexical environment, Let and Const
Day 4: Block, Shadow, Closure

Unanswered questions:
1. When we print some variable without initializing, we are getting "Uncaught ReferenceError: aa is not defined", but when the same variable is referred as this. or window. , we are getting "undefined" value
	console.log(a); //error
	console.log(window.a); //undefined

2. What is lexical environment, scope
