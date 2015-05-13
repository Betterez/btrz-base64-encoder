# btrz-base64-encoder [![Build Status](https://secure.travis-ci.org/Betterez/btrz-base64-encoder.png?branch=master)](https://travis-ci.org/Betterez/btrz-base64-encoder) [![NPM version](https://badge-me.herokuapp.com/api/npm/btrz-base64-encoder.png)](http://badges.enytc.com/for/npm/btrz-base64-encoder)

This module encodes and decodes strings, values and objects literals to url friendly base64 strings.

## Runtimes supported

io.js >= 1.0.3
node >= v0.11.x

## Install

    npm install btrz-base64-encoder --save

## Usage

    var base64 = require("btrz-base64-encoder");
    var obj = {
        "name": "John",
        "last": "Smith",
        "age": 24
    };
    var encoded = base64.encode(obj);
    //
    var decode = base64.decode(encoded);
    /*
        {
            "name": "John",
            "last": "Smith",
            "age": 24
        }
    */

You can pass anything to the encode method. Internally will use `JSON.stringify` to deal with Objects, so all restrictions regarding depth for the `stringify` method also apply in this case.
