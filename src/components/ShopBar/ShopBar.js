import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ShopBar.css';

class ShopBar extends Component {
  render = props => (
    <div
      className="buttonWrapper"
      style={{
        width: '50%',
        padding: '10px',
        margin: 'auto'
      }}
    >
      <button type="button" onClick={this.props.saveHandler}>
        <i className="fa fa-floppy-o" aria-hidden="true" /> Save
      </button>
      <button type="button" onClick={this.props.addToCartHandler}>
        <i className="fa fa-cart-plus" aria-hidden="true" /> Add
      </button>
    </div>
  );
}

ShopBar.propTypes = {
  saveHandler: PropTypes.func.isRequired,
  addToCartHandler: PropTypes.func.isRequired
};
ShopBar.defaultProps = {
  saveHandler: null,
  addToCartHandler: null
};

export default ShopBar;
