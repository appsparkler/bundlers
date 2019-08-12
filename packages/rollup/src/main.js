import $ from 'jquery'

import { Foo } from './Foo'
import Bar from './Bar'

const BAR = {
  foo: Foo.call('foo'),
  bar: Bar,
  divsSelectedByRollup: $('div')
};

export default BAR;
