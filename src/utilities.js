export const dateDifference = (dateString1) => {
  let date2 = new Date("2021-09-13");
  let difference = new Date(dateString1).getTime() - date2.getTime();
  let daysDifference = Math.floor(difference / 1000 / 60 / 60 / 24);
  return daysDifference;
};
