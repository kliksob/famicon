const m = require('mithril');
const { onlyObject, xmlns } = require('../../utils.js');
module.exports = {
  view({ attrs }) {
    const svgAttrs = Object.assign({xmlns}, onlyObject(attrs.svgAttrs));
    const pathAttrs = onlyObject(attrs.pathAttrs);  
    return m('svg[id=sim-card][viewBox=0 0 384 512]', svgAttrs, m('path[d=M0 64v384c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V128L256 0H64C28.7 0 0 28.7 0 64zm224 192h-64v-64h64v64zm96 0h-64v-64h32c17.7 0 32 14.3 32 32v32zm-64 128h64v32c0 17.7-14.3 32-32 32h-32v-64zm-96 0h64v64h-64v-64zm-96 0h64v64H96c-17.7 0-32-14.3-32-32v-32zm0-96h256v64H64v-64zm0-64c0-17.7 14.3-32 32-32h32v64H64v-32z]', pathAttrs));
  }
}
