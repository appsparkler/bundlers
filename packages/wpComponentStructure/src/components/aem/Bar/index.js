import React, {
  Component,
} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
//
import $ from 'jquery';

export default class BarForm extends Component {
  constructor(man) {
    super(man);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    alert('submitting form now....')
  }

  render() {
    return(
      <form  onSubmit={this.handleSubmit}>
        <div>
          <input type="text" placeholder={this.props.content.placeholder} />
        </div>
        <button type="submit">{ this.props.content.btnLabel }</button>
      </form>
    )
  }
}

BarForm.propTypes = {
  content: PropTypes.object
};

$('.bar-form-component').each(iterate_FooButtonComponents);

function iterate_FooButtonComponents() {
  let props=$(this).attr('data-props');
  props = JSON.parse(props);
  ReactDOM.render(
      <BarForm content={props}/>, this
  );
}
