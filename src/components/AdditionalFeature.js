import React from 'react';
import { connect } from 'react-redux';
import { buyItem } from '../actions/actions';

const AdditionalFeature = props => {
  const addItem = event => {
    event.preventDefault();
    props.buyItem(props.feature);
  };
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button"
      onClick={addItem}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect(() => {}, { buyItem })(AdditionalFeature);
