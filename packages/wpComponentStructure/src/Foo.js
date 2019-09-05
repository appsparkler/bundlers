import React, {
  Component
} from 'react'

export default class FooButton extends Component {
  handleClick() {
    alert('I am Foo Button')
  }

  render() {
    return(
      <div >
        <button type = "button" onClick={this.handleClick}>
          Foo Button
        </button>
      </div>
    )
  }
}
