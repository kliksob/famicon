/* Famicon by https://github.com/kliksob */
var m = require('mithril');
var util = require('../../utils.js');
module.exports = {
  view: function view(vnode) {
    var attrs = vnode.attrs;
    var svgAttrs = Object.assign({ xmlns: util.xmlns }, util.onlyObject(attrs.svgAttrs));
    var pathAttrs = util.onlyObject(attrs.pathAttrs);  
    return m('svg[id=chess-board][viewBox=0 0 512 512]', svgAttrs, m('path[d=M255.9.2h-64v64h64zM0 64.17v64h64v-64zM128 .2H64v64h64zm64 255.9v64h64v-64zM0 192.12v64h64v-64zM383.85.2h-64v64h64zm128 0h-64v64h64zM128 256.1H64v64h64zM511.8 448v-64h-64v64zm0-128v-64h-64v64zM383.85 512h64v-64h-64zm128-319.88v-64h-64v64zM128 512h64v-64h-64zM0 512h64v-64H0zm255.9 0h64v-64h-64zM0 320.07v64h64v-64zm319.88-191.92v-64h-64v64zm-64 128h64v-64h-64zm-64 128v64h64v-64zm128-64h64v-64h-64zm0-127.95h64v-64h-64zm0 191.93v64h64v-64zM64 384.05v64h64v-64zm128-255.9v-64h-64v64zm191.92 255.9h64v-64h-64zm-128-191.93v-64h-64v64zm128-127.95v64h64v-64zm-128 255.9v64h64v-64zm-64-127.95H128v64h64zm191.92 64h64v-64h-64zM128 128.15H64v64h64zm0 191.92v64h64v-64z]', pathAttrs));
  }
}
