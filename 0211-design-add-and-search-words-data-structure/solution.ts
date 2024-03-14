class WordDictionary {
    root: DictNode

    constructor() {
        this.root = new DictNode()
    }

    addWord(word: string): void {
        let node = this.root
        for(let letter of word) {
            if(!node.children[letter]) {
                node.children[letter] = new DictNode()
            }
            node = node.children[letter]
        }
        node.isEndOfWord = true
    }

    search(word: string, node = this.root, index = 0): boolean {
        if (index === word.length) {
            return node.isEndOfWord;
        }

        if (word[index] === '.') {
            for (let key in node.children) {
                if (this.search(word, node.children[key], index + 1)) {
                    return true;
                }
            }
        } else if (node.children[word[index]]) {
            return this.search(word, node.children[word[index]], index + 1);
        }

        return false;
    }
}

class DictNode {
  children: { [key: string]: DictNode };
  isEndOfWord: boolean;

  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}
