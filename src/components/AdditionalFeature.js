import React from 'react';
import { connect } from 'react-redux';
import {addFeature} from '../actions/addedFeatureActions'

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button id={props.feature.id} className="button" onClick={e=>{
        console.log(props.feature);
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
