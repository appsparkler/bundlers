import path from 'path'
import input from './input'
import output from './output'
import plugins from './plugins/index'

const external = ['./Foo', './Bar'];

export default [{
  cache: false,
  external,
  input: 'src/Foo.js',
  output: output.call({
    path: 'dist/Foo.js',
    // name: 'Foos',
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
    // name: 'Bars',
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
    // name: 'MainBundles',
    globals: {
      [path.resolve('./src/Foo')]: 'Foo',
      [path.resolve('./src/Bar')]: 'Bar'
    }
  }),
  plugins
  }
]
