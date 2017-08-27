function Node(value) {
  this.value = value;
  this.children = {};
  this.isLeafNode = false;
}

function Trie() {
  this.root = new Node(null);
}

Trie.prototype.add = function(word, node) {
  if (!word) return;
  node = node || this.root;
  var char = word.charAt(0);
  var child = node.children[char];
  if (!child) {
    child = new Node(char);
    node.children[char] = child;
  }
  var remainder = word.substring(1);
  if (remainder.length === 0) {
    child.isLeafNode = true;
  } else {
    this.add(remainder, child);
  }
};

Trie.prototype.autocomplete = function(prefix, node, stem, words) {
  node = node || this.root;
  stem = stem || "";
  words = words || [];
  prefix = prefix.toUpperCase();
  var char = prefix.charAt(0);
  var child = node.children[char];
  if (child) {
    var remainder = prefix.substring(1);
    if (remainder.length > 0) {
      this.autocomplete(remainder, child, stem.concat(char), words);
    } else {
      this.dfs(child, stem.concat(char), words);
    }
  }
  return words;
};

// depth-first search traversal
Trie.prototype.dfs = function(node, chars = "", words = []) {
  if (node && node.children) {
    if (node.isLeafNode) {
      words.push(chars);
    } else {
      Object.keys(node.children).forEach(
        function(char) {
          this.dfs(node.children[char], chars.concat(char), words);
        }.bind(this)
      );
    }
  }
};
