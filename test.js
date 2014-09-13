'use strict';
var test = require('ava');
var commentRegex = require('./');

test('regexComment()', function (t) {
	var res = '/* unicorn */\nvar foo = true;\nvar unicorn = "rainbows"; // rainbow'.match(commentRegex());
	t.assert(res[0] === '/* unicorn */');
	t.assert(res[1] === ' // rainbow');
	t.end();
});

test('regexComment.line()', function (t) {
	t.assert('var unicorn = "rainbows"; // rainbow'.match(commentRegex.line())[0] === ' // rainbow');
	t.assert('var foo = "http://sindresorhus.com"; // rainbow'.match(commentRegex.line())[0] === ' // rainbow');
	t.end();
});

test('regexComment.block()', function (t) {
	t.assert('/* unicorn */\nvar foo = true;'.match(commentRegex.block())[0] === '/* unicorn */');
	t.end();
});
