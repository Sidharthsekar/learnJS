# learnJS

Javascript is a Synchronous single-threaded language
Everything inside JS happens inside an "Execution Context"
	There are two components inside JS
		1. Memory Components
			> Variables and functions are stored here. Also known as variable environment
			> This is where memory creation phase will happen
		2. Code component
			> Thread of execution - Place where code executed
			> This is where Code execution phase will happen
	There are two phases in JS execution
		1. Memory creation phase
			> It allocates memory to variables and functions. 
			> Variables store a special value called undefined and in case of function, it stores the code of the function
		2. Code execution phase
			> In this phase, execution will happen line by line
			> In case of variables, whatever value assigned for the variable will replace the special variable "undefined".
			> In case of variables where functions are called, This will create a new Execution context which will have both memory component and code component, there execution will happen. Once execution done, control will return to global execution context with return value stored in the variable.
	When there are multiple execution context, these contexts are arraged in a stack with Global Execution context as base. These stacks are also referred as execution context stack, call stack, program stack, control stack, runtime stack, machine stack

Hoisting
	This helps in using variable & function even before they are declared. Since the memory creation phase creates memory and stores values for this, we will not get "Not defined" error in console
		> Variable declarations are scanned and are made undefined
		> Function declarations are scanned and are made available
	


Day 1:
Started with the background of the JS, Execution Context, Execution Phases, Stacks, hoisting, variables in different stacks

