"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var ink_1 = require("ink");
var App = function (props) {
    return (react_1["default"].createElement(ink_1.Text, { bold: true },
        react_1["default"].createElement(ink_1.Color, { bgWhiteBright: true, magentaBright: true }, props.text)));
};
var rerender = ink_1.render(react_1["default"].createElement(App, { text: "Hello World!" })).rerender;
setTimeout(rerender.bind(null, react_1["default"].createElement(App, { text: "goodbye" })), 5000);
