// Adds `reverse` to all strings.
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

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
    return this.processor(this.content);
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