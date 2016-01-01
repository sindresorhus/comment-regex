import test from 'ava';
import m from './';

test('regexComment()', t => {
	const res = '/* unicorn */\nvar foo = true;\nvar unicorn = "rainbows"; // rainbow'.match(m());
	t.is(res[0], '/* unicorn */');
	t.is(res[1], ' // rainbow');
});

test('regexComment.line()', t => {
	t.is('var unicorn = "rainbows"; // rainbow'.match(m.line())[0], ' // rainbow');
	t.is('var foo = "http://sindresorhus.com"; // rainbow'.match(m.line())[0], ' // rainbow');
});

test('regexComment.block()', t => {
	t.is('/* unicorn */\nvar foo = true;'.match(m.block())[0], '/* unicorn */');
});
