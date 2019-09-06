import $ from 'jquery'

import React, {
  Component
} from 'react'
import ReactDOM from 'react-dom'

export default class FooButton extends Component {
  handleClick() {
    alert('I am Foo Button')
  }

  render() {
    return(
      <div>
        <button type = "button" onClick={this.handleClick}>
          Foo Button
        </button>
      </div>
    )
  }
}

$('.foo-button-component').each(iterate_FooButtonComponents);


function iterate_FooButtonComponents() {
  console.log($(this).attr('data-props'));

  ReactDOM.render(
    <FooButton />, this
  );
}
