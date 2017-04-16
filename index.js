'use strict';

var comment = module.exports = function () {
	return new RegExp('(?:' + comment.line().source + ')|(?:' + comment.block().source + ')', 'g');
};

comment.line = function () {
	return /(?:^|\s)\/\/(.+?)$/gm;
};

comment.block = function () {
	return /\/\*([\S\s]*?)\*\//gm;
};
