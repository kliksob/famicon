const m = require('mithril');
const { onlyObject, xmlns } = require('../../utils.js');
module.exports = {
  view({ attrs }) {
    const svgAttrs = Object.assign({xmlns}, onlyObject(attrs.svgAttrs));
    const pathAttrs = onlyObject(attrs.pathAttrs);  
    return m('svg[id=angle-down][viewBox=0 0 320 512]', svgAttrs, m('path[d=M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z]', pathAttrs));
  }
}
