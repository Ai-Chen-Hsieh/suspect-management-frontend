import { createSelector } from "reselect";

export const dataSelector = (state) => state.crimesList.data;

export const classifiedDataSelector = createSelector(dataSelector, (data) => {
  const newData = { wanted: [], arrested: [], highRisk: [], custody: [] };

  for (let i = 0; i < data.length; i++) {
    if (data[i].status === "wanted") {
      newData.wanted.push(data[i]);
    } else if (data[i].status === "arrested") {
      newData.arrested.push(data[i]);
    } else if (
      (data[i].status === "released" || data[i].status === "normal") &&
      data[i].arrestedCount >= 10
    ) {
      newData.highRisk.push(data[i]);
    } else {
      newData.custody.push(data[i]);
    }
  }
  return newData;
});
