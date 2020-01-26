/* Famicon by https://github.com/kliksob */
var m = require('mithril');
var util = require('../../utils.js');
module.exports = {
  view: function view(vnode) {
    var attrs = vnode.attrs;
    var svgAttrs = Object.assign({ xmlns: util.xmlns }, util.onlyObject(attrs.svgAttrs));
    var pathAttrs = util.onlyObject(attrs.pathAttrs);  
    return m('svg[id=wine-bottle][viewBox=0 0 512 512]', svgAttrs, m('path[d=M507.31 72.57L439.43 4.69c-6.25-6.25-16.38-6.25-22.63 0l-22.63 22.63c-6.25 6.25-6.25 16.38 0 22.63l-76.67 76.67c-46.58-19.7-102.4-10.73-140.37 27.23L18.75 312.23c-24.99 24.99-24.99 65.52 0 90.51l90.51 90.51c24.99 24.99 65.52 24.99 90.51 0l158.39-158.39c37.96-37.96 46.93-93.79 27.23-140.37l76.67-76.67c6.25 6.25 16.38 6.25 22.63 0l22.63-22.63c6.24-6.24 6.24-16.37-.01-22.62zM179.22 423.29l-90.51-90.51 122.04-122.04 90.51 90.51-122.04 122.04z]', pathAttrs));
  }
}
