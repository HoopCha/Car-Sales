import React from 'react';

const AddedFeature = props => {
  console.log(props)
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button"
      onClick={() => props.removeBuy({feature:props.feature,carId:props.carId})}
      >X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
