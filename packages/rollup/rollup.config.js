import input from './.rollup/input'
import output from './.rollup/output'
import plugins from './.rollup/plugins/index'

const external = ['./Bar', './Foo'];
const globals ={
  './Bar': 'Bar'
};

export default [{
  cache: false,
  external,
  // globals,
  input: input.call('src/main.js'),
  output: output.call({
    path: 'dist/bundle.js',
    name: 'mainBundle'
  }),
  plugins
}, {
  cache: false,
  external,
  // globals,
  input: input.call('src/Foo.js'),
  output: output.call({
    path: 'dist/Foo.js',
    name: 'Foo'
  }),
  plugins
}, {
  cache: false,
  external,
  // globals,
  input: input.call('src/Bar.js'),
  output: output.call({
    path: 'dist/Bar.js',
    name: 'Bar'
  }),
  plugins
}]
