import test from 'ava';
import {commentRegex, lineCommentRegex, blockCommentRegex} from './index.js';

test('commentRegex()', t => {
	const result = '/* unicorn */\nvar foo = true;\nvar unicorn = "rainbows"; // rainbow'.match(commentRegex());
	t.is(result[0], '/* unicorn */');
	t.is(result[1], ' // rainbow');
});

test('lineCommentRegex()', t => {
	t.is('var unicorn = "rainbows"; // rainbow'.match(lineCommentRegex())[0], ' // rainbow');
	t.is('var foo = "http://sindresorhus.com"; // rainbow'.match(lineCommentRegex())[0], ' // rainbow');
});

test('blockCommentRegex()', t => {
	t.is('/* unicorn */\nvar foo = true;'.match(blockCommentRegex())[0], '/* unicorn */');
});
