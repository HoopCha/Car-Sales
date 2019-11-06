import React from 'react';
import { connect } from 'react-redux';
import { removeBuy } from '../actions/actions';

const AddedFeature = props => {
  const removeItem = event => {
    event.preventDefault();
    props.removeBuy(props.feature);
  };
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button"
       onClick={removeItem}
      >X</button>
      {props.feature.name}
    </li>
  );
};

export default connect(() => {}, { removeBuy })(AddedFeature);
