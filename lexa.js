const { log } = console

/* The entire lexer! o_O */

// Pure regex to lex most common syntax
const SYNTAX = /(\s|#.*|"(?:[^"]*?)"|'(?:[^']*?)\'|re\/(?:[^\/]*?)\/[gmyisu]*|[\[\]\(\)\{\}\,]|=[\=\>]|[\+\-\*\%\<\>]\=|\.{3}|[\*\+\-\.]{2}|\W|\d+(?:\.\d+)?|[a-z_][a-z_\d]*)/gmi

const lex = code => [...code.matchAll(SYNTAX)].map(m => [m[0], m.index])

// Let's lex a test program!
log(JSON.stringify(lex(`g.x[4] = ({a: [3].length})`)))
