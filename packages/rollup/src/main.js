import { Foo } from './Foo'
import Bar from './Bar'

const BAZ = {
  foo: Foo.call('foo'),
  bar: Bar
};

console.log(BAZ);

export default BAZ;
