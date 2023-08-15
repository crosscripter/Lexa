# Lexa
Scanner? Lexer? Lexical Scanner?? 👀 No, It's just a simple Lexa 

## About
Lexa is a pure lexer (lexical scanner) using **only** regex (cause I'm crazy 🤪)
the `SYNTAX` regular expression can lex most of the common syntax used in programming languages

## Usage
Well, see you put in a string of code and **almost** instantly get out an `Array<Array<string,number>>` array of tokens in the convenient form:

**Por ejemplo**:
```
lex(`g.x[4] = ({a: [3].length})`)
// => ["g",0],[".",1],["x",2],["[",3],["4",4],["]",5],[" ",6],["=",7],[" ",8],["(",9],["{",10],["a",11],[":",12],[" ",13],["[",14],["3",15],["]",16],[".",17],["length",18],["}",24],[")",25]]
```

## Benchmarks ##
Fast enough for me! I've even seen her lex **10,000** lines of code in about 170ms!

![image](https://github.com/crosscripter/Lexa/assets/315043/ba6b6e24-fdd7-4f65-a81c-765a36c3e3f2)
