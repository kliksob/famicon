/* Famicon by https://github.com/kliksob */
var m = require('mithril');
var util = require('../../utils.js');
module.exports = {
  view: function view(vnode) {
    var attrs = vnode.attrs;
    var svgAttrs = Object.assign({ xmlns: util.xmlns }, util.onlyObject(attrs.svgAttrs));
    var pathAttrs = util.onlyObject(attrs.pathAttrs);  
    return m('svg[id=medrt][viewBox=0 0 544 512]', svgAttrs, m('path[d=M113.7 256c0 121.8 83.9 222.8 193.5 241.1-18.7 4.5-38.2 6.9-58.2 6.9C111.4 504 0 393 0 256S111.4 8 248.9 8c20.1 0 39.6 2.4 58.2 6.9C197.5 33.2 113.7 134.2 113.7 256m297.4 100.3c-77.7 55.4-179.6 47.5-240.4-14.6 5.5 14.1 12.7 27.7 21.7 40.5 61.6 88.2 182.4 109.3 269.7 47 87.3-62.3 108.1-184.3 46.5-272.6-9-12.9-19.3-24.3-30.5-34.2 37.4 78.8 10.7 178.5-67 233.9m-218.8-244c-1.4 1-2.7 2.1-4 3.1 64.3-17.8 135.9 4 178.9 60.5 35.7 47 42.9 106.6 24.4 158 56.7-56.2 67.6-142.1 22.3-201.8-50-65.5-149.1-74.4-221.6-19.8M296 224c-4.4 0-8-3.6-8-8v-40c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v40c0 4.4-3.6 8-8 8h-40c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h40c4.4 0 8 3.6 8 8v40c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-40c0-4.4 3.6-8 8-8h40c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8h-40z]', pathAttrs));
  }
}
