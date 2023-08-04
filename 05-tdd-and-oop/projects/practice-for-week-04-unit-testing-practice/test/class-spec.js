const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {
  describe("Word constructor function", function () {

    let word = new Word('consistency');

    it('should have a "word" property', function () {
      expect(word).to.have.property('word');
    });

    it('should set the "word" property when a new word is created', function () {
      expect(word.word).to.be.equal('consistency');
    });
  });

  describe("removeVowels function", function () {
    it("should return a the word with all vowels removed", function () {
      let word = new Word('consistency');
      expect(word.removeVowels()).to.be.equal('cnsstncy');
    });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {
      let word = new Word('consistency');
      expect(word.removeConsonants()).to.be.equal('oie');
    });
  });

  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {
      let word = new Word('consistency');
      expect(word.pigLatin()).to.be.equal('onsistencycay');
    });
  });
});
