import input from './.rollup/input'
import output from './.rollup/output'
import plugins from './.rollup/plugins/index'
import path from 'path'

const external = ['./Foo', './Bar'];

export default [{
  cache: false,
  external,
  input: 'src/Foo.js',
  output: output.call({
    path: 'dist/Foo.js',
    name: 'Foo',
    globals: {
      './Foo': 'Foos',
      './Bar': 'Bars'
    }
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
      [path.resolve('./src/Foo')]: 'Foos'
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
      [path.resolve('./src/Foo')]: 'Foos',
      [path.resolve('./src/Bar')]: 'Bars'
    }
  }),
  plugins
  }
]
