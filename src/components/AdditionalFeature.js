import React from 'react';
import { connect } from 'react-redux';
import {addFeature} from '../actions/addedFeatureActions'

const AdditionalFeature = props => {
  return (
    <li>
      <button id={props.feature.id} className="button" onClick={e=>{
          props.addFeature(props.feature)
      }}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

// export default AdditionalFeature;

const mapStateToProps = state => {
  console.log("from mapStateToProps", state.car.features);
  return {
    addedFeatures: state.car.features
    
}}
export default connect(mapStateToProps, {addFeature})(AdditionalFeature)
