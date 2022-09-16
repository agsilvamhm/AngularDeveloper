"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Cardnews =
/*#__PURE__*/
function (_HTMLElement) {
  _inherits(Cardnews, _HTMLElement);

  function Cardnews() {
    var _this;

    _classCallCheck(this, Cardnews);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Cardnews).call(this));

    var shadow = _this.attachShadow({
      mode: "open"
    });

    shadow.appendChild(_this.build());
    shadow.appendChild(_this.styles());
    return _this;
  }

  _createClass(Cardnews, [{
    key: "build",
    value: function build() {
      var componentRoot = document.createElement("div");
      componentRoot.setAttribute("class", "card");
      var cardLeft = document.createElement("div");
      cardLeft.setAttribute("class", "card_left");
      var autor = document.createElement("span");
      autor.textContent = "by " + (this.getAttribute("autor") || "Anonymous");
      var linkTitle = document.createElement("a");
      linkTitle.textContent = this.getAttribute("title");
      linkTitle.href = this.getAttribute("link-url");
      var newsContent = document.createElement("p");
      newsContent.textContent = this.getAttribute("content");
      cardLeft.appendChild(autor);
      cardLeft.appendChild(linkTitle);
      cardLeft.appendChild(newsContent);
      var cardRight = document.createElement("div");
      cardRight.setAttribute("class", "card_right");
      var newsImage = document.createElement("img");
      newsImage.src = this.getAttribute("photo") || "./assets/photo-default.jpg";
      cardRight.appendChild(newsImage);
      componentRoot.appendChild(cardLeft);
      componentRoot.appendChild(cardRight);
      return componentRoot;
    }
  }, {
    key: "styles",
    value: function styles() {
      var style = document.createElement("style");
      style.textContent = "\n        * {\n        padding: 0;\n        margin: 0;\n        box-sizing: border-box;\n        font-family: 'Segoe UI', sans-serif;\n    }\n    \n    .card {\n        width: 80%;\n        box-shadow: 10px 9px 26px 2px rgba(0,0,0,0.75);\n        -webkit-box-shadow: 10px 9px 26px 2px rgba(0,0,0,0.75);\n        -moz-box-shadow: 10px 9px 26px 2px rgba(0,0,0,0.75);\n     /*   border: 1px solid gray;*/\n        display: flex;\n        flex-direction: row;\n        justify-content: space-between;\n    }\n    \n    .card_left, .card_right {\n      /*  border:1px solid blue;*/\n    }\n    \n    .card_left {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        padding-left: 10px;\n    }\n    \n    .card_left > span {\n        font-weight: 400;\n    }\n    \n    .card_left > a {\n        margin-top: 15px;\n        font-size: 25px;\n        color: black;\n        text-decoration: none;\n        font-weight: bold;\n    }\n    \n    .card_left > p {\n        color: gray;\n    }\n        ";
      return style;
    }
  }]);

  return Cardnews;
}(_wrapNativeSuper(HTMLElement));

customElements.define('card-news', Cardnews);