import { resolve } from 'path'

export default function() {
  try {
    return resolve(this);
  } catch (e) {
      console.error(e);
  }
}
