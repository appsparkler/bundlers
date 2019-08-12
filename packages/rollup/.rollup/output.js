import { resolve } from 'path'

export default function() {
  try {
    return {
      compact: true,
      file: resolve(this.path),
      format: 'umd',
      name: this.name
    }
  } catch (e) {
      console.error(e)
  }
}
