// You are given an absolute path for a Unix-style file system, which always begins with a slash '/'. Your task is to transform this absolute path into its simplified canonical path.

// The rules of a Unix-style file system are as follows:

// A single period '.' represents the current directory.
// A double period '..' represents the previous/parent directory.
// Multiple consecutive slashes such as '//' and '///' are treated as a single slash '/'.
// Any sequence of periods that does not match the rules above should be treated as a valid directory or file name. For example, '...' and '....' are valid directory or file names.
// The simplified canonical path should follow these rules:

// The path must start with a single slash '/'.
// Directories within the path must be separated by exactly one slash '/'.
// The path must not end with a slash '/', unless it is the root directory.
// The path must not have any single or double periods ('.' and '..') used to denote current or parent directories.
// Return the simplified canonical path.

// Approach: Utilize a stack, split the path by "/", since no matter what the input is we need to process what is between two "/" - it can either be a directory name or a special character that we need to process(like "." or ".."). We then iterate over the split path and process, if the component is a single "." or an empty string we do nothing. If we have a "..", we need to go up one level, so we pop an item from the stack if its not empty. If the component is not a special character we simply add it to the stack because its a directory name. Once we are done processing we can join the items in the stack with a "/".

const simplifyPath = (path) => {
  const stack = [];
  const splitPaths = path.split("/");

  for (let el of splitPaths) {
    if (el === "..") {
      if (stack.length > 0) {
        // remove a directory bc .. means moving up a folder
        stack.pop();
      } // if the el is a single "." or an empty string we do nothing
    } else if (el === "." || el === "") {
      continue;
    } else {
      stack.push(el);
    }
  }

  return "/" + stack.join("/");
};

// Big O
// Time: O(n) We split the input path into components is O(n), processing each component is also O(n)
// Space: O(n) We have a stack and use an array of size n.
