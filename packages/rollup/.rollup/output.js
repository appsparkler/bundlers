import { resolve } from 'path'


export default function() {
  const globals = {
    './Bar': 'Bar',
    './Foo': 'Foo'
  };
  try {
    console.log(this.path);
    return {
      globals,
      compact: true,
      file: this.path,
      format: 'umd',
      name: this.name
    }
  } catch (e) {
      console.error(e)
  }
}
