"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _component = _interopRequireDefault(require("@loadable/component"));

require("./main.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line import/no-extraneous-dependencies
const A = (0, _component.default)({
  chunkName() {
    return "letters-A";
  },

  isReady(props) {
    if (typeof __webpack_modules__ !== 'undefined') {
      return !!__webpack_modules__[this.resolve(props)];
    }

    return false;
  },

  requireAsync: () => import(
  /* webpackChunkName: "letters-A" */
  "./letters/A"),

  requireSync(props) {
    const id = this.resolve(props);

    if (typeof __webpack_require__ !== 'undefined') {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },

  resolve() {
    if (require.resolveWeak) {
      return require.resolveWeak("./letters/A");
    }

    return eval('require.resolve')("./letters/A");
  }

});
const B = (0, _component.default)({
  chunkName() {
    return "letters-B";
  },

  isReady(props) {
    if (typeof __webpack_modules__ !== 'undefined') {
      return !!__webpack_modules__[this.resolve(props)];
    }

    return false;
  },

  requireAsync: () => import(
  /* webpackChunkName: "letters-B" */
  "./letters/B"),

  requireSync(props) {
    const id = this.resolve(props);

    if (typeof __webpack_require__ !== 'undefined') {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },

  resolve() {
    if (require.resolveWeak) {
      return require.resolveWeak("./letters/B");
    }

    return eval('require.resolve')("./letters/B");
  }

});
const C = (0, _component.default)({
  chunkName() {
    return "letters-C";
  },

  isReady(props) {
    if (typeof __webpack_modules__ !== 'undefined') {
      return !!__webpack_modules__[this.resolve(props)];
    }

    return false;
  },

  requireAsync: () => import(
  /* webpackChunkName: "letters-C" */

  /* webpackPreload: true */
  "./letters/C"),

  requireSync(props) {
    const id = this.resolve(props);

    if (typeof __webpack_require__ !== 'undefined') {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },

  resolve() {
    if (require.resolveWeak) {
      return require.resolveWeak("./letters/C");
    }

    return eval('require.resolve')("./letters/C");
  }

});
const D = (0, _component.default)({
  chunkName() {
    return "letters-D";
  },

  isReady(props) {
    if (typeof __webpack_modules__ !== 'undefined') {
      return !!__webpack_modules__[this.resolve(props)];
    }

    return false;
  },

  requireAsync: () => import(
  /* webpackChunkName: "letters-D" */

  /* webpackPrefetch: true */
  "./letters/D"),

  requireSync(props) {
    const id = this.resolve(props);

    if (typeof __webpack_require__ !== 'undefined') {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },

  resolve() {
    if (require.resolveWeak) {
      return require.resolveWeak("./letters/D");
    }

    return eval('require.resolve')("./letters/D");
  }

});
const E = (0, _component.default)({
  chunkName() {
    return "letters-E";
  },

  isReady(props) {
    if (typeof __webpack_modules__ !== 'undefined') {
      return !!__webpack_modules__[this.resolve(props)];
    }

    return false;
  },

  requireAsync: () => import(
  /* webpackChunkName: "letters-E" */
  "./letters/E"),

  requireSync(props) {
    const id = this.resolve(props);

    if (typeof __webpack_require__ !== 'undefined') {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },

  resolve() {
    if (require.resolveWeak) {
      return require.resolveWeak("./letters/E");
    }

    return eval('require.resolve')("./letters/E");
  }

}, {
  ssr: false
});
const X = (0, _component.default)({
  chunkName(props) {
    return `letters-${props.letter}`.replace(/[^a-zA-Z0-9_!§$()=\-^°]+/g, "-");
  },

  isReady(props) {
    if (typeof __webpack_modules__ !== 'undefined') {
      return !!__webpack_modules__[this.resolve(props)];
    }

    return false;
  },

  requireAsync: props => import(
  /* webpackChunkName: "letters-[request]" */
  `./letters/${props.letter}`),

  requireSync(props) {
    const id = this.resolve(props);

    if (typeof __webpack_require__ !== 'undefined') {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },

  resolve(props) {
    if (require.resolveWeak) {
      return require.resolveWeak(`./letters/${props.letter}`);
    }

    return eval('require.resolve')(`./letters/${props.letter}`);
  }

});
const Sub = (0, _component.default)({
  chunkName(props) {
    return `letters-${props.letter}-file`.replace(/[^a-zA-Z0-9_!§$()=\-^°]+/g, "-");
  },

  isReady(props) {
    if (typeof __webpack_modules__ !== 'undefined') {
      return !!__webpack_modules__[this.resolve(props)];
    }

    return false;
  },

  requireAsync: props => import(
  /* webpackChunkName: "letters-[request]" */
  `./letters/${props.letter}/file`),

  requireSync(props) {
    const id = this.resolve(props);

    if (typeof __webpack_require__ !== 'undefined') {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },

  resolve(props) {
    if (require.resolveWeak) {
      return require.resolveWeak(`./letters/${props.letter}/file`);
    }

    return eval('require.resolve')(`./letters/${props.letter}/file`);
  }

});
const RootSub = (0, _component.default)({
  chunkName(props) {
    return `${props.letter}-file`.replace(/[^a-zA-Z0-9_!§$()=\-^°]+/g, "-");
  },

  isReady(props) {
    if (typeof __webpack_modules__ !== 'undefined') {
      return !!__webpack_modules__[this.resolve(props)];
    }

    return false;
  },

  requireAsync: props => import(
  /* webpackChunkName: "[request]" */
  `./${props.letter}/file`),

  requireSync(props) {
    const id = this.resolve(props);

    if (typeof __webpack_require__ !== 'undefined') {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },

  resolve(props) {
    if (require.resolveWeak) {
      return require.resolveWeak(`./${props.letter}/file`);
    }

    return eval('require.resolve')(`./${props.letter}/file`);
  }

}); // We keep some references to prevent uglify remove

A.C = C;
A.D = D;

const Moment = _component.default.lib({
  chunkName() {
    return "moment";
  },

  isReady(props) {
    if (typeof __webpack_modules__ !== 'undefined') {
      return !!__webpack_modules__[this.resolve(props)];
    }

    return false;
  },

  requireAsync: () => import(
  /* webpackChunkName: "moment" */
  "moment"),

  requireSync(props) {
    const id = this.resolve(props);

    if (typeof __webpack_require__ !== 'undefined') {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },

  resolve() {
    if (require.resolveWeak) {
      return require.resolveWeak("moment");
    }

    return eval('require.resolve')("moment");
  }

});

const App = () => _react.default.createElement("div", null, _react.default.createElement(A, null), _react.default.createElement("br", null), _react.default.createElement(B, null), _react.default.createElement("br", null), _react.default.createElement(X, {
  letter: "A"
}), _react.default.createElement("br", null), _react.default.createElement(X, {
  letter: "F"
}), _react.default.createElement("br", null), _react.default.createElement(E, null), _react.default.createElement("br", null), _react.default.createElement(Sub, {
  letter: "Z"
}), _react.default.createElement("br", null), _react.default.createElement(RootSub, {
  letter: "Y"
}), _react.default.createElement("br", null), _react.default.createElement(Moment, null, moment => moment().format("HH:mm")));

var _default = App;
exports.default = _default;