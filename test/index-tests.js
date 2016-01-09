"use strict";
/*jshint expr: true*/

describe("base64", function () {
  var expect = require("chai").expect,
    base64 = require("../index");

  describe("encode", function () {

    it("should encode an object", function () {
      var obj = {
        name: "John",
        last: "Smith",
        age: 12
      };
      var encoded = base64.encode(obj);
      expect(encoded).to.be.eql("eyJuYW1lIjoiSm9obiIsImxhc3QiOiJTbWl0aCIsImFnZSI6MTJ9");
    });

    it("should encode an object with arrays", function () {
      var obj = {
        name: "John",
        last: "Smith",
        age: 12,
        aliases: ["Silver-bullet", "Rock-star", "Jumper"]
      };
      var encoded = base64.encode(obj);
      expect(encoded).to.be.eql("eyJuYW1lIjoiSm9obiIsImxhc3QiOiJTbWl0aCIsImFnZSI6MTIsImFsaWFzZXMiOlsiU2lsdmVyLWJ1bGxldCIsIlJvY2stc3RhciIsIkp1bXBlciJdfQ");
    });

    it("should encode an array of objects", function () {
       var obj = {
        name: "John",
        last: "Smith",
        age: 12,
        siblings: [
          {name: "Andrew", last: "Smith", age: 8},
          {name: "Beth", last: "Smith", age: 6},
          {name: "Mary", last: "Smith", age: 12}
        ]
      };
      var encoded = base64.encode(obj);
      expect(encoded).to.be.eql("eyJuYW1lIjoiSm9obiIsImxhc3QiOiJTbWl0aCIsImFnZSI6MTIsInNpYmxpbmdzIjpbeyJuYW1lIjoiQW5kcmV3IiwibGFzdCI6IlNtaXRoIiwiYWdlIjo4fSx7Im5hbWUiOiJCZXRoIiwibGFzdCI6IlNtaXRoIiwiYWdlIjo2fSx7Im5hbWUiOiJNYXJ5IiwibGFzdCI6IlNtaXRoIiwiYWdlIjoxMn1dfQ");

    });

    it("should encode a String", function () {
      var encoded = base64.encode("Hello world, I'm rellay close to die & pass away?=");
      expect(encoded).to.be.eql("IkhlbGxvIHdvcmxkLCBJJ20gcmVsbGF5IGNsb3NlIHRvIGRpZSAmIHBhc3MgYXdheT89Ig");
    });

    it("should encode a Number", function () {
      var encoded = base64.encode(120.09876);
      expect(encoded).to.be.eql("MTIwLjA5ODc2");
    });

    it("should encode a Date", function () {
      var d = new Date();
      var encoded = base64.encode(d);
      expect(encoded).to.not.be.null;
    });
  });

  describe("decode", function () {

    it("should decode an object", function () {
      var obj = {
        name: "John",
        last: "Smith",
        age: 12
      };
      var decoded = base64.decode("eyJuYW1lIjoiSm9obiIsImxhc3QiOiJTbWl0aCIsImFnZSI6MTJ9");
      expect(decoded).to.be.eql(obj);
    });

    it("should decode an object with arrays", function () {
      var obj = {
        name: "John",
        last: "Smith",
        age: 12,
        aliases: ["Silver-bullet", "Rock-star", "Jumper"]
      };
      var decoded = base64.decode("eyJuYW1lIjoiSm9obiIsImxhc3QiOiJTbWl0aCIsImFnZSI6MTIsImFsaWFzZXMiOlsiU2lsdmVyLWJ1bGxldCIsIlJvY2stc3RhciIsIkp1bXBlciJdfQ");
      expect(decoded).to.be.eql(obj);
    });

    it("should decode an array of objects", function () {
       var obj = {
        name: "John",
        last: "Smith",
        age: 12,
        siblings: [
          {name: "Andrew", last: "Smith", age: 8},
          {name: "Beth", last: "Smith", age: 6},
          {name: "Mary", last: "Smith", age: 12}
        ]
      };
      var decoded = base64.decode("eyJuYW1lIjoiSm9obiIsImxhc3QiOiJTbWl0aCIsImFnZSI6MTIsInNpYmxpbmdzIjpbeyJuYW1lIjoiQW5kcmV3IiwibGFzdCI6IlNtaXRoIiwiYWdlIjo4fSx7Im5hbWUiOiJCZXRoIiwibGFzdCI6IlNtaXRoIiwiYWdlIjo2fSx7Im5hbWUiOiJNYXJ5IiwibGFzdCI6IlNtaXRoIiwiYWdlIjoxMn1dfQ");
      expect(decoded).to.be.eql(obj);

    });

    it("should decode a String", function () {
      var decoded = base64.decode("IkhlbGxvIHdvcmxkLCBJJ20gcmVsbGF5IGNsb3NlIHRvIGRpZSAmIHBhc3MgYXdheT89Ig");
      expect(decoded).to.be.eql("Hello world, I'm rellay close to die & pass away?=");
    });

    it("should decode a Number", function () {
      var decoded = base64.decode("MTIwLjA5ODc2");
      expect(decoded).to.be.eql(120.09876);
    });

    it("should decode a Date to ISO form", function () {
      var decoded = base64.decode("IjIwMTUtMDUtMTNUMTc6MjU6NTguNDIxWiI");
      expect(decoded).to.be.eql("2015-05-13T17:25:58.421Z");
    });
  });
});
