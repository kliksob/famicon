/* Famicon by https://github.com/kliksob */
var m = require('mithril');
var util = require('../../utils.js');
module.exports = {
  view: function view(vnode) {
    var attrs = vnode.attrs;
    var svgAttrs = Object.assign({ xmlns: util.xmlns }, util.onlyObject(attrs.svgAttrs));
    var pathAttrs = util.onlyObject(attrs.pathAttrs);  
    return m('svg[id=bezier-curve][viewBox=0 0 640 512]', svgAttrs, m('path[d=M368 32h-96c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32zM208 88h-84.75C113.75 64.56 90.84 48 64 48 28.66 48 0 76.65 0 112s28.66 64 64 64c26.84 0 49.75-16.56 59.25-40h79.73c-55.37 32.52-95.86 87.32-109.54 152h49.4c11.3-41.61 36.77-77.21 71.04-101.56-3.7-8.08-5.88-16.99-5.88-26.44V88zm-48 232H64c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32zM576 48c-26.84 0-49.75 16.56-59.25 40H432v72c0 9.45-2.19 18.36-5.88 26.44 34.27 24.35 59.74 59.95 71.04 101.56h49.4c-13.68-64.68-54.17-119.48-109.54-152h79.73c9.5 23.44 32.41 40 59.25 40 35.34 0 64-28.65 64-64s-28.66-64-64-64zm0 272h-96c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32z]', pathAttrs));
  }
}
