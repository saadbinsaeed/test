webpackJsonp([51],{1020:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":a(t))&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":a(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),c=o(2),l=n(c),d=o(3318),p=n(d),f=function(e){function t(e){r(this,t);var o=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.updateContent=o.updateContent.bind(o),o.state={content:"<h2>Awesome Rich Content</h2>\n<p>Suspendisse id sollicitudin dui. <strong>Vestibulum eu sapien pharetra,</strong> bibendum ligula id, ullamcorper ligula.</p>\n\n<ul>\n        <li>ullamcorper ligula</li>\n        <li>Duis vel neque</li>\n</ul>\n\n<p><em>Sed feugiat hendrerit risus, quis efficitur massa facilisis vitae. Aliquam erat volutpat. </em></p>\n"},o}return i(t,e),u(t,[{key:"updateContent",value:function(e){this.setState({content:e})}},{key:"onChange",value:function(e){var t=e.editor.getData();this.setState({content:t})}},{key:"onBlur",value:function(e){console.log("onBlur event called with event info: ",e)}},{key:"afterPaste",value:function(e){console.log("afterPaste event called with event info: ",e)}},{key:"render",value:function(){return l.default.createElement("div",{className:"jr-card"},l.default.createElement(p.default,{activeClass:"p10",content:this.state.content,events:{blur:this.onBlur.bind(this),afterPaste:this.afterPaste.bind(this),change:this.onChange.bind(this)}}))}}]),t}(l.default.Component),_=f;t.default=_;var h=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(f,"CK","/home/saad/Documents/projects/jumbo/src/app/routes/editors/routes/CK/index.js"),__REACT_HOT_LOADER__.register(_,"default","/home/saad/Documents/projects/jumbo/src/app/routes/editors/routes/CK/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(u,"_createClass","/home/saad/Documents/projects/jumbo/src/app/routes/editors/routes/CK/index.js"),__REACT_HOT_LOADER__.register(l,"_react2","/home/saad/Documents/projects/jumbo/src/app/routes/editors/routes/CK/index.js"),__REACT_HOT_LOADER__.register(p,"_reactCkeditorComponent2","/home/saad/Documents/projects/jumbo/src/app/routes/editors/routes/CK/index.js"),__REACT_HOT_LOADER__.register(n,"_interopRequireDefault","/home/saad/Documents/projects/jumbo/src/app/routes/editors/routes/CK/index.js"),__REACT_HOT_LOADER__.register(r,"_classCallCheck","/home/saad/Documents/projects/jumbo/src/app/routes/editors/routes/CK/index.js"),__REACT_HOT_LOADER__.register(s,"_possibleConstructorReturn","/home/saad/Documents/projects/jumbo/src/app/routes/editors/routes/CK/index.js"),__REACT_HOT_LOADER__.register(i,"_inherits","/home/saad/Documents/projects/jumbo/src/app/routes/editors/routes/CK/index.js"),__REACT_HOT_LOADER__.register(f,"CK","/home/saad/Documents/projects/jumbo/src/app/routes/editors/routes/CK/index.js"),__REACT_HOT_LOADER__.register(_,"_default","/home/saad/Documents/projects/jumbo/src/app/routes/editors/routes/CK/index.js"),__REACT_HOT_LOADER__.register(h,"_temp","/home/saad/Documents/projects/jumbo/src/app/routes/editors/routes/CK/index.js"))}()},3318:function(e,t,o){"use strict";e.exports=o(3319)},3319:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),u=o(2),c=n(u),l=o(3),d=n(l),p=o(30),f=n(p),_=o(3320),h=function(e){function t(e){r(this,t);var o=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.onLoad=o.onLoad.bind(o),o.state={isScriptLoaded:o.props.isScriptLoaded,config:o.props.config},o}return i(t,e),a(t,[{key:"componentDidMount",value:function(){this.props.isScriptLoaded?this.onLoad():_(this.props.scriptUrl,this.onLoad)}},{key:"componentWillUnmount",value:function(){this.unmounting=!0}},{key:"onLoad",value:function(){if(!this.unmounting){if(this.setState({isScriptLoaded:!0}),!window.CKEDITOR)return void console.error("CKEditor not found");this.editorInstance=window.CKEDITOR.appendTo(f.default.findDOMNode(this),this.state.config,this.props.content);for(var e in this.props.events){var t=this.props.events[e];this.editorInstance.on(e,t)}}}},{key:"render",value:function(){return c.default.createElement("div",{className:this.props.activeClass})}}]),t}(c.default.Component);h.defaultProps={content:"",config:{},isScriptLoaded:!1,scriptUrl:"https://cdn.ckeditor.com/4.6.2/standard/ckeditor.js",activeClass:"",events:{}},h.propTypes={content:d.default.any,config:d.default.object,isScriptLoaded:d.default.bool,scriptUrl:d.default.string,activeClass:d.default.string,events:d.default.object},t.default=h},3320:function(e,t){function o(e,t){for(var o in t)e.setAttribute(o,t[o])}function n(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function r(e,t){e.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,t(null,e))}}e.exports=function(e,t,s){var i=document.head||document.getElementsByTagName("head")[0],a=document.createElement("script");"function"==typeof t&&(s=t,t={}),t=t||{},s=s||function(){},a.type=t.type||"text/javascript",a.charset=t.charset||"utf8",a.async=!("async"in t)||!!t.async,a.src=e,t.attrs&&o(a,t.attrs),t.text&&(a.text=""+t.text),("onload"in a?n:r)(a,s),a.onload||n(a,s),i.appendChild(a)}}});
//# sourceMappingURL=51.d5a3e387668d199a9b4e.chunk.js.map