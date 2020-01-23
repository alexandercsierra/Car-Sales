import React from 'react';
import { connect } from 'react-redux';
// import {removeFeature} from '../actions/removeFeatureActions'

const Total = props => {
  console.log("total props", props.additionalPrice)
  return (
    <div className="content">
      <h4>{`Total Amount: ${props.additionalPrice}`}</h4>
    </div>
  );
};

// export default Total;

const mapStateToProps = state => {
  // console.log("from mapStateToProps", state.car.price);
  console.log("from total", state.additionalPrice);
  return {
    additionalPrice: state.additionalPrice
    
}}
export default connect(mapStateToProps, {})(Total)
