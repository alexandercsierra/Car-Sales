import React from 'react';
import { connect } from 'react-redux';
// import {removeFeature} from '../actions/removeFeatureActions'

const Total = props => {
  return (
    <div className="content">
      <h4>Total Amount: ${props.additionalPrice}</h4>
    </div>
  );
};

// export default Total;

const mapStateToProps = state => {
  console.log("from mapStateToProps", state.car.price);
  return {
    additionalPrice: state.car.price
    
}}
export default connect(mapStateToProps, {})(Total)
