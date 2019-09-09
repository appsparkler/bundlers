import $ from 'jquery'
import React, {
  Component
} from 'react'
import ReactDOM from 'react-dom'

export default class FooButton extends Component {
  constructor(human){
    super(human);
  }

  handleClick() {
    try {
      const { buttonTitle } = this.props.content
      alert(`Yay! It's ${buttonTitle}...`)
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    return(
      <div>
        <button type = "button" onClick={this.handleClick.bind(this)}>
          { this.props.content.buttonTitle + '....'}
        </button>
      </div>
    )
  }
}

$('.foo-button-component').each(iterate_FooButtonComponents);


function iterate_FooButtonComponents() {
  let props=$(this).attr('data-props');
  props = JSON.parse(props);
  ReactDOM.render(
    <FooButton content={props}/>, this
  );
}
