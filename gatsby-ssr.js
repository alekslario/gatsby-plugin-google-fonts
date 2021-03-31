"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var format = function format(string) {
  return string
    .split(" ")
    .map(function (s) {
      return s.replace(/^\w/, function (s) {
        return s.toUpperCase();
      });
    })
    .join(" ");
};

var getFonts = function getFonts(options) {
  return options.fonts.map(format).join("|").replace(/ /g, "+");
};

function getDisplay(options) {
  return options.display ? "&display=" + options.display : "";
}

function getAttributes(options) {
  var link =
    "https://fonts.googleapis.com/css?family=" +
    getFonts(options) +
    getDisplay(options);

  return [
    {
      key: "fonts",
      href: link,
      rel: "stylesheet",
      crossOrigin: "anonymous",
    },
    options.attributes || {},
  ].reduce(function (r, o) {
    Object.keys(o).forEach(function (k) {
      r[k] = o[k];
    });
    return r;
  }, {});
}

exports.onRenderBody = function (_ref, options) {
  var setHeadComponents = _ref.setHeadComponents;
  setHeadComponents([
    _react2.default.createElement("link", {
      key: "google-fonts-preconnect",
      rel: "preconnect",
      href: "https://fonts.gstatic.com/",
      crossOrigin: "anonymous",
    }),
    _react2.default.createElement("link", getAttributes(options)),
  ]);
};
