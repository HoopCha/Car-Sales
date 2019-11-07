import React from 'react';

import Header from './Header';
import AddedFeatures from './AddedFeatures';
import AdditionalFeatures from './AdditionalFeatures';
import Total from './Total';
import { buyItem, removeBuy } from "../actions/actions";
import { connect } from "react-redux";

const App = props => {

  const removeBuy = item => {
    // dispatch an action here to remove an item
    props.removeBuy(item);
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
    props.buyItem(item);
  };

  const setCarID = () => {
    var CarID = props.match.params.carId;
    return CarID;
  }

return (
  <div>
    <div className="boxes">
      <div className="box">
        <Header carId={setCarID()}/>
        <AddedFeatures carId={setCarID()} removeBuy={removeBuy} />
      </div>
      <div className="box">
        <AdditionalFeatures carId={setCarID()} buyItem={buyItem} />
        <Total carId={setCarID()} />
      </div>
    </div>
  </div>
);
};

const mapStateToProps = state => {
  return {
    cars:state
  };
};

export default connect(
  mapStateToProps,
  { buyItem, removeBuy }
)(App);