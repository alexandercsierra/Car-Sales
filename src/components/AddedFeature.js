import React from 'react';
import { connect } from 'react-redux';
import {removeFeature} from '../actions/removeFeatureActions'


const AddedFeature = props => {
  console.log("from added feature", props);
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={e =>{
        console.log(e.target.id);
        props.removeFeature(props.feature)
      }}>X</button>
      {props.feature.name}
    </li>
  );
};

// export default AddedFeature;



const mapStateToProps = state => {
  console.log("from mapStateToProps", state.car.features);
  return {
    addedFeatures: state.car.features
    
}}
export default connect(mapStateToProps, {removeFeature})(AddedFeature)