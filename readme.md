# comment-regex

> Regular expression for matching JavaScript comments

*This is pretty fragile and created for performance reasons where using a real parser would be overkill.*

## Install

```sh
npm install comment-regex
```

## Usage

```js
import {commentRegex} from 'comment-regex';

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

### lineCommentRegex()

Returns a regex for matching line comments.

### blockCommentRegex()

Returns a regex for matching block comments.

## Important

If you run the regex against untrusted user input in a server context, you should [give it a timeout](https://github.com/sindresorhus/super-regex).

**I do not consider ReDoS a valid vulnerability for this package.**
