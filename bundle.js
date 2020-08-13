(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
let Phrase = require("skamin-palindrome");

let string = prompt("Please enter a string for palindrome testing:");

let phrase = new Phrase(string)

if (phrase.palindrome()) {
  alert(`"${phrase.content}" is a palindrome!`);
} else {
  alert(`"${phrase.content}" is not a palindrome.`);
}
},{"skamin-palindrome":2}],2:[function(require,module,exports){
module.exports = Phrase;
// Adds `reverse` to all strings.
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

//exercises
String.prototype.blank = function() {
  return !!(this.match(/^\s*$/g));
}

Array.prototype.last = function() {
  return this[this.length-1]
}
// function palindrome(string) {
//   let lowerstring=string.toLowerCase()
//   return lowerstring === reverse(lowerstring);
// }

function emailsplit(email) {
  let uemail = email.toLowerCase();
  let username = uemail.split("@")[0];
  let domain = uemail.split("@")[1];
  return `Username: ${username}. Domain: ${domain}`;
}

// Defines a Phrase object.
function Phrase(content) {
  this.content = content;
  this.louder = function() {return this.content.toUpperCase();}
  
  //tolowercase processor
  this.processor = function(string) {
    return string.toLowerCase();
  }
  
  // Returns content processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.processor(this.letters());
  }
  
  // Returns the letters in the content.
  this.letters = function letters() {
    const letterRegex = /[a-z]/gi;
    return (this.content.match(/[a-z]/gi) || []).join("");
  }
  
  // Returns true if the phrase is a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }
}

// Defines a TranslatedPhrase object.
function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;

// Returns translation processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.processor(this.translation);
  }
}

TranslatedPhrase.prototype = new Phrase();
},{}]},{},[1]);
