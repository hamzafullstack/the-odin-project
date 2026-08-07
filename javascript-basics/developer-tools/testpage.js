console.log("JavaScript Loaded");

  console.warn("This is a warning.");

  console.error("This is a fake error for testing.");

  function func () {
    return 'hello world';
     debugger;  // <-- the debugger stops here
  }
  func ();

  // The command “debugger”
//    debugger;  // <-- the debugger stops here

// chrome devtool 
// Watch – shows current values for any expressions.

// Call Stack – shows the nested calls chain.

// Scope – current variables.

//  – “Resume”: continue the execution, hotkey F8.

//  – “Step”: run the next command, hotkey F9.

//  – “Step over”: run the next command, but don’t go into a function, hotkey F10.

//  – “Step into”, hotkey F11..

//  – “Step out”: continue the execution till the end of the current function, hotkey Shift+F11.

// open console to see
for (let i = 0; i < 5; i++) {
  console.log("value,", i);
}

// learn more on jsinfo : https://javascript.info/debugging-chrome
