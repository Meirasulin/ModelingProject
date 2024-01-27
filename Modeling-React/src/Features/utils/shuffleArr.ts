const shuffle = (arr: []) => {
  const randomeArr = arr.sort(() => Math.random() - 0.5);
  return randomeArr;
};
export default shuffle;
