const m = require('mithril');
const { onlyObject, xmlns } = require('../../utils.js');
module.exports = {
  view({ attrs }) {
    const svgAttrs = Object.assign({xmlns}, onlyObject(attrs.svgAttrs));
    const pathAttrs = onlyObject(attrs.pathAttrs);  
    return m('svg[id=cloudsmith][viewBox=0 0 332 512]', svgAttrs, m('path[d=M332.5 419.9c0 46.4-37.6 84.1-84 84.1s-84-37.7-84-84.1 37.6-84 84-84 84 37.6 84 84zm-84-243.9c46.4 0 80-37.6 80-84s-33.6-84-80-84-88 37.6-88 84-29.6 76-76 76-84 41.6-84 88 37.6 80 84 80 84-33.6 84-80 33.6-80 80-80z]', pathAttrs));
  }
}
