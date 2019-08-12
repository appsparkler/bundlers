import { resolve } from 'path'


export default function() {
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
