/* Famicon by https://github.com/kliksob */
var m = require('mithril');
var util = require('../../utils.js');
module.exports = {
  view: function view(vnode) {
    var attrs = vnode.attrs;
    var svgAttrs = Object.assign({ xmlns: util.xmlns }, util.onlyObject(attrs.svgAttrs));
    var pathAttrs = util.onlyObject(attrs.pathAttrs);  
    return m('svg[id=chromecast][viewBox=0 0 512 512]', svgAttrs, m('path[d=M447.83 64H64a42.72 42.72 0 0 0-42.72 42.72v63.92H64v-63.92h383.83v298.56H298.64V448H448a42.72 42.72 0 0 0 42.72-42.72V106.72A42.72 42.72 0 0 0 448 64zM21.28 383.58v63.92h63.91a63.91 63.91 0 0 0-63.91-63.92zm0-85.28V341a106.63 106.63 0 0 1 106.64 106.66v.34h42.72a149.19 149.19 0 0 0-149-149.36h-.33zm0-85.27v42.72c106-.1 192 85.75 192.08 191.75v.5h42.72c-.46-129.46-105.34-234.27-234.8-234.64z]', pathAttrs));
  }
}
