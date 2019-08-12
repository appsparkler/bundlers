import { resolve } from 'path'

export default {
  compact: true,
  file: resolve('dist/bundle.js'),
  format: 'umd',
  name: 'foo'
}
