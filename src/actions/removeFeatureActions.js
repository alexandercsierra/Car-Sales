export const removeFeature = (feature) => {
    console.log("from the remove action", feature);
    return {type: 'REMOVE_FEATURE', payload: feature}
}