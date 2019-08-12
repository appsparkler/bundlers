import { Foo } from './Foo'
import $ from 'jquery'

const BAR = {
  foo: Foo.call('foo'),
  divsSelectedByRollup: $('div')
};

export default BAR;
