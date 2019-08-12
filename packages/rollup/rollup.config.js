import input from './.rollup/input'
import output from './.rollup/output'
import plugins from './.rollup/plugins/index'

const external = ['./Foo', './Bar'];

export default [{
  cache: false,
  external,
  input: 'src/Foo.js',
  output: output.call({
    path: 'dist/Foo.js',
    name: 'Foo'
  }),
  plugins
},

  {
  cache: false,
  external,
  input: 'src/Bar.js',
  output: output.call({
    path: 'dist/Bar.js',
    name: 'Bar',
    globals: {
      './Foo': 'Foo'
    }
  }),
  plugins
},
{
  cache: false,
  external,
  input: 'src/main.js',
  output: output.call({
    path: 'dist/bundle.js',
    name: 'mainBundle',
    globals: {
      './Foo': 'Foo',
      './Bar': 'Bar'
    }
  }),
  plugins
  }
]
