import html from 'rollup-plugin-bundle-html';

export default html({
    template: '<html><head></head><body></body></html>',
    dest: "dist",
    filename: 'index.html'
})
