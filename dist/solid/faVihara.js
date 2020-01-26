/* Famicon by https://github.com/kliksob */
var m = require('mithril');
var util = require('../../utils.js');
module.exports = {
  view: function view(vnode) {
    var attrs = vnode.attrs;
    var svgAttrs = Object.assign({ xmlns: util.xmlns }, util.onlyObject(attrs.svgAttrs));
    var pathAttrs = util.onlyObject(attrs.pathAttrs);  
    return m('svg[id=vihara][viewBox=0 0 640 512]', svgAttrs, m('path[d=M632.88 400.71L544 352v-64l55.16-17.69c11.79-5.9 11.79-22.72 0-28.62L480 192v-64l27.31-16.3c7.72-7.72 5.61-20.74-4.16-25.62L320 0 136.85 86.07c-9.77 4.88-11.88 17.9-4.16 25.62L160 128v64L40.84 241.69c-11.79 5.9-11.79 22.72 0 28.62L96 288v64L7.12 400.71c-5.42 3.62-7.7 9.63-7 15.29.62 5.01 3.57 9.75 8.72 12.33L64 448v48c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-48h160v48c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-48h160v48c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-48l55.15-19.67c5.16-2.58 8.1-7.32 8.72-12.33.71-5.67-1.57-11.68-6.99-15.29zM224 128h192v64H224v-64zm-64 224v-64h320v64H160z]', pathAttrs));
  }
}
