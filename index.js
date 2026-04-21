const base64url = require("./base64-url.js");

module.exports = {
  encode: function (valueToEncode) {
    return base64url.escape(base64url.encode(JSON.stringify(valueToEncode)));
  },
  decode: function (valueToDecode) {
    return JSON.parse(base64url.decode(base64url.unescape(valueToDecode)));
  }
};