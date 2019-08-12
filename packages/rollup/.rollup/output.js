import { resolve } from 'path'


export default function() {
  const globals = {
    'C:\\Users\\aakshah\\projects\\monorepos\\build-tools\\packages\\rollup\\src\\Foo': 'Foo',
    'C:\\Users\\aakshah\\projects\\monorepos\\build-tools\\packages\\rollup\\src\\Bar': 'Bar'
  };
  try {
    return {
      globals: this.globals ? this.globals : undefined,
      compact: true,
      file: this.path,
      format: 'umd',
      name: this.name
    }
  } catch (e) {
      console.error(e)
  }
}
