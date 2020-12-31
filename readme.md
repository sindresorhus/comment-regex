# comment-regex

> Regular expression for matching JavaScript comments

*This is pretty fragile and created for performance reasons where using a real parser would be overkill.*


## Install

```
$ npm install comment-regex
```


## Usage

```js
const commentRegex = require('comment-regex');

// Contains a comment
commentRegex().test('/* unicorn */\nvar foo = true;');
//=> true

// Get the contents of a comment
commentRegex().exec('/* unicorn */\nvar foo = true;')[2].trim();

// Get all the comments
'/* unicorn */\nvar foo = true;\nvar unicorn = "rainbows"; // rainbow'.match(commentRegex());
//=> ['/* unicorn */', ' // rainbow']
```


## API

The contents of the comment is in the first submatch.

### commentRegex()

Returns a regex for matching line and block comments.

### commentRegex.line()

Returns a regex for matching line comments.

### commentRegex.block()

Returns a regex for matching block comments.


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
