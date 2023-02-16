// Video sa interneta
class TrieNode{
    constructor(){
        this.children = {}
        this.endOfWord = false
    }
}
class Trie {
    constructor(){
        this.root = new TrieNode()
    }
}


Trie.prototype.insert = function(word) {
    let current = this.root
    for(const char of word){
        if(!current.children[char])
            current.children[char] = new TrieNode()
        current = current.children[char]
    }
    current.endOfWord = true
}

Trie.prototype.search = function(word) {
    let current = this.root

    for(const char of word){
        if(!current.children[char])
            return false
        current = current.children[char]
    } 
    return current.endOfWord
}


Trie.prototype.startsWith = function(prefix) {
    let current = this.root
    
    for(const char of prefix){
        if(!current.children[char])
            return false
        current = current.children[char]
    }
    return true
}
