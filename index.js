'use strict';

const comment = () => new RegExp(`(?:${comment.line().source})|(?:${comment.block().source})`, 'gms');

comment.line = () => /(?:^|\s)\/\/(.+?)$/gms;

comment.block = () => /\/\*(.*?)\*\//gms;

module.exports = comment;
