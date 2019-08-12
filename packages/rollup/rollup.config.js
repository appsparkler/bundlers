import input from './.rollup/input'
import output from './.rollup/output'
import plugins from './.rollup/plugins/index'

export default [{
  cache: false,
  input: input.call('src/main.js'),
  output: output.call({
    path: 'dist/bundle.js',
    name: 'mainBundle'
  }),
  plugins
}, {
  cache: false,
  input: input.call('src/Foo.js'),
  output: output.call({
    path: 'dist/Foo.js',
    name: 'foo'
  }),
  plugins
}, {
  cache: false,
  input: input.call('src/Bar.js'),
  output: output.call({
    path: 'dist/Bar.js',
    name: 'bar'
  }),
  plugins
}]
