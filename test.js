import test from 'ava';
import commentRegex from '.';

test('regexComment()', t => {
	const result = '/* unicorn */\nvar foo = true;\nvar unicorn = "rainbows"; // rainbow'.match(commentRegex());
	t.is(result[0], '/* unicorn */');
	t.is(result[1], ' // rainbow');
});

test('regexComment.line()', t => {
	t.is('var unicorn = "rainbows"; // rainbow'.match(commentRegex.line())[0], ' // rainbow');
	t.is('var foo = "http://sindresorhus.com"; // rainbow'.match(commentRegex.line())[0], ' // rainbow');
});

test('regexComment.block()', t => {
	t.is('/* unicorn */\nvar foo = true;'.match(commentRegex.block())[0], '/* unicorn */');
});
