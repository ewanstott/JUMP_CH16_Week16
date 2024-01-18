// input: An array of arrays of words and definitions
// output: Build a tree that would be used as a dictionary.
// Use cases
// ****************************
// Use case 1
// If given this:
// [
// 	['and','AND_DEFINITION']
// ]
// The resulting tree should be
// [{
// 	letter: 'a'
// 	definition: null,
// 	children: [{
// 		letter: 'n',
// 		definition: null,
// 		children: [{
// 			letter: d,
// 			definition: 'AND_DEFINITION'
// 		}]
// 	}]
// }]

// 1. Define a TreeNode class:
// Create a class to represent each node in the dictionary tree. This class will have properties for the letter, definition, and children of the node.

class TreeNode {
  constructor(letter, definition = null) {
    this.letter = letter;
    this.definition = definition;
    this.children = [];
  }
}

// 2. Build the Dictionary Tree Function:
// Create a function to build the dictionary tree based on the input array of word-definition pairs.

function buildDictionaryTree(words) {
  // Create the root node with an empty letter
  const root = new TreeNode("");

  // Iterate through each word-definition pair in the input array
  for (const [word, definition] of words) {
    // Start from the root for each word
    let currentNode = root;

    // Iterate through each letter of the word
    for (const letter of word) {
      // Check if a child node with the current letter exists

      let childNode = currentNode.children.find(
        (child) => child.letter === letter
      );

      // If not, create a new child node and add it to the children array

      if (!childNode) {
        childNode = new TreeNode(letter);
        currentNode.children.push(childNode);
      }

      // Move to the next level in the tree
      currentNode = childNode;
    }

    // Set the definition for the last node in the word
    currentNode.definition = definition;
  }
  // Return the children of the root (excluding the root itself)
  return root.children;
}

const input = [["and", "AND_DEFINITION"]];
const tree = buildDictionaryTree(input);
console.log(tree);
