const m = require('mithril');
const { onlyObject, xmlns } = require('../../utils.js');
module.exports = {
  view({ attrs }) {
    const svgAttrs = Object.assign({xmlns}, onlyObject(attrs.svgAttrs));
    const pathAttrs = onlyObject(attrs.pathAttrs);  
    return m('svg[id=figma][viewBox=0 0 384 512]', svgAttrs, m('path[d=M277 170.7A85.35 85.35 0 0 0 277 0H106.3a85.3 85.3 0 0 0 0 170.6 85.35 85.35 0 0 0 0 170.7 85.35 85.35 0 1 0 85.3 85.4v-256zm0 0a85.3 85.3 0 1 0 85.3 85.3 85.31 85.31 0 0 0-85.3-85.3z]', pathAttrs));
  }
}
