import React from 'react';
import { connect } from 'react-redux';
import {addFeature} from '../actions/addedFeatureActions'
import AddedFeature from './AddedFeature';

const AddedFeatures = props => {
  console.log(props.addedFeatures);
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.addedFeatures.length ? (
        <ol type="1">
          {props.addedFeatures.map(item => {
            console.log("the item", item);
            return <AddedFeature key={item.id} feature={item} />
          })}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

// export default AddedFeatures;

const mapStateToProps = state => {
  console.log("from mapStateToProps", state.car.features);
  return {
    addedFeatures: state.car.features
    
}}

export default connect(mapStateToProps, {})(AddedFeatures);