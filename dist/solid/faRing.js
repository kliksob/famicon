/* Famicon by https://github.com/kliksob */
var m = require('mithril');
var util = require('../../utils.js');
module.exports = {
  view: function view(vnode) {
    var attrs = vnode.attrs;
    var svgAttrs = Object.assign({ xmlns: util.xmlns }, util.onlyObject(attrs.svgAttrs));
    var pathAttrs = util.onlyObject(attrs.pathAttrs);  
    return m('svg[id=ring][viewBox=0 0 512 512]', svgAttrs, m('path[d=M256 64C110.06 64 0 125.91 0 208v98.13C0 384.48 114.62 448 256 448s256-63.52 256-141.87V208c0-82.09-110.06-144-256-144zm0 64c106.04 0 192 35.82 192 80 0 9.26-3.97 18.12-10.91 26.39C392.15 208.21 328.23 192 256 192s-136.15 16.21-181.09 42.39C67.97 226.12 64 217.26 64 208c0-44.18 85.96-80 192-80zM120.43 264.64C155.04 249.93 201.64 240 256 240s100.96 9.93 135.57 24.64C356.84 279.07 308.93 288 256 288s-100.84-8.93-135.57-23.36z]', pathAttrs));
  }
}
