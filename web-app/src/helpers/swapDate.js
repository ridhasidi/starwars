export const swapDate = (date) => {
  let newDate = "";
  const arr = date.split("-");
  for (let i = arr.length - 1; i >= 0; i--) {
    if (i !== 0) {
      newDate += arr[i] + "-";
    } else {
      newDate += arr[i];
    }
  }
  return newDate;
};
