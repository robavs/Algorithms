// Phone Numbers zadatak sa codewars-a
class TrieNode {
    constructor() {
        this.children = {}
    }
}
class Trie {
    constructor() {
        this.root = new TrieNode()
        this.nodes = 0
    }
    insert(word) {
        let curr = this.root

        for (let c of word) {
            if (!curr.children[c]) {
                curr.children[c] = new TrieNode()
                this.nodes++
            }
            curr = curr.children[c]
        }
    }
}
function phoneNumber(phones) {
    const trie = new Trie()

    for (let i = 0; i < phones.length; i++)
        trie.insert(phones[i])
  
    return trie.nodes
}
