/* Famicon by https://github.com/kliksob */
var m = require('mithril');
var util = require('../../utils.js');
module.exports = {
  view: function view(vnode) {
    var attrs = vnode.attrs;
    var svgAttrs = Object.assign({ xmlns: util.xmlns }, util.onlyObject(attrs.svgAttrs));
    var pathAttrs = util.onlyObject(attrs.pathAttrs);  
    return m('svg[id=stream][viewBox=0 0 512 512]', svgAttrs, m('path[d=M16 128h416c8.84 0 16-7.16 16-16V48c0-8.84-7.16-16-16-16H16C7.16 32 0 39.16 0 48v64c0 8.84 7.16 16 16 16zm480 80H80c-8.84 0-16 7.16-16 16v64c0 8.84 7.16 16 16 16h416c8.84 0 16-7.16 16-16v-64c0-8.84-7.16-16-16-16zm-64 176H16c-8.84 0-16 7.16-16 16v64c0 8.84 7.16 16 16 16h416c8.84 0 16-7.16 16-16v-64c0-8.84-7.16-16-16-16z]', pathAttrs));
  }
}
