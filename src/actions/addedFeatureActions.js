export const addFeature = (feature) => {
    console.log("from the action", feature);
    return {type: 'ADD_FEATURE', payload: feature}
}