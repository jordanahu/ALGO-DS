const Trie = require("./");

module.exports = ()=>{
    let dictionary = new Trie();
    dictionary.insert("boy");
    dictionary.insert("boi");
    dictionary.printWordChars("boi")
}