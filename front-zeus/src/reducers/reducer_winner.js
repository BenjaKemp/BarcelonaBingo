const winnerIndex = [];

export const findWinner = index => {
  winnerIndex.push(index);

  const windex = [
    [0, 1, 2, 3, 4],
    [5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24],
    [0, 5, 10, 15, 20],
    [1, 6, 11, 16, 21],
    [2, 7, 12, 17, 22],
    [3, 8, 13, 18, 23],
    [4, 9, 14, 19, 24]
  ];
  for (let i = 0; i < winnerIndex.length; i++) {
    windex.forEach(array => {
      let answer = array.every(el => {
        return winnerIndex.includes(el);
      });
      if (answer && winnerIndex.length >= 5) {
        console.log("you win");
        // alert('YOU JUST WON THE FUCKING GAME');
      }
    });
  }
};
