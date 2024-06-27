const calculateYear = (startDate) => {
  const currentDate = new Date();
  const yearsDifference = currentDate.getFullYear() - startDate.getFullYear();
  const isBeforeStartDate =
    currentDate.getMonth() < startDate.getMonth() ||
    (currentDate.getMonth() === startDate.getMonth() &&
      currentDate.getDate() < startDate.getDate());
  return isBeforeStartDate ? yearsDifference - 1 : yearsDifference;
};

export default calculateYear;
