# Node.js Server Crash: Unhandled File Read Error

This repository demonstrates a common error in Node.js server development: crashing due to unhandled errors during file I/O.

The `bug.js` file shows a server that crashes if it attempts to read a file that doesn't exist. The `bugSolution.js` file provides a corrected version with proper error handling.

## Reproducing the Bug

1.  Run `bug.js`.
2.  Make a request to the server (e.g., using `curl` or a browser).
3.  Observe that the server crashes if `./some_file.txt` does not exist.

## Solution

The `bugSolution.js` demonstrates how to handle file reading errors gracefully, preventing server crashes and providing a more robust application.