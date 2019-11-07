
export const BUY_ITEM = 'BUY_ITEM';
export const buyItem = feature => {
  console.log(`buy item action, ${feature}`);
  return { type: BUY_ITEM, payload: feature };
};


export const REMOVE_BUY = 'REMOVE_BUY';
export const removeBuy = feature => {
  console.log(`remove buy action, ${feature}`);
  return { type: REMOVE_BUY, payload: feature };
};
