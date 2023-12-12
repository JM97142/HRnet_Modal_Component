'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault').default
Object.defineProperty(exports, '__esModule', {
    value: true
})
exports.default = void 0;
var _react = _interopRequireDefault(require('react'))
require('./modal.css')
var Modal = function Modal(_ref) {
    var close = _ref.close,
        message = _ref.message;
    return /*#__PURE__*/_react.default.createElement('div', {
        className: 'blocker',
    },/*#__PURE__*/_react.default.createElement('div', {
        className: 'modal',
    }, /*#__PURE__*/_react.default.createElement('button', {
        className: 'close-modal',
        type: 'button',
        onClick: close
    }, 'X'), /*#__PURE__*/_react.default.createElement('h3', {
        className: 'modal-message'
    }, message)))
};
var _default = Modal
exports.default = _default