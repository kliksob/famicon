const m = require('mithril');
const { onlyObject, xmlns } = require('../../utils.js');
module.exports = {
  view({ attrs }) {
    const svgAttrs = Object.assign({xmlns}, onlyObject(attrs.svgAttrs));
    const pathAttrs = onlyObject(attrs.pathAttrs);  
    return m('svg[id=cloud-meatball][viewBox=0 0 512 512]', svgAttrs, m('path[d=M48 352c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48zm416 0c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48zm-119 11.1c4.6-14.5 1.6-30.8-9.8-42.3-11.5-11.5-27.8-14.4-42.3-9.9-7-13.5-20.7-23-36.9-23s-29.9 9.5-36.9 23c-14.5-4.6-30.8-1.6-42.3 9.9-11.5 11.5-14.4 27.8-9.9 42.3-13.5 7-23 20.7-23 36.9s9.5 29.9 23 36.9c-4.6 14.5-1.6 30.8 9.9 42.3 8.2 8.2 18.9 12.3 29.7 12.3 4.3 0 8.5-1.1 12.6-2.5 7 13.5 20.7 23 36.9 23s29.9-9.5 36.9-23c4.1 1.3 8.3 2.5 12.6 2.5 10.8 0 21.5-4.1 29.7-12.3 11.5-11.5 14.4-27.8 9.8-42.3 13.5-7 23-20.7 23-36.9s-9.5-29.9-23-36.9zM512 224c0-53-43-96-96-96-.6 0-1.1.2-1.6.2 1.1-5.2 1.6-10.6 1.6-16.2 0-44.2-35.8-80-80-80-24.6 0-46.3 11.3-61 28.8C256.4 24.8 219.3 0 176 0 114.1 0 64 50.1 64 112c0 7.3.8 14.3 2.1 21.2C27.8 145.8 0 181.5 0 224c0 53 43 96 96 96h43.4c3.6-8 8.4-15.4 14.8-21.8 13.5-13.5 31.5-21.1 50.8-21.3 13.5-13.2 31.7-20.9 51-20.9s37.5 7.7 51 20.9c19.3.2 37.3 7.8 50.8 21.3 6.4 6.4 11.3 13.8 14.8 21.8H416c53 0 96-43 96-96z]', pathAttrs));
  }
}
