import React from "react";
import { connect } from "react-redux";
import AddedFeature from "./AddedFeature";

const AddedFeatures = props => {
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.cars[props.carId].car.features.length ? (
        <ol type="1">
          {props.cars[props.carId].car.features.map(item => (
            <AddedFeature
              key={item.id}
              feature={item}
              removeBuy={props.removeBuy}
              carId={props.carId}
            />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cars: state
  };
};

export default connect(mapStateToProps)(AddedFeatures);
